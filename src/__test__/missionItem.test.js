import React from 'react';
import { render } from '@testing-library/react';
import MissionProfile from '../components/MissionProfile'; // Make sure to import your component correctly

// Create a sample data for testing
const sampleMissions = [
  { mission_id: 1, mission_name: 'Mission 1' },
  { mission_id: 2, mission_name: 'Mission 2' },
  { mission_id: 3, mission_name: 'Mission 3' },
];

test('MissionProfile component renders with mission names', () => {
  // Render the MissionProfile component with the sample data
  const { getByText } = render(
    <MissionProfile filterMission={sampleMissions} />,
  );

  // Check if the component title "My Missions" is present
  expect(getByText('My Missions')).toBeInTheDocument();

  // Check if each mission name is present in the component
  sampleMissions.forEach((mission) => {
    const missionNameElement = getByText(mission.mission_name);
    expect(missionNameElement).toBeInTheDocument();
  });
});
