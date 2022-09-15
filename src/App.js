import { useRoutes } from 'react-router-dom';
import Main from './ui/pages/Main';
import Home from './ui/components/Home';
import Exchange from './ui/components/Exchange';

export default function App() {
  return useRoutes([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          index: true,
          path: 'home',
          element: <Home/>
        },
        {
          path: 'exchange',
          element: <Exchange/>
        }
      ]
    }
  ]);
}
