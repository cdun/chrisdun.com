import React from 'react';
import App, { Container, AppProps } from 'next/app';
import Head from 'next/head';
import NamePlate from '../components/NamePlate';
import Router from 'next/router';
import '../styles/index.scss';

interface IState { animating: boolean }

class MyApp extends App<AppProps, IState> {

  state: IState = {
    animating: false
  };

  componentDidMount() {
    Router.events.on('routeChangeStart', this.routeChangeStart);
    Router.events.on('routeChangeComplete', this.routeChangeComplete);

    this.setState({ animating: true });
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.routeChangeStart);
    Router.events.off('routeChangeComplete', this.routeChangeComplete);
  }

  routeChangeStart = (url: string) => {
    this.setState({ animating: true });
  }

  routeChangeComplete = (url: string) => {
    setTimeout(() => {
      this.setState({ animating: false });
    }, 2000);
  }

  render() {
    const { Component, pageProps } = this.props;
    

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <Container>
          <main className="page">
            <NamePlate />
            <Component {...pageProps} />
          </main>
        </Container>
      </>
    );
  }
}
    
export default MyApp;