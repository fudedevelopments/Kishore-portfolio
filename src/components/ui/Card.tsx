import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode };

export const Card: React.FC<Props> = ({ children, className = '', ...props }) => {
  return (
    <div className={`rounded-lg p-4 glass shadow-soft-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
