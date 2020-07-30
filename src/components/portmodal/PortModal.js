import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './PortModal.css';

import useAnimation from '../../hooks/useAnimation';
import PortHeader from './PortHeader';
import PortSection from './PortSection';
import PortFooter from './PortFooter';

const portRoot = document.getElementById('port-root');

const PortModal = ({ closeModal, portCode }) => {
  const {transition, setTransition} = useAnimation();

  // @ Modal Transition
  const onCloseModal = () => {
    setTimeout(() => {
      setTransition({opacity: 0});
      closeModal();
    });
  }

  return ReactDOM.createPortal(
    <div className="wraper" style={transition} onClick={onCloseModal}>
      <div className="main" onClick={e => e.stopPropagation()}>
        <PortHeader props={{portCode, onCloseModal}} />

        <div className="border-top border-info" />

        <PortSection portCode={portCode} />

        <PortFooter />
      </div>
    </div>,
    portRoot
  );
}

PortModal.defaultProps = {
  onCloseModal: () => {}
};

PortModal.propTypes = {
  onCloseModal: PropTypes.func,
};

export default PortModal;