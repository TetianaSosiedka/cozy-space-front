import { Main, ProductWrap } from './ContainerItems.styled';

const ContainerItems = ({ items }) => {
  return (
    <Main>
      {items.map(item => (
        <ProductWrap key={item.key}>{item}</ProductWrap>
      ))}
    </Main>
  );
};

export default ContainerItems;
