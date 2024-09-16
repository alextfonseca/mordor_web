import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Header } from '../components/Header'

import styles from './project/styles.module.scss'

import ProjectPageTitle from '../../public/project/icons/projectPageTitle.svg'
import ProjectBanner from '../../public/project/images/projectbanner.webp'
import LogoProject from '../../public/project/images/brisaslogo.webp'
import PatternProject from '../../public/project/images/brisaspattern.webp'

import CardProject from '../../public/project/images/brisascartao.webp'
import BrindeProject from '../../public/project/images/brisasbrinde.webp'
import BookProject from '../../public/project/images/brisasbook.webp'

import { AboutProjectBox } from '../components/page/Project/page/AboutProjectBox'
import { Footer } from '../components/Footer'
import { AboutProjectText } from '../components/page/Project/page/AboutProjectText'
import { YoutubeSection } from '../components/page/Project/page/YoutubeSection'
import { TypographySection } from '../components/page/Project/page/TypographySection'
import { ApplicationMaterials } from '../components/page/Project/page/ApplicationMaterials'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Project = () => {
  return (
    <div className={styles.project}>
      <Head>
        <title>Mordor | Project</title>
      </Head>

      <Header isProjectPage={true} />

      <section className={styles.introduction}>
        <div className={styles.title}>
          <Image
            src={ProjectPageTitle}
            alt="Title da pagina escrito mordor do meio e com duas nuvens nas ponta esquerda e direita"
          />
        </div>

        <div className={styles.banner}>
          <Image
            src={ProjectBanner}
            alt="Title da pagina escrito mordor do meio e com duas nuvens nas ponta esquerda e direita"
          />
        </div>
      </section>

      <AboutProjectBox />

      <AboutProjectText />

      <YoutubeSection />

      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <div className={styles.projectLogo}>
          <Image src={LogoProject} alt="Logo da empresa" />
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <TypographySection />
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInRight">
        <div className={styles.projectPattern}>
          <Image src={PatternProject} alt="Pattern da empresa" />
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <ApplicationMaterials />
      </AnimationOnScroll>

      <section className={styles.projectImages}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <Image src={CardProject} alt="Cartão da empresa" />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRight">
          <Image src={BrindeProject} alt="Brinde da empresa" />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <Image src={BookProject} alt="Book da empresa" />
        </AnimationOnScroll>
      </section>

      <Footer withBackground={true} />
    </div>
  )
}

export default Project
