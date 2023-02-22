import Container from 'components/Container/Container';
import ProductItem from 'components/ProductCard/ProductCard';
import MultiCarousel from 'components/MultiCarousel/MultiCarousel';
import Footer from 'components/Footer/Footer';
import { Main, Span } from './HomePage.styled';

const HomePage = () => {
  const items = [
    <ProductItem key="1" />,
    <ProductItem key="2" />,
    <ProductItem key="3" />,
    <ProductItem key="4" />,
    <ProductItem key="5" />,
    <ProductItem key="6" />,
    <ProductItem key="7" />,
    <ProductItem key="8" />,
  ];
  return (
    <>
      <Container>
        <Main>
          <Span>Бестселери</Span>
          <MultiCarousel>{items}</MultiCarousel>
          <Span>Топові товари</Span>
          <MultiCarousel>{items}</MultiCarousel>
          <Span>Акційні товари</Span>
          <MultiCarousel>{items}</MultiCarousel>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
