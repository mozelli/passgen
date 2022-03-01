// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
    static async getInicialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
  
    render() {
    return (
        <Html>
          <Head>
            <link 
                rel="preconnect" 
                href="https://fonts.googleapis.com" 
            />
            <link 
                href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" 
                rel="stylesheet" 
            />
          </Head>
          <body>
            <Main />
            
            <NextScript />
          </body>
        </Html>
      )
  }
}

export default MyDocument;