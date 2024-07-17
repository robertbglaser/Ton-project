import React, { ReactElement } from 'react';
import { useReactiveVar } from '@apollo/client';
import { HashRouter as Routers } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProviderEnum, themeVar } from '../graphql/variables/Shared';
import { darkTheme, lightTheme, Theme } from '../styles/theme';
import Router from '../routes/Routes';

import './App.css';

export default function App(): ReactElement<Theme> {
  const theme = useReactiveVar(themeVar)

  return (
    <>
    <ToastContainer toastClassName='toastContainerBox' transition={Flip} position='top-center' />
    <ThemeProvider theme={theme === ThemeProviderEnum.dark ? darkTheme : lightTheme }>
      <Routers>
        <Router />
      </Routers>
    </ThemeProvider>
    </>
  );
}
