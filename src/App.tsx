import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './App.Styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StylesProvider } from '@mui/styles';
import {PATHS} from "./const/paths.constants.ts";
import GuestRoutes from './routes/guestRoutes';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AskPartner from './pages/Auth/AskPartner';
import Registration from './pages/Auth/Registration';

function App() {
  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
      <CssBaseline />
      <Routes>
        <Route
          path="*"
          element={<Navigate to={PATHS.DASHBOARD} replace />}
        />

        <Route
          path={PATHS.DASHBOARD}
          element={
            <GuestRoutes title="Login">
              <Login />
            </GuestRoutes>
          }
        />

        <Route
          path={PATHS.LOGIN}
          element={
            <GuestRoutes title="Login">
              <Login />
            </GuestRoutes>
          }
        />

        <Route
          path={PATHS.FORGOT_PASSWORD}
          element={
            <GuestRoutes title="ForgotPassword">
              <ForgotPassword />
            </GuestRoutes>
          }
        />

        <Route
          path={PATHS.ASK_PARTNER}
          element={
            <GuestRoutes title="AskPartner">
              <AskPartner />
            </GuestRoutes>
          }
        />

        <Route
          path={PATHS.REGISTRATION}
          element={
            <GuestRoutes title="Registration">
              <Registration />
            </GuestRoutes>
          }
        />
      </Routes>
    </StylesProvider>
  );
}

export default App
