import Layout from "../components/layout/layout";
import { NavigationContextProvider } from "../store/nav-context";
import { ThemeContextProvider } from "../store/theme-context";
import "../styles/globals.css";

function dockerContainerApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <NavigationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NavigationContextProvider>
    </ThemeContextProvider>
  );
}

export default dockerContainerApp;
