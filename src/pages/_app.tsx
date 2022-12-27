import type { AppProps } from "next/app";
import { M_PLUS_2 } from "@next/font/google";

const mPlus2 = M_PLUS_2({
  subsets: ["latin"],
  variable: "--font-m-plus-2",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${mPlus2.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
