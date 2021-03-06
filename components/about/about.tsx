import { NextPage } from 'next';
import { AboutStyled, AboutGrid, AboutCard, IconImg } from './about.styled';
import Form from '../form/form';
import CustomLink from '../custom-link/custom-link';
import React from 'react';
import { IResult } from '../../types/link.types';

const About: NextPage = () => {
  const [link, setLink] = React.useState<string>('');
  const [links, setLinks] = React.useState<IResult[]>([]);

  return (
    <AboutStyled>
      <div className="wrapper">
        <div className="about-content">
          <Form link={link} setLink={setLink} setLinks={setLinks} />
          <div className="custom-links">
            {links.map((link, idx) => (
              <CustomLink
                link={link.original_link}
                linkShort={link.short_link}
                fullLinkShort={link.full_short_link}
                key={idx}
              />
            ))}
          </div>
          <div className="about-description">
            <h2>advanced statics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statics dashboards.
            </p>
          </div>
          <AboutGrid>
            <div className="line"></div>
            <AboutCard top="0">
              <div className="icon">
                <IconImg
                  src="/images/icon-brand-recognition.svg"
                  alt="icon brand"
                />
              </div>
              <h3>brand recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </AboutCard>
            <AboutCard top="40">
              <div className="icon">
                <IconImg
                  src="/images/icon-detailed-records.svg"
                  alt="icon brand"
                />
              </div>
              <h3>detailed records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </AboutCard>
            <AboutCard top="80">
              <div className="icon">
                <IconImg
                  src="/images/icon-fully-customizable.svg"
                  alt="icon brand"
                />
              </div>
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
