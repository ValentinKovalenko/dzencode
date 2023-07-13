import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import {sliceApi} from "./apiSlice/apiSlice";
import modalReducer from './modalSlice/modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [sliceApi.reducerPath]: sliceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliceApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>