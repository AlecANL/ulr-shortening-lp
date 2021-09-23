import { NextPage } from 'next';
import { FormStyled } from './form.styled';
import Button from '../button/button';
import React from 'react';
import { IShortLink, IResult } from '../../types/link.types';

type FormProps = {
  link: string;
  setLink: Function;
  setLinks: Function;
};

const Form: NextPage<FormProps> = ({ link, setLink, setLinks }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<boolean>(false);
  const baseUrl = 'https://api.shrtco.de/v2/shorten';
  const linkPattern =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

  async function getShortLink(link: string) {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}?url=${link}`);
      const linkShortly: IShortLink = await response.json();
      console.log(linkShortly);

      setLoading(false);
      if (!linkShortly.ok) setError(true);
      if (linkShortly.ok) {
        setLinks((state: IResult[]) => [...state, linkShortly.result]);
      }
    } catch (error) {
      setLoading(true);
      throw new Error(error);
    }
  }

  React.useEffect(() => {
    const interval = setTimeout(() => {
      setError(false);
    }, 1500);
    return () => {
      clearTimeout(interval);
    };
  }, [isError]);

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!link || !linkPattern.test(link)) {
      setError(true);
      console.log('whoops enter a valid link');
      return;
    }
    getShortLink(link);
    setError(false);
    setLink('');
  }

  function handleLinkChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLink(event.currentTarget.value);
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="url"
          placeholder="Shorten a link here..."
          aria-label="put valid url"
          value={link}
          className={isError ? 'is-error' : ''}
          onChange={handleLinkChange}
        />
        {isError && <p className="error">please enter a valid url</p>}
      </div>
      <button disabled={loading ? true : false}>
        {loading ? 'loading...' : 'shorten it!'}
      </button>
    </FormStyled>
  );
};

export default Form;
