import React from 'react';
import App, { Container, AppComponentContext } from 'next/app';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import '../styles/index.scss';

class MyApp extends App {
  
  static async getInitialProps(appCtx: AppComponentContext) {
    return {
      pageProps: await loadGetInitialProps(appCtx.Component, appCtx)
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;