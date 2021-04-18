import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          <title>portfolio | cxgarcia_</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="cxgarcia's personal portfolio" />
          <meta
            property="og:title"
            content="portfolio | cxgarcia_"
            key="ogtitle"
          />
          <meta
            name="image"
            property="og:image"
            content="https://cxgarcia.com/og-port.png"
          />
          <meta
            property="og:description"
            content="cxgarcia's personal portfolio"
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

export default MyDocument;
