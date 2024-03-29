import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findElementsInWord } from 'data';
import { Element } from 'types/element';

export const fetchElementBySymbolThunk = createAsyncThunk(
  'elements/fetchBySymbol',
  async (
    name: { firstName: string; lastName: string },
    { rejectWithValue }
  ) => {
    try {
      const responseFirstName = await findElementsInWord(name.firstName);
      const responseLastName = await findElementsInWord(name.lastName);

      if (!responseFirstName && !responseLastName) {
        return rejectWithValue('Elemento não encontrado');
      }

      const combinedResponse = {
        firstNameElements: responseFirstName,
        lastNameElements: responseLastName
      };

      return combinedResponse;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface InitialState {
  elementFirstName: Element | undefined;
  elementLastName: Element | undefined;
  loading: boolean;
  error: any;
}

const initialState: InitialState = {
  elementFirstName: { atomicNumber: 35, symbol: 'Br', name: 'Bromine' },
  elementLastName: { atomicNumber: 56, symbol: 'Ba', name: 'Barium' },
  loading: false,
  error: null
};

export const elementSlice = createSlice({
  name: 'elementSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchElementBySymbolThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchElementBySymbolThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.elementFirstName = action.payload.firstNameElements;
        state.elementLastName = action.payload.lastNameElements;
      })
      .addCase(fetchElementBySymbolThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default elementSlice.reducer;
