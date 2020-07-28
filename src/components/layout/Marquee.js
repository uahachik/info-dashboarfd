import React from 'react';
import './Marquee';
import './Marquee.css';

const Marquee = ({ children, marquee }) => {
  return (
    <div className={marquee}>
      {children}
    </div>
  )
};

export default Marquee;
