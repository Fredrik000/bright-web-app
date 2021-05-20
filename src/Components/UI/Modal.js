import React from 'react';
import ReactDom from 'react-dom';

const Backdrop = (props) => {
  return <div className='modal-background' onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return <div className='modal'>{props.children}</div>;
};

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
