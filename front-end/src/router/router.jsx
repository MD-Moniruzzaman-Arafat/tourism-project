import { createBrowserRouter } from 'react-router';
import App from '../App';
import HomePage from '../page/HomePage';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
  { path: '/login', Component: LoginPage },
  { path: '/register', Component: RegisterPage },
]);
