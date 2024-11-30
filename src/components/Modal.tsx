import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.ComponentType<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}></button>
        {children}
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          z-index: 1000;
        }
        .modal-content {
          background: #ffffff;
          padding: 20px;
          border-radius: 8px;
          position: relative;
          width: 40%;
          max-width: 500px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Modal;

