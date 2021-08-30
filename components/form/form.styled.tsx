import styled from 'styled-components';

export const FormStyled = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  inset-inline: 0;
  padding: 1.5rem;
  gap: 1rem;
  inset-block-start: 0;
  margin-inline: 1.5rem;
  transform: translateY(-220%);
  border-radius: 0.625rem;
  background: var(--dark-purple) url('/images/bg-shorten-mobile.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  input[type='text'] {
    padding-block: 0.375rem;
    padding-inline-start: 1rem;
    box-sizing: border-box;
    border-radius: 0.3125rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-block: 3.25rem;
    padding-inline: 3.375rem;
    transform: translateY(-170%);
    background: var(--dark-purple) url('/images/bg-shorten-desktop.svg');

    input[type='text'] {
      flex-grow: 1;
      padding-block: 0.875rem;
      padding-inline-start: 2rem;
      border-radius: 0.625rem;
    }
  }
`;
