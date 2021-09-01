import styled from 'styled-components';

export const HeroStyled = styled.section`
  padding-inline: 1.5rem;
  padding-block-end: 10.5rem;
  position: relative;
  overflow: hidden;
  .hero-content {
    text-align: center;
  }
  h1 {
    font: var(--mobile-mainHeadlineBold);
    color: var(--just-dark);
  }
  p {
    font: var(--mobile-body1SBold);
    margin-block-end: 2rem;
  }
  @media screen and (min-width: 1024px) {
    padding-block: 140px;

    .hero-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-areas: 'description cover';
      gap: 6.25rem;
      text-align: start;
    }
    h1 {
      font: var(--desktop-mainHeadlineBold);
      letter-spacing: -2px;
    }
    p {
      font: var(--desktop-body1SBold);
      margin-block-end: 38px;
    }
  }
`;

export const HeroCoverImg = styled.img`
  pointer-events: none;
  inline-size: 100%;
  @media screen and (min-width: 480px) {
    inline-size: 80%;
  }
  @media screen and (min-width: 768px) {
    inline-size: 50%;
  }
  @media screen and (min-width: 1024px) {
    min-inline-size: 270%;
  }
`;

export const HeroDescription = styled.div`
  margin-block-start: 2.5rem;
  @media screen and (min-width: 1024px) {
    grid-area: description;
    align-self: center;
    margin-block-start: 0;
  }
`;

export const HeroCover = styled.div`
  margin-inline-end: -4rem;
  @media screen and (min-width: 1024px) {
    margin-inline-end: 4rem;
  }
`;
