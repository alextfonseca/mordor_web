import React from 'react'

import Head from 'next/head'
import { Header } from '../components/Header'
import { Introduction } from '../components/page/Introduction'
import { Branding } from '../components/page/Branding'
import { BestWork } from '../components/page/BestWork'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mordor | Branding and brand experience studio</title>
      </Head>

      <Header />

      <main>
        <div className="contentMain">
          <Introduction />

          <Branding />

          <BestWork />
        </div>
      </main>

      <Footer />
    </>
  )
}
