import React from 'react';
import { AuthLayout } from '../components/Layout';

interface GuestRoutesProps {
  children?: React.ReactElement;
}

const GuestRoutes: React.FC<GuestRoutesProps> = ({
  children,
}) => {

  return (
    <AuthLayout>
      { children }
    </AuthLayout>
  );
};


export default GuestRoutes;
