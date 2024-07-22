import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native';

const SignUp = ({ navigation }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [over14Checked, setOver14Checked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  const handleAllChecked = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setOver14Checked(newValue);
    setTermsChecked(newValue);
    setPrivacyChecked(newValue);
    setLocationChecked(newValue);
    setMarketingChecked(newValue);
  };

  const handleConfirmPress = () => {
    if (
      allChecked &&
      over14Checked &&
      termsChecked &&
      privacyChecked
    ) {
      navigation.navigate('LoginMain');
    } else {
      // 체크가 안 된 항목이 있는 경우 처리
      console.log('모든 항목을 체크해주세요');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>서비스 이용 동의</Text>
      <ScrollView>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={allChecked}
            onValueChange={handleAllChecked}
          />
          <Text style={styles.checkboxLabel}>약관 전체 동의</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={over14Checked}
            onValueChange={() => setOver14Checked(!over14Checked)}
          />
          <Text style={styles.checkboxLabel}>만 14세 이상입니다.</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={termsChecked}
            onValueChange={() => setTermsChecked(!termsChecked)}
          />
          <Text style={styles.checkboxLabel}>(필수)서비스 이용약관</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={privacyChecked}
            onValueChange={() => setPrivacyChecked(!privacyChecked)}
          />
          <Text style={styles.checkboxLabel}>(필수)개인 정보 처리 방침</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={locationChecked}
            onValueChange={() => setLocationChecked(!locationChecked)}
          />
          <Text style={styles.checkboxLabel}>(선택) 위치정보 제공</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={marketingChecked}
            onValueChange={() => setMarketingChecked(!marketingChecked)}
          />
          <Text style={styles.checkboxLabel}>(선택) 마케팅 수신 동의</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  confirmButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SignUp;
