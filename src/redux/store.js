import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './MissionSlice';
import rocketReducer from './Rockets/RocketsSlice';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketReducer,
    dragons: dragonsReducer,

  },
});

export default store;
