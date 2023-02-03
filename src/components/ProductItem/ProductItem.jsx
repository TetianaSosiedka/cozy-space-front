import lightLeaf from 'images/light-leaf.png';
import icons from 'images/icons.svg';
import {
  ItemWrap,
  OverlayWrap,
  Img,
  Overlay,
  Caption,
  Details,
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
          <img src={lightLeaf} alt="small logo" />
        </Overlay>
      </OverlayWrap>
      <Caption>
        <Details>
          ✨Missha Magic Cushion Moist Up Тональний крем-кушон зволожуючий✨
          <Price>398 грн</Price>
          {window.innerWidth >= 551 && window.innerWidth < 1280 && (
            <svg>
              <use href={icons + '#heart'}></use>
            </svg>
          )}
        </Details>
        <ButtonsWrap>
          <Button type="button">
            <svg>
              <use href={icons + '#opencart'}></use>
            </svg>
            до кошика
          </Button>
          {(window.innerWidth < 551 || window.innerWidth >= 1280) && (
            <Button type="button">
              <svg>
                <use href={icons + '#heart'}></use>
              </svg>
              в улюблені
            </Button>
          )}
        </ButtonsWrap>
      </Caption>
    </ItemWrap>
  );
};

export default ProductItem;
