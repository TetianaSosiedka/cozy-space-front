import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:productId" element={<ProductsPage />} />
      </Route>
      <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  );
};
