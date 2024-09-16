import React from 'react'
import styles from './styles.module.scss'

import Decoration from '../../../../../../public/icons/separatorCopyright.svg'
import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export const AboutProjectBox = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <section className={styles.aboutProject}>
        <div className={styles.aboutTextBox}>
          <div className={styles.title}>
            <h3>
              <span>Let`s talk about</span> Brisas Pampulha{' '}
            </h3>
          </div>

          <div className={styles.infos}>
            <div className={styles.info}>
              <p>What was done</p>

              <span>
                Branding <br /> Motion <br /> Graphic design
              </span>
            </div>

            <div className={styles.info}>
              <p>Awards and Nomations</p>

              <span>
                Brazil Design <br /> Awards <br /> Europe Awards <br /> Design
                design
              </span>
            </div>

            <div className={styles.info}>
              <p>Creation date</p>

              <span>
                April, 2022 <br /> Mordor Design
              </span>
            </div>
          </div>

          <div className={styles.footer}>
            <p>All right reserved for </p>

            <Image src={Decoration} alt="Decoração" />
            <p>Mordor Design and experience </p>
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  )
}
