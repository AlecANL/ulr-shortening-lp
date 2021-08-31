import { NextPage } from 'next';
import { IconImg } from '../about/about.styled';
import { FooterImg, FooterNavigation, FooterStyled } from './footer.styled';

const Footer: NextPage = () => {
  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="footer-content">
          <FooterImg src="/images/logo.svg" alt="logo shortly" />
          <FooterNavigation>
            <nav aria-label="features navigation">
              <span>features</span>
              <ul>
                <li>
                  <a href="#">link shortening</a>
                </li>
                <li>
                  <a href="#">branded links</a>
                </li>
                <li>
                  <a href="#">analytics</a>
                </li>
              </ul>
            </nav>
            <nav aria-label="resources navigation">
              <span>resources</span>
              <ul>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#">developers</a>
                </li>
                <li>
                  <a href="#">support</a>
                </li>
              </ul>
            </nav>
            <nav aria-label="company navigation">
              <span>company</span>
              <ul>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">our team</a>
                </li>
                <li>
                  <a href="#">careers</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </nav>
          </FooterNavigation>
          <div className="footer__icons">
            <IconImg src="/images/icon-facebook.svg" alt="icon facebook" />
            <IconImg src="/images/icon-twitter.svg" alt="icon twitter" />
            <IconImg src="/images/icon-pinterest.svg" alt="icon pinterest" />
            <IconImg src="/images/icon-instagram.svg" alt="icon instagram" />
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
