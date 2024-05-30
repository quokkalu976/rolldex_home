import React from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const LayBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <LayBox className="vvv">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </LayBox>
  );
};

export default Layout;
