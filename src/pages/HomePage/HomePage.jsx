import { useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import Container from 'components/Container/Container';
import ProductItem from 'components/ProductCard/ProductCard';
import MultiCarousel from 'components/MultiCarousel/MultiCarousel';
import Footer from 'components/Footer/Footer';
import { Main, Span } from './HomePage.styled';

const HomePage = () => {
  const { isSuccess, products } = useSelector(state => state.products);

  const items = products.map(product => (
    <ProductItem
      key={product.id}
      url={product.thumbnail_url}
      name={product.name}
      description={product.description}
      price={product.max_price}
    />
  ));
  return (
    <>
      <Container>
        <Main>
          {!isSuccess && <Loader />}
          {isSuccess && (
            <>
              <Span>Бестселери</Span>
              <MultiCarousel>{items}</MultiCarousel>
              <Span>Топові товари</Span>
              <MultiCarousel>{items}</MultiCarousel>
              <Span>Акційні товари</Span>
              <MultiCarousel>{items}</MultiCarousel>
            </>
          )}
        </Main>
      </Container>

      <Footer />
    </>
  );
};

export default HomePage;
