import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Title from '../Title.js';
import sampleData from '../../../../db/sampleData.js';

describe('Title Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Title data={sampleData} />).find('#title').length).toEqual(1);
  });
});
