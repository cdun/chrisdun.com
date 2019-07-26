import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import '../styles/index.scss';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}

export default MyApp;