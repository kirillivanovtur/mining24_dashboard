import React from 'react';

import { SiteWrapper } from '../Layout.Styles.tsx';

interface Props {
  children: any;
}

const AuthLayout: React.FC<Props> = (props: Props) => {
  const {children} = props;
  return (
    <SiteWrapper className="auth">
      {children}
    </SiteWrapper>
  );
};

export default AuthLayout;
