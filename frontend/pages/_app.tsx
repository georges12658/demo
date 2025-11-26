/**
 * Custom App component for Next.js.
 *
 * @param {AppProps} props - The props passed by Next.js.
 * @returns {JSX.Element} The rendered application.
 */
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
