import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndPoint = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  mission: [],
  status: 'idle',
  error: null,
};

export const fetchMissions = createAsyncThunk(
  'mission/fetchMissions',
  async () => {
    const { data } = await axios.get(apiEndPoint);

    data.forEach((mission) => {
      mission.status = 'Not a member';
    });
    return data;
  },
);

export const MissionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      const id = action.payload;
      const mission = state.mission.find((m) => m.mission_id === id);

      if (mission) {
        mission.status = mission.status === 'Not a member' ? 'Active member' : 'Not a member';
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mission = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default MissionSlice.reducer;
export const { updateStatus } = MissionSlice.actions;
