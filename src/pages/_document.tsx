import { Html, Head, Main, NextScript } from "next/document";

export default () => {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' href='/profile.png' />
        <title>05Lazy</title>
      </Head>
      <body className='dark:bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
