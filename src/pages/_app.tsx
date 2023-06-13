import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default ({ pageProps, Component }: AppProps) => {
  return <Component {...pageProps} />;
};
