// signup slice.js
// 이름, 전화번호, 인증 코드, 유저이름, 성별, 비밀번호, 비밀번호 확인, 이메일, 주소 (시-군구로 나눴음))
// 이용약관의 초기 상태들은 다 false 로 저장해둠.. 

// createSlice: 슬라이스 만들기 

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signupInfo: {
    name: '',
    phone: '',
    verificationCode: '',
    gender: '',
    username: '',
    password: '',
    email: '',
    address: { city: '', district: '' },
  },
  agreements: {
    over14: false,
    terms: false,
    privacy: false,
    location: false,
    marketing: false,
  },
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateSignupInfo: (state, action) => {
      state.signupInfo = { ...state.signupInfo, ...action.payload };
    },
    updateAgreements: (state, action) => {
      state.agreements = { ...state.agreements, ...action.payload };
    },
    resetSignup: (state) => {
      state.signupInfo = initialState.signupInfo;
      state.agreements = initialState.agreements;
    },
  },
});

export const { updateSignupInfo, updateAgreements, resetSignup } = signupSlice.actions;

export default signupSlice.reducer;