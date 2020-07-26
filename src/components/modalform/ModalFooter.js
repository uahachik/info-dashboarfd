import React from 'react';
import './ModalForm.css';

const ModalFooter = () => {
  return (
    <footer
      className="position-absolute w-100 py-2 text-center text-muted footerContainer"
    >
      <small>All information is provided as of yesterday. That is, from now on minus 24 hours.</small>
    </footer>
  )
};

export default ModalFooter;
