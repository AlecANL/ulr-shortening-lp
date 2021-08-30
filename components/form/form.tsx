import { NextPage } from 'next';
import { FormStyled } from './form.styled';

const Form: NextPage = () => {
  return (
    <FormStyled>
      <input
        type="text"
        name="url"
        placeholder="Shorten a link here..."
        aria-label="put valid url"
      />
      <button>shorten it!</button>
    </FormStyled>
  );
};

export default Form;
