import styled from 'styled-components';

export const HeadlineStyled = styled.section`
  padding-inline: 1.5rem;
  background: var(--dark-purple) url('/images/bg-boost-mobile.svg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-block: 5.625rem;
  .headline-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    color: var(--just-white);
  }

  h2 {
    font: var(--mobile-headLineTwoBold);
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    background: var(--dark-purple) url('/images/bg-boost-desktop.svg');
    background-repeat: no-repeat;
    background-size: cover;
    h2 {
      font: var(--desktop-headLineTwoBold);
    }
  }
`;
