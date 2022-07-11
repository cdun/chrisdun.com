import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    margin: 0;
  }

  body {
    max-width: 50rem;
    margin: 0 auto;
    padding-top: 5rem;
    font: 16px/1.6 'Poppins', sans-serif;
    /* background-color: #fff;
    background-repeat: repeat-y;
    background-size: 100% 16px;
    background-image: linear-gradient(to bottom,#0ff 0,rgba(255,255,255,0) 1px); */
  }
  @media screen and (max-width: 50rem) {
    body {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  
  h1, h2, h3 {
    font-weight: 200;
    text-transform: uppercase;

    a {
      color: inherit;
      text-decoration: inherit;
    }

    .date {
      display: block;
      font-size: 0.5em;
    }
  }

  h4, h5 {
    font-weight: inherit;
  }

  h1, .h1 {
    font-size: 4.25rem;
    line-height: 5.25rem;
    margin-top: 1.3125rem;
    margin-bottom: 2.625rem;
  }
  h2, .h2 {
    font-size: 2.625rem;
    line-height: 2.625rem;
    margin-top: 1.3125rem;
    margin-bottom: 1.3125rem;
  }
  h3, .h3 {
    font-size: 1.625rem;
    line-height: 2.625rem;
    margin-top: 1.3125rem;
    margin-bottom: 0rem;
  }
  h4, .h4 {
    font-size: 1rem;
    line-height: 1.3125rem;
    margin-top: 1.3125rem;
    margin-bottom: 0rem;
  }
  h5, .h5 {
    font-size: 1rem;
    line-height: 1.3125rem;
    margin-top: 1.3125rem;
    margin-bottom: 0rem;
  }

  a {
    color: inherit;
  }

  p, ul, ol, pre, table, blockquote {
    margin-top: 0rem;
    margin-bottom: 1.3125rem;
  }
  ul ul, ol ol, ul ol, ol ul {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  blockquote {
    font-style: italic;

    .attribution {
      display: block;
      font-weight: 700;
      font-style: normal;
    }
  }
`;
