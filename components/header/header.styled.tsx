import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding-inline: 1.5rem;
  padding-block: 1.25rem;
  position: sticky;
  inset-block-start: 0;
  z-index: 999;
  background-color: var(--just-white);
  .nav-overlay.is-active {
    position: fixed;
    inset-block-start: 70px;
    block-size: 100vh;
    background-color: rgba(48, 45, 45, 0.431);
    inset-inline: 0;
    z-index: 10;
    backdrop-filter: blur(10px);
  }
  .header-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: capitalize;
    gap: 0.5rem;
    inline-size: 100%;
  }
  button {
    padding-block: 0.625rem;
    padding-inline: 1.5rem;
    font-size: 0.9375rem;
    line-height: 1.375rem;
    inline-size: 100%;
  }
  .buttons button:first-child {
    background-color: var(--dark-purple);
  }
  @media screen and (min-width: 768px) {
    .nav-overlay {
      display: none;
    }
    .header-content {
      display: flex;
      align-items: center;
      gap: 2.8125rem;
      /* padding-block: 1.5rem; */
    }
    .buttons {
      gap: 2.5rem;
      flex-direction: row;
    }
    svg {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    .buttons {
      inline-size: 30%;
    }
  }
`;

export const HeaderLogo = styled.img``;

export const NavStyled = styled.nav`
  &.is-active {
    display: flex;
  }
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-block: 1rem;
  padding-inline: 1.5rem;
  border-radius: 0.3125rem;
  background-color: var(--dark-purple);
  inset-inline: 0;
  inset-block-start: 100px;
  z-index: 10000;
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    color: var(--just-white);
  }
  @media screen and (min-width: 768px) {
    position: initial;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    background-color: transparent;
    flex-direction: row;
    padding: 0;
    ul {
      display: flex;
      gap: 1.875rem;
      flex-direction: row;
      align-items: center;
    }
    a {
      font-size: 0.9375rem;
      line-height: 1.375rem;
      font-weight: bold;
      color: var(--dark-gray);
      &:hover {
        color: var(--just-dark);
      }
    }
  }
`;
