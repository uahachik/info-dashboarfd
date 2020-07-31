import React from 'react';
import PropTypes from 'prop-types';

import airports from '../../data/airports';

const MobilePortHeader = ({ props: { portCode, onCloseModal } }) => {
  const airport = airports().find(port => port.code === portCode);
  const { name, logo } = airport;

  return (
    <header
      className="mobile_header"
      style={window.innerWidth > 576 ? null : {maxHeight: 44}}
    >
      <img
        alt={name}
        src={logo.src}
        width={logo.width.slice(0, 2) / 2 + '%'}
      />

      <div className="text-center" style={{marginTop: -5}}>
        <h5 className="mx-1 overflow-hidden text-info" style={{maxHeight: 33, marginBottom: 0}}>
          {name}
        </h5>
        <h6 className="text-muted">ICAO code: {portCode}</h6>
      </div>

      <button
        type="button" className="btn close alert alert-success alert-dismissible" 
        data-dismiss="alert" aria-label="Close"
        onClick={onCloseModal}
      > 
        <span className="px-2 border border-info rounded-lg" aria-hidden="true">×</span> 
      </button>
    </header>
  )
};

MobilePortHeader.defaultProps = {
  portCode: '',
  onCloseModal: () => {},
};

MobilePortHeader.propTypes = {
  portCode: PropTypes.string,
  onCloseModal: PropTypes.func,
};

export default MobilePortHeader;
