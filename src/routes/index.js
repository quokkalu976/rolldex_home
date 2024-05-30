import { useRoutes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../views/Home/Home';

const MainRoutes = {
  path: '/*',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Home />,
    },
  ],
};
// const NotFoundRoutes = {
//   path: '*',
//   element: <NotFound />
// }

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}
