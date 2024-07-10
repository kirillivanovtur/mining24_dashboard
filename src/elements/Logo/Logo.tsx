import React from 'react';

import { LogoStyles } from './Logo.Styles';

interface Props {
  className?: string;
  to?: any;
  children?: any;
}

export const Logo: React.FC<Props> = ({ className, to, children }) => {
  return (
    <LogoStyles tabIndex={-1} className={className} to={to}>
      {children}
    </LogoStyles>
  );
};
