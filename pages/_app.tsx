import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { client } from '../apollo';
import { Header } from '../components/Header';
import { TopButton } from '../components/TopButton';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/7e5e711513.js" crossOrigin="anonymous"></Script>
      <ApolloProvider client={client}>
        <Header />
        <TopButton />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
