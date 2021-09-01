import styled from 'styled-components';

export interface ITop {
  top: string;
}

export const AboutStyled = styled.main`
  background-color: var(--soft-gray);
  padding-inline: 1.5rem;
  /* padding-block: 5rem; */
  /* padding-block-start: 10rem; */
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
    color: var(--just-dark);
  }
  h2 {
    font: var(--mobile-headLineTwoBold);
    color: var(--just-dark);
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
  .custom-links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-block-end: 7.5rem;
  }
  @media screen and (min-width: 768px) {
    padding-block-start: 0;
    padding-block-end: 13rem;
    .icon {
      inset-inline-start: 4.375rem;
    }
    .line {
      inline-size: 62.5rem;
      block-size: 0.5rem;
      inset-block-start: 70%;
      /* inset-inline-start: 50%;
      transform: translate(-50%, -50%); */
    }
    h2 {
      font: var(--desktop-headLineTwoBold);
    }
  }
`;

export const AboutGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5.75rem;
  padding-block-start: 5.75rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.875rem;
  }
`;

export const IconImg = styled.img``;

export const AboutCard = styled.article<ITop>`
  position: relative;
  background-color: var(--just-white);
  border-radius: 0.3125rem;
  padding-inline: 2rem;
  padding-block-start: 4.8125rem;
  padding-block-end: 2.5625rem;
  z-index: 100;
  @media screen and (min-width: 768px) {
    inset-block-start: ${({ top }) => `${top}px`};
    text-align: start;
  }
`;
