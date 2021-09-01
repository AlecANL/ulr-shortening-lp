import { NextPage } from 'next';
import { HeadlineStyled } from './headline.styled';
import Button from '../button/button';

const Headline: NextPage = () => {
  return (
    <HeadlineStyled>
      <div className="wrapper">
        <div className="headline-content">
          <h2>Boost your links today</h2>
          <Button>get started</Button>
        </div>
      </div>
    </HeadlineStyled>
  );
};

export default Headline;
