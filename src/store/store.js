import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {auth: counterSlice.reducer},
})