import React from 'react';
import './modal.css';

function Modal({ showModal, closeModal, children }) {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
