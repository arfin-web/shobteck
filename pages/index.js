import Head from 'next/head';
import Main from '../Components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shob Tech</title>
        <meta name="description" content="Shob Tech. Address: Sector 10, Uttara, Dhaka, Bangladesh" />
        <meta name="keywords" content="Shob Tech" />
        <meta name="author" content="Shob Tech" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Shob Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}
