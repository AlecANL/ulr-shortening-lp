import styled, { keyframes } from 'styled-components';

export const InputAnimation = keyframes`
0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(5px);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-5px);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(4px);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-4px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(2px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-2px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }

`;

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
  .form-group {
    position: relative;
    text-align: start;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .error {
    position: absolute;
    inset-block-end: -1.25rem;
    color: red;
    font-size: 0.875rem;
  }
  button {
    padding: 0;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    padding-block: 0.625rem;
    border-radius: 0.3125rem;
    text-transform: capitalize;
    font: var(--mobile-buttonBold);
    background-color: var(--just-cyan);
    color: var(--just-white);
    border-color: transparent;
    cursor: pointer;
    &:disabled {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.98);
    }
    &:hover {
      background-color: #9ae3e3;
    }
  }
  input[type='text'] {
    position: relative;
    padding-block: 0.375rem;
    padding-inline-start: 1rem;
    box-sizing: border-box;
    border-radius: 0.3125rem;
    color: rgba(52, 49, 61, 0.507);
    inline-size: 100%;
    border-color: transparent;
    /* opacity: 0.5; */
    font: inherit;
    &.is-error {
      color: red;
      border-color: red;
      animation-name: ${InputAnimation};
      animation-duration: 0.5s;
      animation-delay: 0.25s;
    }
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
      /* padding-block: 1.125rem; */
      padding-inline: 2.5rem;
    }
  }
`;
