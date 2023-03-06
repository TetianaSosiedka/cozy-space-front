import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Button from 'components/Button/Button';
import ProductItem from 'components/ProductCard/ProductCard';
import ContainerItems from 'components/ContainerItems/ContainerItems';
import Title from 'components/Title/Title';
import icons from 'images/icons.svg';
import {
  Article,
  GalleruWrap,
  RightColumn,
  ProducrTitle,
  PriceWrap,
  Calculator,
  Price,
  Ditails,
  Available,
  Description,
} from './ProductItemPage.styled';

import { product } from '../../constants/product';

const ProductsPage = () => {
  const items = [
    <ProductItem key="1" />,
    <ProductItem key="2" />,
    <ProductItem key="3" />,
    <ProductItem key="4" />,
  ];
  return (
    <>
      <Container>
        <Article>
          <GalleruWrap>
            <Gallery />
          </GalleruWrap>
          <RightColumn>
            <ProducrTitle>{product.title}</ProducrTitle>
            <PriceWrap>
              <Calculator>
                <div>+</div>
                <div>0</div>
                <div>-</div>
              </Calculator>
              <Price>
                {product.price}
                <span>грн</span>
              </Price>
            </PriceWrap>
            <Button type={'button'} iconId={'opencart'}>
              до кошика
            </Button>
            <Ditails>
              <p>
                Об'єм:
                <span>{product.volume} мл</span>
              </p>
              <p>
                Виробник:<span>{product.brend}</span>
              </p>
              {product.available && (
                <Available>
                  <svg>
                    <use href={icons + '#checkmark'}></use>
                  </svg>
                  В наявності
                </Available>
              )}
              {!product.available && (
                <Available style={{ color: 'red' }}>
                  Немає в наявності
                </Available>
              )}
            </Ditails>
          </RightColumn>
          <Description>{product.fullDescription}</Description>
          <Title>Посилення ефекту</Title>
          <ContainerItems items={items} />
        </Article>
      </Container>
      <Footer />
    </>
  );
};

export default ProductsPage;
