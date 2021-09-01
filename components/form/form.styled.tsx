import styled from 'styled-components';

export const FormStyled = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  inset-inline: 0;
  padding: 1.5rem;
  gap: 1rem;
  inset-block-start: 0;
  margin-inline: 1.5rem;
  transform: translateY(-50%);
  border-radius: 0.625rem;
  background: var(--dark-purple) url('/images/bg-shorten-mobile.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  button {
    padding: 0;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    padding-block: 0.625rem;
    border-radius: 0.3125rem;
    text-transform: capitalize;
  }
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
    transform: translateY(-50%);
    background: var(--dark-purple) url('/images/bg-shorten-desktop.svg');

    input[type='text'] {
      flex-grow: 1;
      padding-block: 0.875rem;
      padding-inline-start: 2rem;
      border-radius: 0.625rem;
    }
    button {
      border-radius: 5px;
      padding-block: 1.125rem;
      padding-inline: 2.5rem;
    }
  }
`;
