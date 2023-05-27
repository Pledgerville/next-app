import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@src/chakra/theme';
import Layout from '@src/components/Layout/Layout';
import type { AppProps } from 'next/app';
import '../firebase/client';
import '../styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
