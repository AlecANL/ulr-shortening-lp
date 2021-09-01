import styled from 'styled-components';

export const HeaderStyled = styled.header`
  .buttons {
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  button {
    padding-block: 0.625rem;
    padding-inline: 1.5rem;
    font-size: 0.9375rem;
    line-height: 1.375rem;
  }
  @media screen and (min-width: 768px) {
    .header-content {
      display: flex;
      align-items: center;
      gap: 2.8125rem;
      padding-block: 1.5rem;
    }
    .buttons {
      gap: 2.5rem;
    }
  }
`;

export const HeaderLogo = styled.img``;

export const NavStyled = styled.nav`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex: 1;
    ul {
      display: flex;
      gap: 1.875rem;
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
