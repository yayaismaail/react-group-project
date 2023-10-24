import {
  createSelector,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4/dragons';

export const fetchAllDragons = createAsyncThunk(
  'dragons/fetchAllDragons',
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseUrl);
      if (response.data === '') return [];
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  dragons: [],
  ifSucceed: false,
  isLoading: false,
};

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const { payload: id } = action;
      const updatedDragons = state.dragons.map((dragon) => {
        if (dragon.id === id) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
      return { ...state, dragons: updatedDragons };
    },
    cancelReservation: (state, action) => {
      const { payload: id } = action;
      const updatedDragons = state.dragons.map((dragon) => {
        if (dragon.id === id) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });
      return { ...state, dragons: updatedDragons };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDragons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllDragons.fulfilled, (state, action) => {
        state.dragons = action.payload;
        state.ifSucceed = true;
        state.isLoading = false;
      });
  },
});

// Selector to get reserved dragons
export const selectReservedDragons = createSelector(
  (state) => state.dragons.dragons,
  (dragons) => dragons.filter((dragon) => dragon.reserved),
);

export const { reserveDragon, cancelReservation } = dragonsSlice.actions;

export default dragonsSlice.reducer;
