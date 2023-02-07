import { NavStyle, Ul, Li } from './Nav.styled';

const Nav = () => {
  // const face = {
  //   'makeup-removal': 'Зняття макіяжу',

  //   'skin-cleansing': 'Очищення шкіри',

  //   peeling: 'Пілінг',

  //   toning: 'Тонізація',

  //   'enhanced-care':
  //     'Посилений догляд ( сиворотки, ампули , есенції , емульсії )',

  //   'face-cream': 'Крем для обличчя',

  //   'eye-cream': 'Крем навколо очей',

  //   'decolletage-area': 'Догляд за зоною декольте',

  //   mask: 'маска(нічні або тканинні доглядові)',

  //   'sun-protection': 'сонцезахист',

  //   'lip-care': 'Догляд для губ',
  // };
  return (
    <NavStyle>
      <Ul>
        <Li key="Догляд за обличчям" to="Догляд за обличчям">
          <a href="//">Догляд за обличчям</a>
        </Li>
        <Li key="Волосся">
          <a href="//">Волосся</a>
        </Li>
        <Li key="Тіло">
          <a href="//">Тіло</a>
        </Li>
        <Li key="Підбір тональних засобів">
          <a href="//">Підбір тональних засобів</a>
        </Li>
        <Li key="Бренди">
          <a key="Брендиa" href="//">
            Бренди
          </a>
          <ul>
            <li></li>
          </ul>
        </Li>
        <Li key="Новинки">
          <a key="Новинки" href="//">
            Новинки
          </a>
        </Li>
      </Ul>
    </NavStyle>
  );
};

export default Nav;
