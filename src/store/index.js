//  store> index.js
// configureStore 로 reducer를 감싸게 두고 이 안에서 모든 상태를 관리하도록 함...
// 맨처음에는 Reducer를 빈 상태로 뒀다가 계속해서 슬라이스를 추가할 예정임
// 여기서 모든 리듀서를 결합할 예정

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import signupReducer from './signupSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
  },
});

export default store;