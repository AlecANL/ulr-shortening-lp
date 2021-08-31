import { NextPage } from 'next';
import { HeadlineStyled } from './headline.styled';

const Headline: NextPage = () => {
  return (
    <HeadlineStyled>
      <div className="wrapper">
        <div className="headline-content">
          <h2>Boost your links today</h2>
          <button>get started</button>
        </div>
      </div>
    </HeadlineStyled>
  );
};

export default Headline;
