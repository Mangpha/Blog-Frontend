import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { TopButton } from '../components/TopButton';
import './global.css';
import 'nprogress/nprogress.css';
import './app.css';
import { FullScreenLoading } from '../components/FullScreenLoading';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return loading ? (
    <FullScreenLoading />
  ) : (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="https://kit.fontawesome.com/7e5e711513.js" crossOrigin="anonymous"></Script>
      <Header />
      <TopButton />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
