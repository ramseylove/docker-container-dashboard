import Layout from "../components/layout/layout";
import "../styles/globals.css";

function dockerContainerApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default dockerContainerApp;
