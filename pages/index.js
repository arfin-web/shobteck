import Head from 'next/head';
import Main from '../Components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop Tech</title>
        <meta name="description" content="Shop Tech. Address: Sector 10, Uttara, Dhaka, Bangladesh" />
        <meta name="keywords" content="Shop Tech" />
        <meta name="author" content="Shop Tech" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Shop Tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}
