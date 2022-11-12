import React from 'react';
import Backdrop from "../Backdrop/Backdrop";


const Modal= () => {
  return (
    <>
      <Backdrop/>
      <div className='modal show' style={{display: 'block'}}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5'>Some kinda modal title</h1>
              <button type="button"
                      className="btn-close" data-bs-dismiss="modal"
                      aria-label="Close">
              </button>
            </div>
            <p className='m-4'>This is modal content</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;