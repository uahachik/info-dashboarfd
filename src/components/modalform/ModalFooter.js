import React from 'react';
import './ModalForm.css';
import Moment from 'react-moment';

import endOfInfoPeriod from '../../data/endOfInfoPeriod';

const ModalFooter = () => {
  return (
    <footer
      className="position-absolute w-100 py-2 text-center text-muted footerContainer"
    >
      <small>
        All information is provided as of yesterday. 
        That is, up to <Moment format="YYYY/MM/DD HH:MM" unix>{endOfInfoPeriod()}</Moment>
      </small>
    </footer>
  )
};

export default ModalFooter;
