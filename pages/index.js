import Head from 'next/head';
import Main from '../Components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Multilateral Model Institute</title>
        <meta name="description" content="Multilateral Model Institute. Address: Road No - 1, House No - 13, Block - A, Dhaka Uddan, Mohammadpur, 1207" />
        <meta name="keywords" content="Multilateral Model Institute, mmi, mmi offiial" />
        <meta name="author" content="Multilateral Model Institute" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Multilateral Model Institute" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}
