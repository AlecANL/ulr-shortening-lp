import { NextPage } from 'next';
import {
  HeroCover,
  HeroCoverImg,
  HeroDescription,
  HeroStyled,
} from './hero.styled';

const Hero: NextPage = () => {
  return (
    <HeroStyled>
      <div className="wrapper">
        <div className="hero-content">
          <HeroCover>
            <HeroCoverImg
              src="/images/illustration-working.svg"
              alt="illustration working"
            />
          </HeroCover>
          <HeroDescription>
            <h1>More than just shorter links</h1>
            <p>
              Build your brands recognition and get detailed insights on how
              your links are performing
            </p>
            <button>get started</button>
          </HeroDescription>
        </div>
      </div>
    </HeroStyled>
  );
};

export default Hero;
