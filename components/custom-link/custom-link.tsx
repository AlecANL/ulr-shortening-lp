import { NextPage } from 'next';
import { CustomLinkStyled, LinkStyled, ShortLink } from './custom-link.styled';
import React from 'react';

type CustomLinkProps = {
  link: string;
  linkShort: string;
  fullLinkShort: string;
};

const CustomLink: NextPage<CustomLinkProps> = ({
  link,
  linkShort,
  fullLinkShort,
}) => {
  const linkRef = React.useRef<HTMLAnchorElement | null>(null);
  const [textButton, setTextButton] = React.useState<string>('copy');
  function handleCopyLink() {
    const textLink = linkRef.current.href;
    navigator.clipboard
      .writeText(textLink)
      .then(link => link)
      .catch(err => `whoops was happen a error: ${err}`);
    setTextButton('copied!');
    setTimeout(() => {
      setTextButton('copy');
    }, 1500);
  }

  return (
    <CustomLinkStyled>
      <LinkStyled>{link}</LinkStyled>
      <ShortLink ref={linkRef} href={fullLinkShort} target="_blank">
        {linkShort}
      </ShortLink>
      <button onClick={handleCopyLink}>{textButton}</button>
    </CustomLinkStyled>
  );
};

export default CustomLink;
