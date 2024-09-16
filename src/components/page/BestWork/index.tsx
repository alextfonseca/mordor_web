import React from 'react'
import { BestWorkComponent } from '../../BestWorkComponent'
import styles from './styles.module.scss'

import bestWordImageOne from '../../../../public/images/hatImage.webp'

import bestWordImageTwo from '../../../../public/images/brandingImage.webp'

import bestWordImageThree from '../../../../public/images/agathon.svg'

export const BestWork = () => {
  return (
    <section className={styles.bestWork} id="ourCase">
      <div className={styles.container}>
        <h2>
          Some of our <span>best work</span>
        </h2>

        <div className={styles.components}>
          <BestWorkComponent
            title={'A new development in Belo Horizonte'}
            titlename={'Brisas Pampulha'}
            image={bestWordImageOne}
            link={'/brisas'}
          />

          <BestWorkComponent
            title={'A new Brazilian perfumery: Global Sense'}
            titlename={'Global Sense'}
            image={bestWordImageTwo}
            link={'/globalsense'}
            variant={'left'}
          />

          <BestWorkComponent
            title={'A New brand for a unique group in Brazil'}
            titlename={'Agathon Holding'}
            image={bestWordImageThree}
            link={'/agathon'}
          />
        </div>
      </div>
    </section>
  )
}
