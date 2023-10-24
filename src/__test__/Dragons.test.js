import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Dragons from '../routes/Dragons';
import Dragon from '../components/Dragon';

describe('all dragons components render', () => {
  it('dragons component renders properly', () => {
    const userObj = jest.mock('../routes/Dragons', () => {
      renderer.create(<Dragons />).toJSON();
    });
    expect(userObj).toMatchSnapshot();
  });

  it('dragon component renders properly', () => {
    const userObj = jest.mock('../components/Dragon', () => {
      renderer.create(<Dragon />).toJSON();
    });
    expect(userObj).toMatchSnapshot();
  });
});
