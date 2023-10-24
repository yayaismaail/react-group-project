import { useSelector } from 'react-redux';
import './ReservedDragons.css';

const ReservedDragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);

  const reservedDragons = dragons.filter(
    (dragon) => localStorage.getItem(`dragon-${dragon.id}`) === 'reserved',
  );
  return (
    <div className="dragons-profile">
      <h1 className="dragon-title">My Dragons</h1>
      {reservedDragons.length > 0 ? (
        reservedDragons.map((dragon) => (
          <div key={dragon.id} className="reserved-dragons">
            <p>{dragon.name}</p>
          </div>
        ))
      ) : (
        <p className="dragon-reservation">
          You have not reserved any Dragon yet.
        </p>
      )}
    </div>
  );
};

export default ReservedDragons;
