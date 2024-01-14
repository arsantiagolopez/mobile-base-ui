import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "@/components/Layout";
import LoggingStateButton from "@/components/LoginStateButton";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <LoggingStateButton />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
