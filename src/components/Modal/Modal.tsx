import React from 'react';
import Backdrop from "../Backdrop/Backdrop";

interface Props extends React.PropsWithChildren{
  show: boolean;
  onClose: React.MouseEventHandler;
  title: string;
}

const Modal: React.FC<Props> = ({show,onClose, title, children}) => {
  return (
    <>
      <Backdrop show={show}/>
      <div className='modal show'
           style={{display: show ? 'block' : 'none'}}
           onClick={onClose}
      >
        <div className='modal-dialog' onClick={e => e.stopPropagation()}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5'>{title}</h1>
              <button type="button"
                      className="btn-close" data-bs-dismiss="modal"
                      aria-label="Close" onClick={onClose}>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;