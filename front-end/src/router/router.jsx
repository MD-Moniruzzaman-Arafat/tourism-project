import { createBrowserRouter } from 'react-router';
import App from '../App';
import AddTouristsSpotPage from '../page/AddTouristsSpotPage';
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
      {
        path: '/add-tourists-spot',
        Component: AddTouristsSpotPage,
      },
    ],
  },
  { path: '/login', Component: LoginPage },
  { path: '/register', Component: RegisterPage },
]);
