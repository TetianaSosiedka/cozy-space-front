import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CategoryPage = lazy(() => import('pages/CategoryPage/CategoryPage'));
const ProductItemPage = lazy(() =>
  import('pages/ProductItemPage/ProductItemPage')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/brends/:brend" element={<CategoryPage />} />
        <Route path="/:brend/:product" element={<ProductItemPage />} />
      </Route>
      <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  );
};
