import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ProductsPage = lazy(() => import('pages/ProductPage/ProductsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductsPage />} />
      </Route>
      <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  );
};
