import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rocket from './Links.js/Rocket';
import Dragons from './routes/Dragons';
import Missions from './Links.js/Missions';
import Profile from './Links.js/Profile';

const NavRoutes = () => (
  <Routes>
    <Route path="/" element={<Rocket />} />
    <Route path="/dragons" element={<Dragons />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/missions" element={<Missions />} />
  </Routes>
);
export default NavRoutes;
