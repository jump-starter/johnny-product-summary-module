import React from 'react';
import PropTypes from 'prop-types';

const style = {
  gridRow: '4 / span 1',
  gridColumn: '2 / span 2',
  justifySelf: 'stretch',
  alignSelf: 'stretch',
  overflow: 'hidden',
};

const MainImage = ({ data }) => (
  <div className="MainImage" style={style}>
    <img src={data.imageUrl} alt="" />
  </div>
);

export default MainImage;

MainImage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
