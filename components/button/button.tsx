import { ButtonStyled } from './button.styled';
import { NextPage } from 'next';

interface INameButton {
  name: string | null;
}

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
