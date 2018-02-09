import React from 'react';
import Sky from './Sky';
import Ground from './Ground';

const Canvas = () => {
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
      viewBox={viewBox}
    >
      <Sky />
      <circle cx={0} cy={0} r={50} />
      <Ground />
    </svg>
  );
};

export default Canvas;
