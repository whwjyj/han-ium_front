import React, { useState } from 'react';
import { SafeAreaView, FlatList, TextInput, TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const ChatContainer = styled.View`
  flex: 1;
  background-color: #f0f0f0;
`;

const ChatBody = styled.View`
  flex: 1;
  padding: 10px;
`;

const ChatBubble = styled.View`
  background-color: ${props => (props.user ? '#daf8cb' : '#e0e0e0')};
  padding: 10px;
  border-radius: 10px;
  margin-vertical: 5px;
  align-self: ${props => (props.user ? 'flex-end' : 'flex-start')};
  max-width: 80%;
`;

const InputContainer = styled.View`
  flex-direction: row;
  padding: 10px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #ccc;
`;

const Input = styled.TextInput`
  flex: 1;
  padding: 10px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
`;

const SendButton = styled.TouchableOpacity`
  padding: 10px;
  margin-left: 10px;
  background-color: #007aff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Disclaimer = styled.Text`
  padding: 10px;
  text-align: center;
  color: #666;
  font-size: 12px;
  background-color: #f0f0f0;
`;

const GptScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = async () => {
    if (inputText.trim()) {
      const userMessage = { id: Date.now().toString(), text: inputText, user: true };
      setMessages([...messages, userMessage]);
      setInputText('');

      try {
        // 백엔드에 메시지를 보내고 응답 받기 (주소 입력)
        const response = await axios.post('https://your-backend-api.com/chat', {
          message: inputText,
        });

        // 백엔드에서 응답 받고 메시지 리스트에 추가
        const botMessage = { id: Date.now().toString(), text: response.data.reply, user: false };
        setMessages(currentMessages => [...currentMessages, botMessage]);
      } catch (error) {
        console.error("Error fetching response from server:", error);
        const errorMessage = { id: Date.now().toString(), text: '응답을 불러오는 중 오류가 발생했습니다.', user: false };
        setMessages(currentMessages => [...currentMessages, errorMessage]);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ChatContainer>
        <ChatBody>
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <ChatBubble user={item.user}>
                <Text>{item.text}</Text>
              </ChatBubble>
            )}
            keyExtractor={item => item.id}
            ListEmptyComponent={() => (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>아직 메시지가 없습니다.</Text>
              </View>
            )}
          />
        </ChatBody>
        <InputContainer>
          <Input
            value={inputText}
            onChangeText={setInputText}
            placeholder="메시지를 입력하세요."
          />
          <SendButton onPress={handleSend}>
            <Text style={{ color: '#fff' }}>입력</Text>
          </SendButton>
        </InputContainer>
        <Disclaimer>
          본 서비스에서 제공하는 정보는 국토교통부 실거래가 공개시스템으로 법적인 효력이 없으므로 참고용으로만 활용하시기 바랍니다.
        </Disclaimer>
      </ChatContainer>
    </SafeAreaView>
  );
};

export default GptScreen;
