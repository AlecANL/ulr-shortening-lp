import styled from 'styled-components';

export const AboutStyled = styled.main`
  background-color: var(--soft-gray);
  padding-inline: 1.5rem;
  padding-block-start: 10rem;
  .about-content {
    text-align: center;
    position: relative;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5.75rem;
  padding-block-start: 5.75rem;
  padding-block-end: 5rem;
`;

export const AboutCard = styled.article`
  background-color: var(--just-white);
  border-radius: 0.3125rem;
  padding-inline: 2rem;
  padding-block-start: 4.8125rem;
  padding-block-end: 2.5625rem;
`;
