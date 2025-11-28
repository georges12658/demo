/**
 * Home page component.
 *
 * @returns {JSX.Element} The rendered page.
 */
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>Demo App</title>
    </Head>
    <main>
      <h1>Welcome to Demo App</h1>
    </main>
  </Layout>
);

export default Home;
