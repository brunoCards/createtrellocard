import React from 'react';
import FormComponent from '../Form';
import HeaderComponent from '../Header';
import { PageContainer } from './styles';

const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <PageContainer>
        <FormComponent />
      </PageContainer>
    </>
  );
};

export default Layout;
