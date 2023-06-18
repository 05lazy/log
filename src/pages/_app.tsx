import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import { Layout } from "@/utils/Layout";

export default ({ pageProps, Component }: AppProps) => {
  return (
    <Layout>
      <span className='theme-bejamas' />
      <Component {...pageProps} />
    </Layout>
  );
};
