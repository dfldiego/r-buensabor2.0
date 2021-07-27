import React from 'react';
import { useRoutes } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import routes from './routes';
import { CssBaseline } from '@material-ui/core';

function App() {
  const content = useRoutes(routes);

  return (
    <HttpsRedirect>
      <CssBaseline />
      {content}
    </HttpsRedirect>
  );
}

export default App;
