import { createBrowserRouter } from 'react-router';
import App from '../App';
import Loading from '../components/Loading/Loading';
import AddTouristsSpotPage from '../page/AddTouristsSpotPage';
import HomePage from '../page/HomePage';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import { getAllTours } from '../utils/api';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: getAllTours,
        HydrateFallback: Loading,
      },
      {
        path: '/add-tourists-spot',
        element: (
          <PrivateRoute>
            <AddTouristsSpotPage />{' '}
          </PrivateRoute>
        ),
        HydrateFallback: Loading,
      },
    ],
  },
  { path: '/login', Component: LoginPage },
  { path: '/register', Component: RegisterPage },
]);
