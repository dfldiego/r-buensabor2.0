import React from 'react';
import { useRoutes } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import routes from './routes';

function App() {
  const content = useRoutes(routes);

  return <HttpsRedirect>{content}</HttpsRedirect>;
}

export default App;
