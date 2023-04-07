import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConvertingLinks } from 'helpers/ConvertingLinks';

import { categories } from 'constants/categories.js';

import { NavStyle, Ul, Li, HiddenNav } from './Nav.styled';

const Nav = () => {
  const [{ hidden, hiddenkey }, setHidden] = useState({
    hidden: false,
    hiddenkey: '',
  });
  const [stateHiddenLinks, setStateHiddenLinks] = useState([]);

  const HandleClick = async (subcategory, key) => {
    if (hiddenkey !== '' && hiddenkey === key) {
      setHidden({ hidden: false });
      setStateHiddenLinks([]);
      return;
    }
    if (hiddenkey !== '' && hiddenkey !== key) {
      setHidden({ hidden: true, hiddenkey: key });
      setStateHiddenLinks(subcategory);
      return;
    }
    setHidden({ hidden: !hidden, hiddenkey: key });
    setStateHiddenLinks(subcategory);
  };

  return (
    <NavStyle>
      <Ul>
        {categories.map(({ key, title, subcategory }) => {
          if (subcategory) {
            return (
              <Li
                key={key}
                onClick={() => {
                  HandleClick(subcategory, key);
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
              <Link to={`/${ConvertingLinks(key)}/selection`}>{title}</Link>
            </Li>
          );
        })}
      </Ul>
      {hidden && (
        <HiddenNav>
          {hiddenkey === 'brands' &&
            stateHiddenLinks.map(item => {
              return (
                <Link
                  onClick={() => setHidden(!hidden)}
                  key={item}
                  to={`/${ConvertingLinks(item)}`}
                >
                  {item}
                </Link>
              );
            })}
          {hiddenkey !== 'brands' &&
            stateHiddenLinks.map(item => {
              return Object.entries(item).map(entrie => (
                <Link
                  onClick={() => setHidden(!hidden)}
                  key={entrie[1]}
                  to={`${ConvertingLinks(hiddenkey)}/${ConvertingLinks(
                    entrie[0]
                  )}`}
                >
                  {entrie[1]}
                </Link>
              ));
            })}
        </HiddenNav>
      )}
    </NavStyle>
  );
};

export default Nav;
