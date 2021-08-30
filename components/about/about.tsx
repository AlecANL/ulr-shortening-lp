import { NextPage } from 'next';
import { AboutStyled, AboutGrid, AboutCard } from './about.styled';
import Form from '../form/form';

const About: NextPage = () => {
  return (
    <AboutStyled>
      <div className="wrapper">
        <div className="about-content">
          <Form />
          <div className="about-description">
            <h2>advanced statics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statics dashboards.
            </p>
          </div>
          <AboutGrid>
            <AboutCard>
              <h3>brand recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </AboutCard>
            <AboutCard>
              <h3>detailed records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </AboutCard>
            <AboutCard>
              <h3>fully customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </AboutCard>
          </AboutGrid>
        </div>
      </div>
    </AboutStyled>
  );
};

export default About;
