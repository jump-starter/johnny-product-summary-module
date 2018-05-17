import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Creator from '../Creator';
import sampleData from '../../../../db/sampleData';
/***********************************************************************/

describe('Creator Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Creator data={sampleData} />).find('#creator').length).toEqual(1);
  });
});
