import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>Welcome to Profile</h2>
        <p style={{ color: 'white', fontStyle: 'italic' }}>Signup for viewing profile details.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
