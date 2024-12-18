import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { FavoritePage } from '@/pages/Favorite.page';
import { ShopPage } from '@/pages/Card.page';
import { HomePage } from '@/pages/Home.page';
import { Header } from '@/components/Header/Header';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />, // Layout с Header
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/favorites',
        element: <FavoritePage />,
      },
      {
        path: '/cart',
        element: <ShopPage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
