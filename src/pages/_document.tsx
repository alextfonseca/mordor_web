import React from 'react'

import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.svg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <meta
            name="title"
            content="Mordor | At Mordor we create iconic brands for unique customers"
          />
          <meta
            name="description"
            content="Mordor is a branding and brand experience studio. What does that
            mean? Here we create not only your brand, but the entire visual and
            textual universe so that our customer has the best possible
            experience with your company through your brand."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mordor.com" />
          <meta
            property="og:title"
            content="Mordor | At Mordor we create iconic brands for unique customers"
          />
          <meta
            property="og:description"
            content="Mordor is a branding and brand experience studio. What does that
            mean? Here we create not only your brand, but the entire visual and
            textual universe so that our customer has the best possible
            experience with your company through your brand."
          />
          {/* <meta property="og:image" content="/ogimage.png" /> */}

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://movepay.com" />
          <meta
            property="twitter:title"
            content="Mordor | At Mordor we create iconic brands for unique customers"
          />
          <meta
            property="twitter:description"
            content="Mordor is a branding and brand experience studio. What does that
            mean? Here we create not only your brand, but the entire visual and
            textual universe so that our customer has the best possible
            experience with your company through your brand."
          />
          {/* <meta property="twitter:image" content="/ogimage.png" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
