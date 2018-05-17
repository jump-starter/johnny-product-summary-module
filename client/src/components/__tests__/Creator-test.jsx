import React from 'react';
import { shallow } from 'enzyme';
import Creator from '../Creator';
import sampleData from '../../../../db/sampleData';

describe('Creator Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Creator data={sampleData} />).find('#creator').length).toEqual(1);
  });
});
