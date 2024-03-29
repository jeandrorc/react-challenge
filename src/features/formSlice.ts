import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  firstName: string;
  lastName: string;
}

const initialState: InitialState = {
  firstName: 'Breaking',
  lastName: 'Bad'
};

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    submitForm: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
    resetForm: (state) => {
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
    }
  }
});

export const { submitForm, resetForm } = formSlice.actions;

export default formSlice.reducer;
