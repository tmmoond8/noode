import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/chakraTheme';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import store from '@/stores';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme} resetCSS>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </>
  );
}
