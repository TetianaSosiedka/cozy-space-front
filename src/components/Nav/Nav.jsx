import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavLinks } from 'constants/navLinks.js';

import { NavStyle, Ul, Li, HiddenNav } from './Nav.styled';

const Nav = () => {
  const [hidden, setHidden] = useState({
    key: '',
    title: '',
  });

  const HandleClick = (key, title) => {
    if (hidden.key === key) {
      setHidden({ key: '', title: '' });
      return;
    }
    setHidden({ key: key, title: title });
  };

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
        {NavLinks.map(({ key, title }) => (
          <Li
            onClick={() => {
              HandleClick(key, title);
            }}
            key={key}
          >
            {title}
          </Li>
        ))}
      </Ul>
      {hidden.key && (
        <HiddenNav>
          <Link to="/home">Missha</Link>
          <Link to="/home">Medi Peel</Link>
          <Link to="/home">Farm Stay </Link>
          <Link to="/home">Masil</Link>
          <Link to="/home">Moremo</Link>
          <Link to="/home">Daeng Gi Meo Ri</Link>
          <Link to="/home">Missha</Link>
          <Link to="/home">Medi Peel</Link>
          <Link to="/home">Farm Stay </Link>
          <Link to="/home">Masil</Link>
          <Link to="/home">Moremo</Link>
          <Link to="/home">Daeng Gi Meo Ri</Link>
          <Link to="/home">Missha</Link>
          <Link to="/home">Medi Peel</Link>
          <Link to="/home">Farm Stay </Link>
          <Link to="/home">Masil</Link>
          <Link to="/home">Moremo</Link>
          <Link to="/home">Daeng Gi Meo Ri</Link>
        </HiddenNav>
      )}
    </NavStyle>
  );
};

export default Nav;
