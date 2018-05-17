import React from 'react';
import { shallow } from 'enzyme';
import Stats from '../Stats';
import sampleData from '../../../../db/sampleData';

describe('Stats Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Stats data={sampleData} />).find('#pledge').length).toEqual(1);
  });
});
describe('Stats Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Stats data={sampleData} />).find('#backers').length).toEqual(1);
  });
});
describe('Stats Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Stats data={sampleData} />).find('#backButton').length).toEqual(1);
  });
});
describe('Stats Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Stats data={sampleData} />).find('#allOrNothing').length).toEqual(1);
  });
});
describe('Stats Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Stats data={sampleData} />).find('#pledge').length).toEqual(1);
  });
});
