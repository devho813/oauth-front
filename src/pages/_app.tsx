import React from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import GlobalStyles from '../utils/global-styles';
import Head from 'next/head';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>OAuth 2.0</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
        <meta name="description" content="OAuth 2.0 연습" />
        <meta name="author" content="devho813 <devho813@gmail.com>" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
