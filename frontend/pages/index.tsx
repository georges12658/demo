/**
 * Home page component.
 *
 * @returns {JSX.Element} The rendered page.
 */
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <> 
    <Head>
      <title>Demo App</title>
    </Head>
    <main>
      <h1>Welcome to Demo App</h1>
    </main>
  </>
);

export default Home;
