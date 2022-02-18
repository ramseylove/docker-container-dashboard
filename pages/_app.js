import Layout from "../components/layout/layout";
import { NavigationContextProvider } from "../store/nav-context";
import "../styles/globals.css";

function dockerContainerApp({ Component, pageProps }) {
  return (
    <NavigationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavigationContextProvider>
  );
}

export default dockerContainerApp;
