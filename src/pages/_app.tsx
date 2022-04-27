import React from 'react';
import  GlobalStyle  from '../styles/global';
import type { AppProps } from 'next/app'

import Header from '../components/Herder';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      
      <GlobalStyle />
    </>
    

  )
}

export default MyApp
