import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: (id :number) => void;
  clickDismissible?: React.MouseEventHandler;
  id: number;
}

const Alert: React.FC<Props> = ({show,type, onDismiss,clickDismissible, id , children,}) => {

  const btn = (id:number) => {
    if(onDismiss) return (
      <button type="button"
              className="btn-close ms-auto" data-bs-dismiss="modal"
              aria-label="Close" onClick={() => onDismiss(id)}>
      </button>
    )
  };

  return (
    <div
      className={type}
      role="alert"
      style={{display: show ? 'block' : 'none'}}
      onClick={clickDismissible}
    >
      <div className='d-flex'>
        {children}
        {btn(id)}
      </div>
    </div>
  );
};

export default Alert;