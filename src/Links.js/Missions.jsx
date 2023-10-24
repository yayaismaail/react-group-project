import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { updateStatus, fetchMissions } from '../redux/MissionSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mission = () => {
  const { mission, status } = useSelector((store) => store.mission);
  const dispatch = useDispatch();

  const handleStatusUpdate = (id) => {
    dispatch(updateStatus(id));
  };

  const updateColor = (status) => {
    let classes = '';
    if (status === 'Active member') {
      classes = 'bg-color';
    }
    if (status === 'Not a member') {
      classes = 'member';
    } else classes = 'bg-color';
    return classes;
  };

  const getButtonText = (missionStatus) => {
    if (missionStatus === 'Active member') return 'Leave mission';
    if (missionStatus === 'Not a member') return 'Join mission';
    return 'Join Mission';
  };

  const getButtonClass = (missionStatus) => {
    if (missionStatus === 'Active member') return 'button-cancel';
    if (missionStatus === 'Not a member') return 'button-join';
    return 'button-join';
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  return (
    <section className="mission-section">
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="mission">Mission</th>
            <th className="col">Description</th>
            <th className="col">Status</th>
            <th className="col"> </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {mission.map((m) => (
            <tr className="table-row" key={m.mission_id}>
              <td>{m.mission_name}</td>
              <td className="description">{m.description}</td>
              <td className="status-container align-middle">
                <span className={updateColor(m.status)}>{m.status}</span>
              </td>
              <td className="align-middle">
                <button
                  type="button"
                  className={`button ${getButtonClass(m.status)}`}
                  onClick={() => handleStatusUpdate(m.mission_id)}
                >
                  {getButtonText(m.status)}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Mission;
