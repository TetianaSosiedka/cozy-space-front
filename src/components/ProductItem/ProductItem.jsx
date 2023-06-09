import { Notify } from 'notiflix/build/notiflix-notify-aio';

//import Gallery from '../../components/Gallery/Gallery';
import Button from 'components/Button/Button';
import icons from 'images/icons.svg';
import {
  Article,
  Img,
  GalleruWrap,
  RightColumn,
  ProducrTitle,
  PriceWrap,
  Price,
  Calculator,
  Ditails,
  Available,
  Description,
} from './ProductItem.styled';
import { useState } from 'react';

const ProdustItem = ({
  title,
  price,
  volume,
  brend,
  available,
  description,
  thumbnail_url,
}) => {
  const [count, setCount] = useState(0);

  const getCount = e => {
    const id = e.target.id;
    if (id === 'increase') {
      if (count === available) {
        Notify.warning(`Ви не можете замовити більше ${available} шт.`);
        return;
      }
      setCount(count + 1);
    }
    if (id === 'decrease') {
      if (count === 0) {
        return;
      }
      setCount(count - 1);
    }
  };

  return (
    <Article>
      {thumbnail_url && (
        <GalleruWrap>
          <Img src={thumbnail_url} alt={title} with={300} height={400} />
          {/* <Gallery url={thumbnail_url} /> */}
        </GalleruWrap>
      )}

      <RightColumn>
        <ProducrTitle>{title}</ProducrTitle>
        <PriceWrap>
          <Calculator>
            <div id="increase" onClick={e => getCount(e)}>
              +
            </div>
            <div>{count}</div>
            <div id="decrease" onClick={e => getCount(e)}>
              -
            </div>
          </Calculator>
          <Price>
            {price}
            <span>грн</span>
          </Price>
        </PriceWrap>
        <Button type={'button'} iconId={'opencart'}>
          до кошика
        </Button>
        <Ditails>
          <p>
            Об'єм:
            <span>{volume} мл</span>
          </p>
          <p>
            Виробник:<span>{brend}</span>
          </p>
          {available && (
            <Available>
              <svg>
                <use href={icons + '#checkmark'}></use>
              </svg>
              В наявності
            </Available>
          )}
          {!available && (
            <Available style={{ color: 'red' }}>Немає в наявності</Available>
          )}
        </Ditails>
      </RightColumn>
      <Description>{description}</Description>
    </Article>
  );
};

export default ProdustItem;
