import { Link } from 'react-router-dom';
import { ConvertingLinks } from 'helpers/ConvertingLinks';
import lightLeaf from 'images/light-leaf.png';
import icons from 'images/icons.svg';
import Button from 'components/Button/Button';
import { product } from 'constants/product';

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
  ButtonHeart,
  ButtonsWrap,
} from './ProductCard.styled';

const ProductItem = () => {
  return (
    <ItemWrap>
      <OverlayWrap>
        <Img src={product.coverImage} alt="" />
        <Overlay>
          <Link to={`/product/${ConvertingLinks(product.title)}`}>
            <img src={lightLeaf} alt="small logo" />
            <Description>{product.shortDescription}</Description>
          </Link>
        </Overlay>
      </OverlayWrap>
      <Caption>
        <Details>
          <Link to={`/product/${ConvertingLinks(product.title)}`}>
            <Title>{product.title}</Title>
            <ShortDescription>{product.name}</ShortDescription>
            <Price>{product.price} грн</Price>
          </Link>
          <ButtonHeart>
            {!product.favorite && (
              <svg>
                <use href={icons + '#heart'}></use>
              </svg>
            )}
            {product.favorite && (
              <svg>
                <use href={icons + '#active-heart'}></use>
              </svg>
            )}
          </ButtonHeart>
        </Details>
        <ButtonsWrap>
          <Button type={'button'} iconId={'opencart'}>
            до кошика
          </Button>
        </ButtonsWrap>
      </Caption>
    </ItemWrap>
  );
};

export default ProductItem;
