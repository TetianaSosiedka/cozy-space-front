import { Link } from 'react-router-dom';
import lightLeaf from 'images/light-leaf.png';
import icons from 'images/icons.svg';
import {
  ItemWrap,
  OverlayWrap,
  Img,
  Overlay,
  Description,
  Caption,
  Details,
  Title,
  ShortDescription,
  Price,
  ButtonsWrap,
  Button,
} from './ProductItem.styled';
import Product1 from 'images/products/product1.jpg';

const ProductItem = () => {
  return (
    <ItemWrap>
      <OverlayWrap>
        <Img src={Product1} alt="" />
        <Overlay>
          <Link to="">
            <img src={lightLeaf} alt="small logo" />
            <Description>
              ✅насичено зволожує , завдяки доглядовій есенції в складіБ
              <br />
              ✅Ідеально рівний колір обличчя ✅ідеальне покриття від засобу
              <br />
              ✅Ідеально зручна упаковка <br />
              ✅Ідеальний склад <br />
              ✅Ідеальний SPF50+/PA+++
            </Description>
          </Link>
        </Overlay>
      </OverlayWrap>
      <Caption>
        <Details>
          <Title>Missha Magic Cushion Moist Up</Title>
          <ShortDescription>Тональний крем-кушон зволожуючий</ShortDescription>
          <Price>398 грн</Price>
          <svg>
            <use href={icons + '#heart'}></use>
          </svg>
        </Details>
        <ButtonsWrap>
          <Button type="button">
            <svg>
              <use href={icons + '#opencart'}></use>
            </svg>
            до кошика
          </Button>
        </ButtonsWrap>
      </Caption>
    </ItemWrap>
  );
};

export default ProductItem;
