import React from 'react';
import Button from "./Button";

const Buttons = () => {

  return (
    <>
      <h4>Buttons:</h4>
      <Button className='m-4 btn btn-primary'>Open Modal</Button>
      <Button className='m-4 btn btn-info'>Open Alert</Button>
    </>
  );
};

export default Buttons;