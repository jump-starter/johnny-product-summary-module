import React from 'react';
import PropTypes from 'prop-types';

const style = {
  gridRow: '2 / span 1',
  gridColumn: '2 / span 1',
  avatarUrl: {
    display: 'block',
    borderRadius: '50%',
    height: '42px',
    marginBottom: '18px',
  },
  name: {
    textDecoration: 'none',
    color: 'rgb(40, 40, 40)',
  },
  projectsCreatedCount: {
    color: 'rgb(149, 149, 158)',
  },
};

const Creator = ({ data }) => (
  <div id="creator" style={style}>
    <img
      src={data.avatarUrl}
      style={style.avatarUrl}
      alt=""
    />
    <span >
      <a style={style.name} href="#">By {' '} {data.firstName} {data.lastName}</a>
    </span>
    <div id="numProducts" style={style.projectsCreatedCount}>
      {data.projectsCreatedCount === 1 ? 'First created' : `${data.projectsCreatedCount} created`}
    </div>
  </div>
);

export default Creator;

Creator.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
