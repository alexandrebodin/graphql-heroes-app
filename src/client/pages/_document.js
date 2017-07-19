import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700"
            rel="stylesheet"
          />
          <style>{`
            body {
              margin: 0;
              background-color: #212121;
              font-family: Ubuntu, sans-serif; 
            }
          `}</style>
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
