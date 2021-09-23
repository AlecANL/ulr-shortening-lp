import Button from '../button/button';
import { HeaderLogo, HeaderStyled, NavStyled } from './header.styled';
import { AiOutlineMenu } from 'react-icons/ai';
import React from 'react';

function Header() {
  const [isShowMenu, setShowMenu] = React.useState<boolean>(false);

  function handleShowMenu() {
    setShowMenu(!isShowMenu);
  }
  return (
    <HeaderStyled>
      <div className={`nav-overlay ${isShowMenu ? 'is-active' : ''}`}></div>
      <div className="wrapper">
        <div className="header-content">
          <HeaderLogo src="/images/logo.svg" alt="shortening logo" />
          <NavStyled className={`${isShowMenu ? 'is-active' : ''}`}>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
            <div className="buttons">
              <Button>Login</Button>
              <Button>Sign Up</Button>
            </div>
          </NavStyled>
          <AiOutlineMenu onClick={handleShowMenu} size={24} />
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
