import '../styles/globals.css';
import RootLayout from "@/app/layout/layout";
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout {...pageProps}>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
