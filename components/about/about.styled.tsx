import styled from 'styled-components';

export const AboutStyled = styled.main`
  background-color: var(--soft-gray);
  padding-inline: 1.5rem;
  padding-block-start: 10rem;
  .about-content {
    text-align: center;
    position: relative;
  }
  .icon {
    position: absolute;
    inset-block-start: -2rem;
    inset-inline-start: 50%;
    transform: translateX(-50%);
    background-color: var(--dark-purple);
    border-radius: 50%;
    inline-size: 5.5rem;
    block-size: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    text-transform: capitalize;
  }
  .line {
    position: absolute;
    background-color: var(--just-cyan);
    inline-size: 0.5rem;
    block-size: 62.5rem;
    inset-inline-start: 50%;
    transform: translateX(-50%);
    inset-block-start: 3.8rem;
  }
`;

export const AboutGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5.75rem;
  padding-block-start: 5.75rem;
  padding-block-end: 5rem;
`;

export const IconImg = styled.img``;

export const AboutCard = styled.article`
  position: relative;
  background-color: var(--just-white);
  border-radius: 0.3125rem;
  padding-inline: 2rem;
  padding-block-start: 4.8125rem;
  padding-block-end: 2.5625rem;
  z-index: 100;
`;
