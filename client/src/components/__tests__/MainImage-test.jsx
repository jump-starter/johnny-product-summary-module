import React from 'react';
import { shallow } from 'enzyme';
import MainImage from '../MainImage';
import sampleData from '../../../../db/sampleData';

describe('MainImage Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<MainImage data={sampleData} />).find('.MainImage').length).toEqual(1);
  });
});

describe('MainImage Component', () => {
  it('should render 1 image', () => {
    expect(shallow(<MainImage data={sampleData} />).find('img').length).toEqual(1);
  });
});

// stub or mock
// snapshots
// shallow vs mount
// invoking the instance of the function
// simulate clicks on the buttons
