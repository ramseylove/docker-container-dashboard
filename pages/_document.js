import Document, { Html, Head, Main, NextScript } from "next/document";

class DockerDashboardDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta content="initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DockerDashboardDocument;
