import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native'; // 네비게이션 추가
import styles from '../components/Bstyles';
import { COLORS } from '../components/theme';
import GptIcon from '../assets/images/gpt-icon.png';

const TabItem = ({ tabId, currentTabId, setTabId, iconName, imageName, label }) => {
  const isSelected = currentTabId === tabId;
  const navigation = useNavigation(); // 네비게이션 훅 사용

  const handlePress = () => {
    setTabId(tabId);
    // GPT 탭이 눌렸을 때 GptScreen으로 이동
    if (label === 'GPT') {
      navigation.navigate('GptScreen');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.tabIcon,
          {
            backgroundColor: isSelected ? COLORS.accent : COLORS.primary,
          },
        ]}
      >
        {iconName ? (
          <Icon name={iconName} size={25} color={COLORS.black} />
        ) : (
          <Image source={imageName} style={{ width: 25, height: 25 }} />
        )}
        <Text style={styles.tabText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const BottomTabBar = () => {
  const [tabId, setTabId] = useState(0); // tabId 기본값 설정

  return (
    <View style={styles.tabRow}>
      <TabItem
        tabId={0}
        currentTabId={tabId}
        setTabId={setTabId}
        iconName="home-outline"
        label="Home"
      />
      <TabItem
        tabId={1}
        currentTabId={tabId}
        setTabId={setTabId}
        iconName="newspaper-outline"
        label="뉴스소식"
      />
      <TabItem
        tabId={2}
        currentTabId={tabId}
        setTabId={setTabId}
        imageName={GptIcon}
        label="GPT"
      />
      <TabItem
        tabId={3}
        currentTabId={tabId}
        setTabId={setTabId}
        iconName="person-outline"
        label="마이페이지"
      />
    </View>
  );
};

export default BottomTabBar;
