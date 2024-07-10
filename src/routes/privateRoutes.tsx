import React from 'react';
import { DashboardLayout } from '../components/Layout';

interface PrivateRoutesProps {
  children: React.ReactElement;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = (props: PrivateRoutesProps) => {
  const {children} = props;

  return (
    <DashboardLayout>
      { children }
    </DashboardLayout>
  );
};

export default PrivateRoutes;
