import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { client } from '../apollo';
import { Header } from '../components/Header';
import { TopButton } from '../components/TopButton';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://kit.fontawesome.com/7e5e711513.js" crossOrigin="anonymous"></script>
      </Head>
      <ApolloProvider client={client}>
        <Header />
        <TopButton />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
