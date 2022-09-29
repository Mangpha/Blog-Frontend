import { NextPage } from 'next';
import Head from 'next/head';

interface ISEOProps {
  title?: string;
  description?: string;
}

export const SEO: NextPage<ISEOProps> = ({ title, description }) => {
  return (
    <Head>
      <meta name="title" content={title || 'Mangpha' + ' | Dev Blog'} />
      <meta name="description" content={description || 'Mangpha Dev Blog'} />
      <meta
        name="keywords"
        content="Dev Blog, Typescript, NestJS, Javascript"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Korean" />
      <meta name="author" content="Mangpha" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mangpha.dev/" />
      <meta property="og:title" content={title || 'Mangpha' + ' | Dev Blog'} />
      <meta
        property="og:description"
        content={description || 'Mangpha Dev Blog'}
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
    </Head>
  );
};
