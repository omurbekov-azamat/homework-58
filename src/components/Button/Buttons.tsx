import React, {useState} from 'react';
import Button from "./Button";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";

const Buttons = () => {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [showAlert, setShowAlert] = useState([
    {show: false, id: Math.random() * 2000},
    {show: false, id: Math.random() * 2000},
  ]);

  const openAlert = () =>  {
    setShowAlert(prev => prev.map(item => {
      return {
        ...item,
        show: true,
      }
    }))
  };

  const closeAlert = (id:number) => {
    setShowAlert(prevState => prevState.map(item => {
      return item.id === id ? {
        ...item,
        show: false,
      } : item;
    }));
  };

  const clickDismissible = () => {
    const alertsCopy = [...showAlert];
    const alertCopy = {...alertsCopy[1]};
    alertCopy.show = false;
    alertsCopy[1] = alertCopy;
    setShowAlert(alertsCopy);
  };

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

  return (
    <>
      <h4>Buttons:</h4>
      {buttons.map((button) => {
        return (
          <Button
            key={Math.random()}
            type={button.type}
            onClick={button.onClick}
            label={button.label}
          />
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
              <Button
                key={Math.random()}
                type={button.type}
                onClick={button.onClick}
                label={button.label}
              />
            )
          })}
        </div>
      </Modal>

      <Alert
        id={showAlert[0].id}
        show={showAlert[0].show}
        type='alert alert-warning'
        onDismiss={closeAlert}>
        This is a warning type alert
      </Alert>

      <Alert
        id={showAlert[1].id}
        show={showAlert[1].show}
        type='alert alert-success'
        clickDismissible={clickDismissible}
      >
        This is a success type alert
      </Alert>
    </>
  );
};

export default Buttons;