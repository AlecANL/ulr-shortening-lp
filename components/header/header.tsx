import Button from '../button/button';
import { HeaderLogo, HeaderStyled, NavStyled } from './header.styled';

function Header() {
  return (
    <HeaderStyled>
      <div className="wrapper">
        <div className="header-content">
          <HeaderLogo src="/images/logo.svg" alt="shortening logo" />
          <NavStyled>
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
          </NavStyled>
          <div className="buttons">
            <Button>Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
