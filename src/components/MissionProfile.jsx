import PropTypes from 'prop-types';

const MissionProfile = ({ filterMission }) => (
  <div className="mission-container">
    <h1>My Missions</h1>
    {filterMission.map((m) => (
      <ul className="mission-list" key={m.mission_id}>
        <li>{m.mission_name}</li>
      </ul>
    ))}
  </div>
);

export default MissionProfile;

MissionProfile.propTypes = {
  filterMission: PropTypes.arrayOf.isRequired,
};
