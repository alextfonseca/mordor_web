import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Header } from '../components/Header'

import styles from './project/styles.module.scss'

import ProjectPageTitle from '../../public/project/icons/projectPageTitle.svg'
import ProjectBanner from '../../public/project/globalsense/projectbanner.svg'

import LogoProject from '../../public/project/globalsense/globalsense-logo.svg'
import PatternProject from '../../public/project/globalsense/globalsense-pattern.svg'

import CardProject from '../../public/project/globalsense/globalsense-applications1.svg'
import BrindeProject from '../../public/project/globalsense/globalsense-applications2.svg'
import BookProject from '../../public/project/globalsense/globalsense-applications3.svg'
import BrindeProject4 from '../../public/project/globalsense/globalsense-applications4.svg'

import Decoration from '../../public/project/icons/starDecoration.svg'

import { AboutProjectBox } from '../components/page/Project/page/AboutProjectBox'
import { Footer } from '../components/Footer'

import { YoutubeSection } from '../components/page/Project/page/YoutubeSection/globalsense'

import { ApplicationMaterials } from '../components/page/Project/page/ApplicationMaterials'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import ColorImage from '../../public/project/globalsense/globalsense-cor.svg'

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

      <section className={styles.aboutProjectText}>
        <div className={styles.decoration}>
          <Image src={Decoration} alt="Ícone de uma estrela " />
        </div>

        <div className={styles.title}>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <h2>
              A new Brazilian perfumery:
              <br /> Global Sense
            </h2>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInRight">
            <p>Global Sense</p>
          </AnimationOnScroll>
        </div>

        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={styles.text}>
            <p>
              A brand with the purpose of changing lives and providing the
              possibility of financial growth, this is Global Sense.
            </p>
            <p>
              The newest Brazilian perfumery seeks to create an ecosystem of
              consultants who sell its products, and thus create a community.
            </p>
            <p>
              The Global Senses brand uses as a conceptual pillar the idea of
              chain transformation through the good connections we make in the
              course of life. In addition, the brand seeks to emphasize the
              propagating power of a good idea, by placing the &quot;S&quot; of
              the name being created by connections and at the same time being
              from the center.
            </p>
          </div>
        </AnimationOnScroll>
      </section>

      <YoutubeSection />

      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <div className={styles.projectLogo}>
          <Image src={LogoProject} alt="Logo da empresa" />
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <section className={styles.typographySection}>
          <h2>Institutional chrome and typography</h2>

          <div className={styles.text}>
            <p>
              The institutional chroma defined for the brand is a variation of
              shades of green with the addition of 70% and 65% gray to give
              sobriety and at the same time an excellent contrast.
            </p>

            <p>
              The typographic family chosen for the brand was Code Pro, a
              refined, modern option with a contemporary style that conveys
              confidence and security, as well as providing a good application
              for titles and text online and offline.
            </p>
          </div>

          <Image
            src={ColorImage}
            alt="Imagem do guia de estilo utilizado no projeto"
          />
        </section>
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

        <AnimationOnScroll animateIn="animate__fadeInRight">
          <Image src={BrindeProject4} alt="Brinde da empresa" />
        </AnimationOnScroll>
      </section>

      <Footer withBackground={true} />
    </div>
  )
}

export default Project
