import Container from 'components/Container/Container';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import icons from 'images/icons.svg';

import {
  HeaderStyle,
  HeaderWrap,
  FixedWrap,
  LeftColumn,
  Timetable,
  Address,
  LogoWrap,
  RightColumn,
} from './Header.styled';

const Header = props => {
  return (
    <HeaderStyle>
      <FixedWrap>
        <a href="tel:+1234567890">
          <svg>
            <use href={icons + '#instagram'}></use>
          </svg>
          (123) 456-7890
        </a>
      </FixedWrap>
      <Container>
        <HeaderWrap>
          <LeftColumn>
            <Timetable>
              <p>Пн-Пт 10:00 - 16:30 </p>
              <p>Сб 11:00 - 15:00</p>
            </Timetable>
            <Address>
              <a href="tel:+1234567890">
                <svg>
                  <use href={icons + '#instagram'}></use>
                </svg>
                (123) 456-7890
              </a>
              <a href="mailto:you@somedomain.com">
                <svg>
                  <use href={icons + '#mail'}></use>
                </svg>
                you@somedomain.com
              </a>
            </Address>
          </LeftColumn>
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <RightColumn>
            <a href="//">
              <svg>
                <use href={icons + '#user'}></use>
              </svg>
            </a>
            <a href="//">
              <svg>
                <use href={icons + '#heart'}></use>
              </svg>
              <span>0</span>
            </a>
            <a href="//">
              <svg>
                <use href={icons + '#opencart'}></use>
              </svg>
              <span>0</span>
            </a>
          </RightColumn>
        </HeaderWrap>
      </Container>
      <Nav />
    </HeaderStyle>
  );
};

export default Header;
