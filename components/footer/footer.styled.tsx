import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: var(--bg-footer);
  padding-inline: 1.5rem;
  padding-block-start: 3.75rem;
  padding-block-end: 3.125rem;
  color: var(--just-white);
  .footer-content {
    text-align: center;
  }
  .footer__icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const FooterImg = styled.img``;

export const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2.5rem;
  padding-block: 3.125rem;
  nav {
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
    span {
      text-transform: uppercase;
    }
    a {
      color: var(--txt-footer-color);
      text-transform: capitalize;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
    }
  }
`;

export const FooterIcon = styled.img``;
