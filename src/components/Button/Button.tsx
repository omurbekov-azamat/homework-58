import React from 'react';

interface Props extends React.PropsWithChildren {
  className: string;
  onClick: React.MouseEventHandler
}

const Button: React.FC<Props> = ({className ,onClick,children}) => {
  return (
      <button className={className} onClick={onClick}>{children}</button>
  );
};

export default Button;