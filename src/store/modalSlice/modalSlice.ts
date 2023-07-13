import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.title = null;
    }
  }
})

export const {openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;