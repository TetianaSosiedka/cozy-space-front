import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
import ProductItem from 'components/ProductItem/ProductItem';
import NotFound from 'components/NotFound/NotFound';
//import ProductCard from 'components/ProductCard/ProductCard';

import Loader from 'components/Loader/Loader';

import { IntensiveEffects } from './ProductItemPage.styled';

const ProductsPage = () => {
  // const items = [
  //   <ProductItem key="1" />,
  //   <ProductItem key="2" />,
  //   <ProductItem key="3" />,
  //   <ProductItem key="4" />,
  // ];

  const { id } = useParams();

  const { isSuccess, products } = useSelector(state => state.products);

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      let foundProduct = products.find(item => item.id === Number(id));
      if (foundProduct) {
        setCurrentProduct(foundProduct);
      }
    }
  }, [id, isSuccess]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Container>
        {!isSuccess && <Loader />}
        {isSuccess && currentProduct === null && (
          <NotFound>Такого тавару немає</NotFound>
        )}
        {isSuccess && currentProduct !== null && (
          <>
            <ProductItem
              title={currentProduct.name}
              price={currentProduct.price}
              volume={currentProduct.weight}
              brend="brend"
              available={currentProduct.quantity}
              description={currentProduct.description}
              thumbnail_url={currentProduct.thumbnail_url}
            />
            <IntensiveEffects>
              {/* <Title>Посилення ефекту</Title>
              <ProductCard items={items} /> */}
            </IntensiveEffects>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ProductsPage;
