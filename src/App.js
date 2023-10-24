import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navigation from './Navigation';
import NavRoutes from './NavRoutes';
import { getDataFromServer } from './redux/Rockets/RocketsSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);
  return (
    <>
      <Navigation />

      <NavRoutes />
    </>
  );
}

export default App;
