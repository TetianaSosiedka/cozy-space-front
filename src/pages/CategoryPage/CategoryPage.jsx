import { useParams } from 'react-router-dom';

import Container from 'components/Container/Container';
import ProductItem from 'components/ProductCard/ProductCard';
import Footer from 'components/Footer/Footer';
import ContainerItems from 'components/ContainerItems/ContainerItems';
// import { Main, ProductWrap } from './CategoryPage.styled';

const CategoryPage = () => {
  const { category = 'brends', brend = '' } = useParams();
  console.log(category, brend);
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
        <ContainerItems items={items} />
      </Container>
      <Footer />
    </>
  );
};

export default CategoryPage;
