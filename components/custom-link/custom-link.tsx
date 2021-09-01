import { NextPage } from 'next';
import { CustomLinkStyled, LinkStyled, ShortLink } from './custom-link.styled';
import Button from '../button/button';

const CustomLink: NextPage = () => {
  return (
    <CustomLinkStyled>
      <LinkStyled>link</LinkStyled>
      <ShortLink>shortLink</ShortLink>
      <Button>copy</Button>
    </CustomLinkStyled>
  );
};

export default CustomLink;
