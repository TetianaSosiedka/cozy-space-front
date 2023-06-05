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
  // ShortDescription,
  Price,
  ButtonHeart,
  ButtonsWrap,
} from './ProductCard.styled';

const ProductItem = ({ url, name, description, price }) => {
  const cutText = text => {
    let cutedText = '...';

    if (text) {
      cutedText = `${String(text).slice(0, 500)} ...`;
    }

    return cutedText;
  };

  return (
    <ItemWrap>
      <OverlayWrap>
        <Img src={url} alt={name} height="400" width="300" />
        <Overlay>
          <Link to={`/product/${ConvertingLinks(name)}`}>
            <img src={lightLeaf} alt="small logo" />
            <Description>{cutText(description)}</Description>
          </Link>
        </Overlay>
      </OverlayWrap>
      <Caption>
        <Details>
          <Link to={`/product/${ConvertingLinks(name)}`}>
            <Title>{name}</Title>
            {/* <ShortDescription>{name}</ShortDescription> */}
          </Link>
        </Details>
        <ButtonsWrap>
          <Link to={`/product/${ConvertingLinks(name)}`}>
            <Price>{price} грн</Price>
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
          <Button type={'button'} iconId={'opencart'}>
            до кошика
          </Button>
        </ButtonsWrap>
      </Caption>
    </ItemWrap>
  );
};

export default ProductItem;
