import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import { Main, GaleryWrap, Title, Price } from './ProductItemPage.styled';

import { product } from '../../constants/product';

const ProductsPage = () => {
  return (
    <>
      <Container>
        <Main>
          <GaleryWrap>
            <Gallery />
          </GaleryWrap>
          <Title>{product.title}</Title>
          <Price>{product.price} грн</Price>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default ProductsPage;
