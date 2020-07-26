import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './ModalForm.css';

import useAnimation from '../../hooks/useAnimation';
import ModalHeader from './ModalHeader';
import ModalSecton from './ModalSecton';

const modalRoot = document.getElementById('modal-root');

const ModalForm = ({ closeModal, portCode }) => {
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
        <ModalHeader props={{portCode, onCloseModal}} />

        <div className="border-top border-info" />

        <ModalSecton portCode={portCode} />

      </div>
    </div>,
    modalRoot
  );
}

ModalForm.defaultProps = {
  onCloseModal: () => {}
};

ModalForm.propTypes = {
  onCloseModal: PropTypes.func,
};

export default ModalForm;