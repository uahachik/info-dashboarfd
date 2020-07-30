import React from 'react';
import Moment from 'react-moment';

import endOfInfoPeriod from '../../data/endOfInfoPeriod';

const PortFooter = () => {
  return (
    <footer
      className="footer_container text-muted"
    >
      <small>
        All information is provided as of yesterday. 
        That is, up to <Moment format="YYYY/MM/DD HH:MM" unix>{endOfInfoPeriod()}</Moment>
      </small>
    </footer>
  )
};

export default PortFooter;
