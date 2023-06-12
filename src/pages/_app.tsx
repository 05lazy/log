import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default ({ pageProps, Component }: AppProps) => {
  return (
    <main className='dark:bg-gray-800'>
      <Component {...pageProps} />
    </main>
  );
};
