import React from 'react';
import ImageGallery from 'react-image-gallery';
import { product } from 'constants/product';
import { GaleryWrap } from './Galery.styled';

const images = product.images.map(image => {
  return {
    original: image,
    thumbnail: image,
  };
});

class Gallery extends React.Component {
  render() {
    return (
      <GaleryWrap>
        <ImageGallery items={images} thumbnailPosition={'left'} />
      </GaleryWrap>
    );
  }
}

export default Gallery;
