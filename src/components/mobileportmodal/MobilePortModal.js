import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './MobilePortModal.css';

import useAnimation from '../../hooks/useAnimation';
import MobilePortHeader from './MobilePortHeader';
// import PortSection from './PortSection';
import MobilePortFooter from './MobilePortFooter';

const mobilePortRoot = document.getElementById('mobile-port-root');

const MobilePortModal = ({ closeModal, portCode }) => {
  const {transition, setTransition} = useAnimation();

  // @ Modal Transition
  const onCloseModal = () => {
    setTimeout(() => {
      setTransition({opacity: 0});
      closeModal();
    });
  }

  return ReactDOM.createPortal(
    <div className="mobile_wraper" style={transition} onClick={onCloseModal}>
      <div className="mobile_main" onClick={e => e.stopPropagation()}>
        <MobilePortHeader props={{portCode, onCloseModal}} />

        <div className="border-top border-info" />

        {/* <PortSection portCode={portCode} /> */}

        <MobilePortFooter />
      </div>
    </div>,
    mobilePortRoot
  );
}

MobilePortModal.defaultProps = {
  onCloseModal: () => {}
};

MobilePortModal.propTypes = {
  onCloseModal: PropTypes.func,
};

export default MobilePortModal;