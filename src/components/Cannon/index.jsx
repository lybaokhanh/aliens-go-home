import React from 'react';
import PropTypes from 'prop-types';
import CannonBase from './Base';
import CannonPipe from './Pipe';

const Cannon = props => [
  <CannonPipe key={1} rotation={props.angle} />,
  <CannonBase key={2} />,
];

Cannon.propTypes = {
  angle: PropTypes.number.isRequired,
};

export default Cannon;
