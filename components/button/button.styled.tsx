import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding-inline: 2.5rem;
  padding-block: 0.875rem;
  background-color: var(--just-cyan);
  color: var(--just-white);
  text-transform: uppercase;
  border: none;
  border-radius: 1.75rem;
  font: var(--mobile-buttonBold);
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background-color: #9ae3e3;
  }
`;
