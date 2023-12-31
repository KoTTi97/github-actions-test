import { type AppProps } from "next/app";
import Head from "next/head";
import { type FunctionComponent } from "react";

type MyAppProps = AppProps;

const MyApp: FunctionComponent<MyAppProps> = ({ Component, pageProps }) =>
{
  return (
    <>
      <Head>
        <title>Github Actions Test</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <Component {...pageProps}/> 
    </>
  );
};

export default MyApp;
