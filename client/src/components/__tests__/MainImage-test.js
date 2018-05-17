import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import MainImage from '../MainImage';
import sampleData from '../../../../db/sampleData';

describe('MainImage Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<MainImage data={sampleData} />).find('.MainImage').length).toEqual(1);
  });
});
