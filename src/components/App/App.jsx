import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CategoryPage = lazy(() => import('pages/CategoryPage/CategoryPage'));
const SubcategoryPage = lazy(() =>
  import('pages/SubcategoryPage/SubcategoryPage')
);
const ProductItemPage = lazy(() =>
  import('pages/ProductItemPage/ProductItemPage')
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const CabinetPage = lazy(() => import('pages/CabinetPage/CabinetPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
        <Route path="/product/:product" element={<ProductItemPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mycabinet" element={<CabinetPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  );
};
