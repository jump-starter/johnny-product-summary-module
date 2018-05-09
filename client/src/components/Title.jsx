import React from 'react';
import PropTypes from 'prop-types';

const style = {
  gridRow: '2 / span 1',
  gridColumn: '3 / span 2',
  title: {
    fontSize: '38px',
    marginBottom: '18px',
  },
  description: {
    fontSize: '18px',
  },
};

const Title = ({ data }) => (
  <div id="title" style={style}>
    <div
      style={style.title}
    >{data.title}
    </div>
    <div style={style.description}>{data.description}
    </div>
  </div>
);

export default Title;

Title.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
