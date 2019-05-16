import React from 'react';
import App, { Container } from 'next/app';
import '../styles/index.scss';

class MyApp extends App {
  
  static async getInitialProps({ Component, ctx }) {
    if (Component.getInitialProps) {
      return await Component.getInitialProps(ctx);
    }

    return {};
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