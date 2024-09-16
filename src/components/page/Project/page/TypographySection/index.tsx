import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

import ColorImage from '../../../../../../public/project/images/brisascor.webp'

export const TypographySection = () => {
  return (
    <section className={styles.typographySection}>
      <h2>Institutional chrome and typography</h2>

      <div className={styles.text}>
        <p>
          The institutional color defined for the brand is mixed with vibrant
          shades of green, orange and burgundy. The colors were designed to
          transmit energy and liveliness, values intrinsic to the brand, in
          addition, an auxiliary color palette was designed for each sub-brand
          of architecture.
        </p>

        <p>
          The typographic family chosen for the brand was Code Pro, a refined,
          modern option, with a contemporary style that conveys confidence and
          security, in addition to providing a good application for title and
          text both online and offline.
        </p>
      </div>

      <Image
        src={ColorImage}
        alt="Imagem do guia de estilo utilizado no projeto"
      />
    </section>
  )
}
