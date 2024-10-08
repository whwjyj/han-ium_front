import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const LoginMain = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState({ city: '', district: '' });

  const handleSignUp = () => {
    // 필수 입력 필드가 모두 채워졌는지 확인
    if (
      !name ||
      !phone ||
      !verificationCode ||
      !username ||
      !password ||
      !confirmPassword ||
      !email ||
      !address.city ||
      !address.district
    ) {
      Alert.alert('필수 입력 오류', '모든 필수 입력 칸을 채워주세요.');
      return;
    }

    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== confirmPassword) {
      Alert.alert('비밀번호 오류', '비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    // 모든 필드가 채워졌고 비밀번호가 일치하는 경우 회원가입 정보를 콘솔에 출력하고 로그인 페이지로 이동
    console.log('회원가입 정보:', {
      name,
      phone,
      verificationCode,
      gender,
      username,
      password,
      confirmPassword,
      email,
      address,
    });
    navigation.navigate('Login'); // 로그인 페이지로 이동
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>회원가입</Text>

      <Text style={styles.label}>이름*</Text>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={setName}
        placeholder="실명 입력"
      />

      <Text style={styles.label}>전화번호*</Text>
      <View style={styles.inlineInput}>
        <TextInput
          value={phone}
          style={[styles.input, { flex: 3 }]}
          onChangeText={setPhone}
          placeholder="000-0000-0000"
          keyboardType="phone-pad"
        />
        <Button
          title="인증번호 요청"
          buttonStyle={[styles.button, { flex: 1 }]}
        />
      </View>

      <TextInput
        value={verificationCode}
        style={styles.input}
        onChangeText={setVerificationCode}
        placeholder="인증번호 6자리"
        keyboardType="number-pad"
      />

      <Text style={styles.label}>성별 (선택)</Text>
      <View style={styles.inlineInput}>
        <Button
          title="남자"
          buttonStyle={[
            styles.button,
            gender === '남자' && styles.selectedButton,
          ]}
          onPress={() => setGender('남자')}
        />
        <Button
          title="여자"
          buttonStyle={[
            styles.button,
            gender === '여자' && styles.selectedButton,
          ]}
          onPress={() => setGender('여자')}
        />
      </View>

      <Text style={styles.label}>아이디*</Text>
      <TextInput
        value={username}
        style={styles.input}
        onChangeText={setUsername}
        placeholder="아이디"
      />

      <Text style={styles.label}>비밀번호*</Text>
      <TextInput
        value={password}
        style={styles.input}
        onChangeText={setPassword}
        placeholder="PW"
        secureTextEntry
      />

      <Text style={styles.label}>비밀번호 확인*</Text>
      <TextInput
        value={confirmPassword}
        style={styles.input}
        onChangeText={setConfirmPassword}
        placeholder="PW"
        secureTextEntry
      />

      <Text style={styles.label}>이메일*</Text>
      <View style={styles.inlineInput}>
        <TextInput
          value={email}
          style={[styles.input, { flex: 3 }]}
          onChangeText={setEmail}
          placeholder="example@email.com"
          keyboardType="email-address"
        />
        <Button
          title="인증번호 받기"
          buttonStyle={[styles.button, { flex: 1 }]}
        />
      </View>

      <Text style={styles.label}>거주지*</Text>
      <View style={styles.inlineInput}>
        <TextInput
          value={address.city}
          style={[styles.input, { flex: 1 }]}
          onChangeText={(text) => setAddress({ ...address, city: text })}
          placeholder="시도"
        />
        <TextInput
          value={address.district}
          style={[styles.input, { flex: 1 }]}
          onChangeText={(text) => setAddress({ ...address, district: text })}
          placeholder="시군구"
        />
      </View>

      <Button
        title="완료"
        buttonStyle={styles.confirmButton}
        onPress={handleSignUp}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  inlineInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#a7cdc3',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#7da453',
  },
  confirmButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 20,
  },
});

export default LoginMain;
