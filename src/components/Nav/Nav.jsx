import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConvertingLinks } from 'hooks/ConvertingLinks';

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

  return (
    <NavStyle>
      <Ul>
        {NavLinks.map(({ key, title }) => {
          if (key === 'brands') {
            return (
              <Li
                key={key}
                onClick={() => {
                  HandleClick(key);
                }}
              >
                {title}
              </Li>
            );
          }
          return (
            <Li key={key}>
              <Link to={`/${ConvertingLinks(key)}`}>{title}</Link>
            </Li>
          );
        })}
      </Ul>
      {hidden.hidden && (
        <HiddenNav>
          {HiddenNavLinks.map(item => (
            <Link
              onClick={() => setHidden({ key: '', hidden: false })}
              key={item}
              to={`/${ConvertingLinks(item)}`}
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
