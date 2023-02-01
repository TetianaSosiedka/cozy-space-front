import { NavStyle, Ul, Li } from './Nav.styled';

const Nav = () => {
  return (
    <NavStyle>
      <Ul>
        <Li key="Бренди">
          <a key="Брендиa" href="//">
            Бренди
          </a>
        </Li>
        <Li key="Новинки">
          <a key="Новинки" href="//">
            Новинки
          </a>
        </Li>
        <Li key="Тональні засоби1">
          <a key="Бренди" href="//">
            Тональні засоби
          </a>
        </Li>
        <Li key="Тональні засоби2">
          <a href="//">Тональні засоби</a>
        </Li>
        <Li key="Тональні засоби3">
          <a href="//">Тональні засоби</a>
        </Li>
      </Ul>
    </NavStyle>
  );
};

export default Nav;
