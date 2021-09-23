import styled from 'styled-components';

export const CustomLinkStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: start;
  gap: 0.5rem;
  background-color: var(--just-white);
  border-radius: 0.3125rem;
  font: var(--mobile-smallBold);
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
  }
  button {
    border-radius: 5px;
    padding-inline: 1.9375rem;
    padding-block: 0.625rem;
    text-transform: capitalize;
    border-color: transparent;
    background-color: var(--just-cyan);
    font: var(--mobile-buttonBold);
    color: var(--just-white);
    cursor: pointer;
    &:active {
      transform: scale(0.98);
    }
    &:hover {
      background-color: #9ae3e3;
    }
  }
`;

export const LinkStyled = styled.span`
  color: var(--just-dark);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;
export const ShortLink = styled.a`
  color: var(--just-cyan);
  text-decoration: none;
`;
