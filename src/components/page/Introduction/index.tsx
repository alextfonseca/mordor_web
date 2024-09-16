import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

import Logo from '../../../../public/icons/logo.svg'
import { ButtonBackground } from '../../ButtonBackground'

export const Introduction = () => {
  return (
    <section className={styles.introduction} id="welcome">
      <div className={styles.container}>
        <Image
          src={Logo}
          alt="Logo da empresa escrito Mordor"
          className={styles.logo}
        />

        <div className={styles.content}>
          <h2>
            Welcome to <span>Mordor</span>
          </h2>

          <p>
            Mordor is a branding and brand experience studio. What does that
            mean? Here we create not only your brand, but the entire visual and
            textual universe so that our customer has the best possible
            experience with your company through your brand.
          </p>

          <p>At Mordor we create iconic brands for unique customers</p>

          <ButtonBackground buttonText={'Contact Now'} />
        </div>
      </div>
    </section>
  )
}
