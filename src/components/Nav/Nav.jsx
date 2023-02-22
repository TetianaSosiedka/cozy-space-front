import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConvertingLinks } from 'hooks/ConvertingLinks';

import { NavLinks } from 'constants/navLinks.js';

import { NavStyle, Ul, Li, HiddenNav } from './Nav.styled';

const Nav = () => {
  const [{ hidden, hiddenkey }, setHidden] = useState({
    hidden: false,
    hiddenkey: '',
  });
  const [stateHiddenLinks, setStateHiddenLinks] = useState([]);

  const HandleClick = async (hiddenNavLinks, key) => {
    if (hiddenkey !== '' && hiddenkey === key) {
      setHidden({ hidden: false });
      setStateHiddenLinks([]);
      return;
    }
    if (hiddenkey !== '' && hiddenkey !== key) {
      setHidden({ hidden: true, hiddenkey: key });
      setStateHiddenLinks(hiddenNavLinks);
      return;
    }
    setHidden({ hidden: !hidden, hiddenkey: key });
    setStateHiddenLinks(hiddenNavLinks);
  };

  return (
    <NavStyle>
      <Ul>
        {NavLinks.map(({ key, title, hiddenNavLinks }) => {
          if (hiddenNavLinks) {
            return (
              <Li
                key={key}
                onClick={() => {
                  HandleClick(hiddenNavLinks, key);
                }}
              >
                {title}
              </Li>
            );
          }
          return (
            <Li
              key={key}
              onClick={() => {
                setHidden({ hidden: false });
              }}
            >
              <Link to={`/${ConvertingLinks(key)}`}>{title}</Link>
            </Li>
          );
        })}
      </Ul>
      {hidden && (
        <HiddenNav>
          {stateHiddenLinks.map(item => (
            <Link
              onClick={() => setHidden(!hidden)}
              key={item}
              to={`/${'brends'}/${ConvertingLinks(item)}`}
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
