import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomePage from '../page/HomePage';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import { getAllTours } from '../utils/api';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: getAllTours,
        HydrateFallback: <p>loading....</p>,
      },
    ],
  },
  { path: '/login', Component: LoginPage },
  { path: '/register', Component: RegisterPage },
]);
