import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MultiCarousel = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 550 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      responsive={responsive}
      infinite={true}
    >
      {children}
    </Carousel>
  );
};

export default MultiCarousel;
