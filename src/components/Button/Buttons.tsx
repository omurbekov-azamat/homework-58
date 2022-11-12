import React, {useState} from 'react';
import Button from "./Button";
import Modal from "../Modal/Modal";

const Buttons = () => {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => setShowModal(false)
  const getAlert = () => {
    alert('alert');
  };

  return (
    <>
      <h4>Buttons:</h4>
      <Button className='m-4 btn btn-primary' onClick={() => setShowModal(true)}>Open Modal</Button>
      <Button className='m-4 btn btn-info' onClick={() => setShowModal(true)}>Open Alert</Button>
      <Modal
        show={showModal}
        onClose={cancel}
        title='Some kinda modal title'
      >
        <p className='m-4'>This is modal content</p>
        <div className='text-end'>
          <Button className='m-1 btn btn-primary' onClick={getAlert}>Continue</Button>
          <Button className='m-1 btn btn-danger' onClick={() => setShowModal(false)}>Close</Button>
        </div>
      </Modal>
    </>
  );
};

export default Buttons;