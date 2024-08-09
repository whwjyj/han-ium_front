import { configureStore } from '@reduxjs/toolkit'

import someSliceReducer from './features/someSlice'

const store = configureStore({
  reducer: {
    someFeature: someSliceReducer,
  },
})

export default store