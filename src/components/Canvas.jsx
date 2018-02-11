import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import Cannon from './Cannon';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';

const Canvas = props => {
  /**
   * viewBox attribute of svg element:
   * - min-x: the leftmost point of canvas, using -2 to make canvas show the same amount of points to left (negative) and to the right (positive) of the origin
   * - min-y: the uppermost point of canvas
   * - width and height
   */
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight,
  ];

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none" // force uniform scaling of canvas and its element
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      {/* SVG Drop Shadows */}
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <Cannon angle={props.angle} />
      <CannonBall position={{ x: 0, y: -100 }} />
      <CurrentScore score={15} />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
