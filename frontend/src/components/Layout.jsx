import React from 'react';
import DashboardLayout from './DashboardLayout';

const Layout = ({ children }) => {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
};

export default Layout;