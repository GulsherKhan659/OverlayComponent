import React from 'react';

const AtomIcon = ({ src, rotation, width, height, alt }) => (
    <img style={{ transform: `rotate(${rotation}deg)` }} width={width} height={height} src={src} alt={alt} />
);

export default AtomIcon;