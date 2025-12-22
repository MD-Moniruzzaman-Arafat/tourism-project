import { createBrowserRouter } from 'react-router';
import App from '../App';
import Loading from '../components/Loading/Loading';
import AddTouristsSpotPage from '../page/AddTouristsSpotPage';
import AllTouristsSpotPage from '../page/AllTouristsSpotPage';
import DetailsPage from '../page/DetailsPage';
import HomePage from '../page/HomePage';
import LoginPage from '../page/LoginPage';
import MyList from '../page/MyList';
import NotFound from '../page/NotFound';
import RegisterPage from '../page/RegisterPage';
import { getAllTours, getTours, myListTours } from '../utils/api';
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
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
        loader: getTours,
        HydrateFallback: Loading,
      },
      {
        path: '/all-tourists-spot',
        element: (
          <PrivateRoute>
            <AllTouristsSpotPage />
          </PrivateRoute>
        ),
        loader: getAllTours,
        HydrateFallback: Loading,
      },
      {
        path: 'my-list',
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: myListTours,
        HydrateFallback: Loading,
      },
    ],
  },
  { path: '/login', Component: LoginPage },
  { path: '/register', Component: RegisterPage },
  { path: '*', Component: NotFound },
]);
