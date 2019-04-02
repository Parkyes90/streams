import React from 'react';
import ReactDom from 'react-dom';

const Modal = props => {
  const { onDismiss, title, content, actions } = props;
  return ReactDom.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={onDismiss}
    >
      <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
