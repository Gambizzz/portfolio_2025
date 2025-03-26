import '../styles/globals.scss';
import '../../i18n';
import Head from 'next/head';
import CustomCursor from '../components/CustomCursor';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <CustomCursor />
    </>
  );
}

export default MyApp;