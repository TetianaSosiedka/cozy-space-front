import ProductItem from 'components/ProductItem/ProductItem';
import MultiCarousel from 'components/MultiCarousel/MultiCarousel';
import { Main, Span /*ProductWrap*/ } from './HomePage.styled';

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
    <Main>
      <Span>Бестселери</Span>
      <MultiCarousel>{items}</MultiCarousel>
      <Span>Топові товари</Span>
      <MultiCarousel>{items}</MultiCarousel>
      <Span>Акційні товари</Span>
      <MultiCarousel>{items}</MultiCarousel>
    </Main>
  );
};

export default HomePage;
