import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavLinks, HiddenNavLinks } from 'constants/navLinks.js';

import { NavStyle, Ul, Li, HiddenNav } from './Nav.styled';

const Nav = () => {
  const [hidden, setHidden] = useState({
    key: '',
    hidden: false,
  });

  const HandleClick = key => {
    if (hidden.key === key) {
      setHidden({ key: '', hidden: false });
      return;
    }
    setHidden({ key: key, hidden: true });
  };

  const HandleLink = link => {
    return link.trim().toLowerCase().split(' ').join('-');
  };

  return (
    <NavStyle>
      <Ul>
        {NavLinks.map(({ key, title }) => (
          <Li
            onClick={() => {
              HandleClick(key);
            }}
            key={key}
          >
            {title}
          </Li>
        ))}
      </Ul>
      {hidden.hidden && (
        <HiddenNav>
          {HiddenNavLinks.map(item => (
            <Link
              onClick={() => setHidden({ key: '', hidden: false })}
              key={item}
              to={`/products/${HandleLink(item)}`}
            >
              {item}
            </Link>
          ))}
        </HiddenNav>
      )}
    </NavStyle>
  );
};

export default Nav;
