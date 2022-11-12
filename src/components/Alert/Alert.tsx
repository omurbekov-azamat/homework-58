import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({show,type, onDismiss, children}) => {

  let btn = () => {
    if(onDismiss) return (
      <button type="button"
              className="btn-close ms-auto" data-bs-dismiss="modal"
              aria-label="Close" onClick={onDismiss}>
      </button>
    )
  }

  return (
    <div
      className={type}
      role="alert"
      style={{display: show ? 'block' : 'none'}}
    >
        {children}
        {btn()}
    </div>
  );
};

export default Alert;