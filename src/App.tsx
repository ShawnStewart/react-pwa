import './index.css';

import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { withErrorHandler } from '@/error-handling';
import { AppErrorBoundaryFallback } from '@/error-handling/fallbacks/App';
import { Pages } from '@/routes/Pages';
import { Header } from '@/sections/Header';
import { Notifications } from '@/sections/Notifications';
import { useServiceWorker } from '@/sections/ServiceWorker';

function App() {
  useServiceWorker();

  return (
    <Fragment>
      <Notifications />
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
