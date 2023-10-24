import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDragons } from '../redux/dragons/dragonsSlice';
import Dragon from '../components/Dragon';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const isLoading = useSelector((state) => state.dragons.isLoading);
  const ifSucceed = useSelector((state) => state.dragons.ifSucceed);

  useEffect(() => {
    dispatch(fetchAllDragons());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {ifSucceed ? <Dragon dragons={dragons} /> : null}
    </div>
  );
};

export default Dragons;
