import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateAgreements } from '../src/store/signupSlice';

//얘도 useState로 로컬에서 정의하던거 다 빼서 중앙집중관리하겠습니닷

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const agreements = useSelector((state) => state.signup.agreements);
  const allChecked = agreements.over14 && agreements.terms && agreements.privacy && agreements.location && agreements.marketing;
  
  /*
  const [allChecked, setAllChecked] = useState(false);
  const [over14Checked, setOver14Checked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  */

  /*
  const handleAllChecked = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setOver14Checked(newValue);
    setTermsChecked(newValue);
    setPrivacyChecked(newValue);
    setLocationChecked(newValue);
    setMarketingChecked(newValue);
  };
  */

  /*
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
  */
 
  //모든 약관 항목을 체크하거나 체크 해제하는 함수 (0-> 리덕스 적용한것) 

  const handleAllChecked = () => {
    const newValue = !agreements.over14;
    dispatch(updateAgreements({
      over14: newValue,
      terms: newValue,
      privacy: newValue,
      location: newValue,
      marketing: newValue,
    }));
  };

  // 약관체크동의

  const handleConfirmPress = () => {
    if (
      agreements.over14 &&
      agreements.terms &&
      agreements.privacy
    ) {
      navigation.navigate('LoginMain');
    } else {
      // 체크가 안 된 항목이 있는 경우 처리
      console.log('모든 필수 항목을 체크해주세요');
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
            value={agreements.over14}
            onValueChange={() => dispatch(updateAgreements({ over14: !agreements.over14 }))}
          />
          <Text style={styles.checkboxLabel}>만 14세 이상입니다.</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={agreements.terms}
            onValueChange={() => dispatch(updateAgreements({ terms: !agreements.terms }))}
          />
          <Text style={styles.checkboxLabel}>(필수)서비스 이용약관</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={agreements.privacy}
            onValueChange={() => dispatch(updateAgreements({ privacy: !agreements.privacy }))}
          />
          <Text style={styles.checkboxLabel}>(필수)개인 정보 처리 방침</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={agreements.location}
            onValueChange={() => dispatch(updateAgreements({ location: !agreements.location }))}
          />
          <Text style={styles.checkboxLabel}>(선택) 위치정보 제공</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={agreements.marketing}
            onValueChange={() => dispatch(updateAgreements({ marketing: !agreements.marketing }))}
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
