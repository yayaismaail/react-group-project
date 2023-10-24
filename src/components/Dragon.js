import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelReservation } from '../redux/dragons/dragonsSlice';
import './Dragon.css';

const Dragon = ({ dragons }) => {
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
    localStorage.setItem(`dragon-${id}`, 'reserved');
  };

  const handleCancelReservation = (id) => {
    dispatch(cancelReservation(id));
    localStorage.removeItem(`dragon-${id}`);
  };

  const isReserved = (id) => localStorage.getItem(`dragon-${id}`) === 'reserved';

  return (
    <div>
      {dragons.map((dragon) => (
        <div key={dragon.id} className="container">
          {dragon.flickr_images && dragon.flickr_images.length > 0 && (
            <img
              src={dragon.flickr_images[0]}
              alt={dragon.name}
              className="dragon-img"
            />
          )}
          <div className="text-wrapper">
            <div>
              <h2>{dragon.name}</h2>
              <p>
                {isReserved(dragon.id) && <span className="badge">Reserved</span>}
                {' '}
                {dragon.description}
              </p>
            </div>
            {isReserved(dragon.id) ? (
              <button
                type="button"
                className="cancel-btn"
                onClick={() => handleCancelReservation(dragon.id)}
              >
                Cancel reservation
              </button>
            ) : (
              <button
                type="button"
                className="reserve-btn"
                onClick={() => handleReserve(dragon.id)}
              >
                Reserve Dragon
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dragon;

Dragon.propTypes = {
  dragons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      flickr_images: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};
