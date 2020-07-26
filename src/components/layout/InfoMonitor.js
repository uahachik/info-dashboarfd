import React from 'react';
import './InfoMonitor.css';

const InfoMonitor = () => {
  return (
    <div className="monitor">
      <div className="row" style={{height: 326, marginRight: -5, marginLeft: -5}}>
        <div className="col px-1" style={{border: '1px solid whitesmoke'}}>
          1 of 2 height: 326, marginRight: -5, marginLeft: -5 height: 326, marginRight: -5, marginLeft: -5<br />
          1 of 2<br />
          1 of 2<br />
          1 of 2<br />
          1 of 2<br />

        </div>
        <div className="col px-1" style={{border: '1px solid whitesmoke'}}>
          2 of 2<br />
          2 of 2<br />
          2 of 2<br />
          2 of 2<br />
          2 of 2<br />
          2 of 2<br />

        </div>
      </div>
    </div>
  );
};

export default InfoMonitor;
