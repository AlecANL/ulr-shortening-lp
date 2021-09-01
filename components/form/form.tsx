import { NextPage } from 'next';
import { FormStyled } from './form.styled';
import Button from '../button/button';

const Form: NextPage = () => {
  return (
    <FormStyled>
      <input
        type="text"
        name="url"
        placeholder="Shorten a link here..."
        aria-label="put valid url"
      />
      <Button>shorten it!</Button>
    </FormStyled>
  );
};

export default Form;
