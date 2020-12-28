import {AppProps} from "next/app";

export function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
