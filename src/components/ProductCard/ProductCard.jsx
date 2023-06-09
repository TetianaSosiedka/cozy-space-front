import { Link } from 'react-router-dom';
import { ConvertingLinks } from 'helpers/ConvertingLinks';
import lightLeaf from 'images/light-leaf.png';
import ProductCover from 'images/product_cover.jpg';
import icons from 'images/icons.svg';
import Button from 'components/Button/Button';
import { product } from 'constants/product';
import { theme } from 'constants/theme';

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

const ProductCard = ({ url, name, description, price, id }) => {
  const screenWidth = window.screen.width;
  const tabletWidth = theme.screensWidth.tabletWidth.slice(0, 3);
  const desktopWidth = theme.screensWidth.desktopWidth.slice(0, 4);
  const productItemPath = `/product/${ConvertingLinks(name)}/${id}`;

  const cutText = text => {
    if (text) {
      if (screenWidth < tabletWidth) {
        return `${String(text).slice(0, 200)} ...`;
      }
      if (screenWidth < desktopWidth && screenWidth >= tabletWidth) {
        return `${String(text).slice(0, 250)} ...`;
      }
      return `${String(text).slice(0, 500)} ...`;
    }
  };

  return (
    <ItemWrap>
      <OverlayWrap>
        {url && <Img src={url} alt={name} height="400" width="300" />}
        {!url && <Img src={ProductCover} alt={name} height="400" width="300" />}
        <Overlay>
          <Link to={productItemPath}>
            <img src={lightLeaf} alt="small logo" />
            <Description>{cutText(description)}</Description>
          </Link>
        </Overlay>
      </OverlayWrap>
      <Caption>
        <Details>
          <Link to={productItemPath}>
            <Title>{name}</Title>
            {/* <ShortDescription>{name}</ShortDescription> */}
          </Link>
        </Details>
        <ButtonsWrap>
          <Link to={productItemPath}>
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

export default ProductCard;
