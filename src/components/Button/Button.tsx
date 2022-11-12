import React from 'react';

interface Props extends React.PropsWithChildren {
  className: string;
}

const Button: React.FC<Props> = ({className,children}) => {
  return (
      <button className={className}>{children}</button>
  );
};

export default Button;