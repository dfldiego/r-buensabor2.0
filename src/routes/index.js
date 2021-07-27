import React, { Suspense, lazy } from 'react';
import LoadingScreen from '../components/LoadingScreen';

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// landingPage pages
const Home = Loadable(lazy(() => import('../pages/landingPage/home')));

const routes = [
  {
    path: '*',
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
];

export default routes;
