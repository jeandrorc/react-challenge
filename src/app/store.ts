import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import formReducer from 'features/formSlice';
import elementReducer from 'features/elementsSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    element: elementReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
