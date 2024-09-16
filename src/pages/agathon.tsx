import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Header } from '../components/Header'

import styles from './project/styles.module.scss'

import ProjectPageTitle from '../../public/project/icons/projectPageTitle.svg'
import ProjectBanner from '../../public/project/agathon/projectbanner.png'

import LogoProject from '../../public/project/agathon/agathon-logo.svg'
import PatternProject from '../../public/project/agathon/agathon-pattern.jpg'

import CardProject from '../../public/project/agathon/agathon-applications1.jpg'
import BrindeProject from '../../public/project/agathon/agathon-applications2.jpg'
import BookProject from '../../public/project/agathon/agathon-applications3.jpg'
import BrindeProject4 from '../../public/project/agathon/agathon-applications4.jpg'

import Decoration from '../../public/project/icons/starDecoration.svg'

import { AboutProjectBox } from '../components/page/Project/page/AboutProjectBox'
import { Footer } from '../components/Footer'

import { YoutubeSection } from '../components/page/Project/page/YoutubeSection/agathon'

import { ApplicationMaterials } from '../components/page/Project/page/ApplicationMaterials'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import ColorImage from '../../public/project/agathon/agathon-cor.jpg'

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
              A New brand for a unique
              <br /> group in Brazil
            </h2>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInRight">
            <p>Agathon Holding</p>
          </AnimationOnScroll>
        </div>

        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <div className={styles.text}>
            <p>
              A holding company is much more than the key company that brings
              together the other ventures; it is the intellectual and synergetic
              link of strength.
            </p>
            <p>
              It is the company that concentrates the vision and the management
              of the latent purposes of each enterprise.
            </p>
            <p>
              The Ionic columns of the Greek temples were used to create the
              brand. The Ionic order was characterized by the elegance and
              robustness of its ornaments and columns. Moreover, the very
              concept of columns is present in the brand, as a unit of support
              and security, making an even closer link with the values and goals
              of the company.
            </p>
            <p>
              As a main form it is still possible to see the letter &quot; T
              &quot; in the construction of the columns, because it is the
              central letter of the naming.
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
              The institutional color defined for the brand is mixed with
              vibrant shades of green, orange and burgundy. The colors were
              designed to transmit energy and liveliness, values intrinsic to
              the brand, in addition, an auxiliary color palette was designed
              for each sub-brand of architecture.
            </p>

            <p>
              The typographic family chosen for the brand was Code Pro, a
              refined, modern option, with a contemporary style that conveys
              confidence and security, in addition to providing a good
              application for title and text both online and offline.
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
