import React from 'react';

interface Props extends React.PropsWithChildren {
  type: string;
  onClick: React.MouseEventHandler;
  label: string;
}

const Button: React.FC<Props> = ({type ,onClick,label}) => {
  return (
      <button className={type} onClick={onClick}>{label}</button>
  );
};

export default Button;