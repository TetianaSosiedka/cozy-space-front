import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from 'components/Container/Container';
import ProductItem from 'components/ProductCard/ProductCard';
import Footer from 'components/Footer/Footer';
import ContainerItems from 'components/ContainerItems/ContainerItems';
//import { questions } from 'constants/questions';

import {
  Appeal,
  Checklist,
  Question,
  QuestionName,
  InputWrap,
} from './SubcategoryPage.styled';

const SubcategoryPage = () => {
  const { category = '', subcategory = '' } = useParams();
  // console.log(category, subcategory);
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
  const { products } = useSelector(state => state.products);
  console.log(products);
  return (
    <>
      <Container>
        <Appeal>
          Для індивідуального підбору засобу, дайте відповіді на декілька
          питань:
        </Appeal>
        <Checklist>
          <Question>
            <QuestionName>Засіб має:</QuestionName>
            <InputWrap>
              <input type="radio" name="tone-do" value="moisten" />{' '}
              <span>зволожувати</span>
            </InputWrap>
            <InputWrap>
              <input type="radio" name="tone-do" value="matt" />
              <span> матувати</span>
            </InputWrap>
          </Question>
          <Question>
            <QuestionName>Текстура:</QuestionName>
            <InputWrap>
              <input type="radio" name="tone-texture" value="light" />{' '}
              <span>легка</span>
            </InputWrap>
            <InputWrap>
              <input type="radio" name="tone-texture" value="dense" />{' '}
              <span>щільна</span>
            </InputWrap>
          </Question>
          <Question>
            <QuestionName>Відтінок вашої шкіри:</QuestionName>
            <InputWrap>
              <input type="radio" name="tone-tinct" value="pale" />{' '}
              <span>бліда</span>
            </InputWrap>
            <InputWrap>
              <input type="radio" name="tone-tinct" value="fair" />{' '}
              <span>світла</span>
            </InputWrap>
            <InputWrap>
              <input type="radio" name="tone-tinct" value="natural" />{' '}
              <span>натуральна</span>
            </InputWrap>
            <InputWrap>
              <input type="radio" name="tone-tinct" value="tanned" />{' '}
              <span>засмагла</span>
            </InputWrap>
          </Question>
        </Checklist>
        <ContainerItems items={items} />
      </Container>
      <Footer />
    </>
  );
};

export default SubcategoryPage;
