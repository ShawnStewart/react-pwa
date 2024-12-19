import './index.css';

import CssBaseline from '@mui/material/CssBaseline';
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { withErrorHandler } from '@/error-handling';
import { AppErrorBoundaryFallback } from '@/error-handling/fallbacks/App';
import { Pages } from '@/routes/Pages';
import { Header } from '@/sections/Header';
import { HotKeys } from '@/sections/HotKeys';
import { Notifications } from '@/sections/Notifications';
import { Sidebar } from '@/sections/Sidebar';
import { SW } from '@/sections/SW';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
