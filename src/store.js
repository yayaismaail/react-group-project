import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './redux/MissionSlice';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    dragons: dragonsReducer,
  },
});

export default store;
