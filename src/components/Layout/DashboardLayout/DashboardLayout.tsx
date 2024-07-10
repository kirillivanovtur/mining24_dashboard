import React from 'react';

import { Content, MainContainer, SiteWrapper } from '../Layout.Styles.tsx';

interface Props {
  children?: any;
}

const DashboardLayout: React.FC<Props> = (props: Props) => {
  const {children} = props;

  return (
    <SiteWrapper>
      <MainContainer className='main-container'>
        <Content className="content">
          {children}
        </Content>
      </MainContainer>
    </SiteWrapper>
  );
};

export default DashboardLayout;
