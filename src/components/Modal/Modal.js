import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDowm);
    return () => {
      window.removeEventListener('keydown', handleKeyDowm);
    };
  });

  const handleKeyDowm = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        {children}
        <button type="button" className={s.ModalButton}>
          <ImCross className={s.ModalCloseIcon} onClick={onClose} />
        </button>
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object,
};
