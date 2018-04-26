import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Stats from '../Stats.js';
import sampleData from '../../../../db/sampleData.js';
/***********************************************************************/
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
    expect(shallow(<Stats data={sampleData} />).find('#allOrN').length).toEqual(1);
  });
});
describe('Stats Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Stats data={sampleData} />).find('#pledge').length).toEqual(1);
  });
});
