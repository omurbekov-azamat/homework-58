import React, {useState} from 'react';
import Button from "./Button";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";

const Buttons = () => {
  const openModal = () => setShowModal(true);
  const openAlert = () => setShowAlert(true);
  const closeModal = () => setShowModal(false)
  const closeAlert = () => setShowAlert(false)

  const getContinue = () => {
    alert('alert');
  };

  const buttons = [
    {type: 'm-4 btn btn-primary', label: 'Open Modal', onClick: openModal},
    {type: 'm-4 btn btn-info', label: 'Open Alert', onClick: openAlert},
  ];

  const buttonsInModal = [
    {type: 'm-1 btn btn-primary', label: 'Continue', onClick: getContinue},
    {type: 'm-1 btn btn-danger', label: 'Close', onClick: closeModal},
  ];

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <h4>Buttons:</h4>
      {buttons.map((button) => {
        return (
          <Button type={button.type} onClick={button.onClick} label={button.label}/>
        )
      })}

      <Modal
        show={showModal}
        onClose={closeModal}
        title='Some kinda modal title'
      >
        <p className='m-4'>This is modal content</p>
        <div className='text-end'>
          {buttonsInModal.map((button) => {
            return (
              <Button type={button.type} onClick={button.onClick} label={button.label}/>
            )
          })}
        </div>
      </Modal>

      <Alert
        show={showAlert}
        type='alert alert-warning'
        onDismiss={closeAlert}>
        This is a warning type alert
      </Alert>

      <Alert
        show={showAlert}
        type='alert alert-success'>
        This is a success type alert
      </Alert>
    </>
  );
};

export default Buttons;