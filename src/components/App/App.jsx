import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';

import { useCurrentUserQuery } from 'redux/Auth/authApi';
import { useGetProductsQuery } from 'redux/Products/productsApi';

import PrivateRoutes from 'components/Routes/PrivateRoutes';

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
const AdminPage = lazy(() => import('pages/AdminPage/AdminPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const { token } = useSelector(state => state.auth);
  const { lastPage, currentPage } = useSelector(state => state.products);

  const [page, setPage] = useState(currentPage);

  useCurrentUserQuery(null, { skip: !token });
  useGetProductsQuery(page);

  useEffect(() => {
    if (currentPage < lastPage) {
      setPage(currentPage + 1);
    }
  }, [currentPage, lastPage]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
        <Route path="/product/:product/:id" element={<ProductItemPage />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/mycabinet" element={<CabinetPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  );
};
