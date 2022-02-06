import React from 'react';
import './style.scss';

const Modal = ({ children, close }) => {
  return (
    <div
      onClick={(event) => {
        event.target.className = 'modal modal_closing';
        setTimeout(() => close(false), 300);
      }}
      className='modal'>
      <div onClick={(e) => e.stopPropagation()} className='modal__wrapper'>
        {children}
      </div>
    </div>
  );
};

export default Modal;
