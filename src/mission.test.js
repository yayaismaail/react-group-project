import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

test('Navigation component renders correctly', () => {
  const { getByText, getByAltText, getByRole } = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>,
  );

  const headerElement = getByRole('banner', { name: '' });
  const logoImage = getByAltText('Space Travellers Hub Logo');
  const spaceHubText = getByText('Space Travellers Hub');
  const navElement = getByRole('navigation', { name: '' });

  const rocketNavLink = getByText('Rocket');
  const missionsNavLink = getByText('Missions');
  const dragonsNavLink = getByText('Dragons');
  const profileNavLink = getByText('My Profile');

  expect(headerElement).toBeInTheDocument();
  expect(logoImage).toBeInTheDocument();
  expect(spaceHubText).toBeInTheDocument();
  expect(navElement).toBeInTheDocument();

  expect(rocketNavLink).toBeInTheDocument();
  expect(missionsNavLink).toBeInTheDocument();
  expect(dragonsNavLink).toBeInTheDocument();
  expect(profileNavLink).toBeInTheDocument();
});

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

describe('updateColor', () => {
  it('should return "bg-color" for status "Active member"', () => {
    const status = 'Active member';
    const result = updateColor(status);
    expect(result).toBe('bg-color');
  });

  it('should return "member" for status "Not a member"', () => {
    const status = 'Not a member';
    const result = updateColor(status);
    expect(result).toBe('member');
  });

  it('should return "bg-color" for any other status', () => {
    const status = 'Some other status';
    const result = updateColor(status);
    expect(result).toBe('bg-color');
  });
});
