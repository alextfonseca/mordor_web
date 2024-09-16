import Image, { StaticImageData } from 'next/image'
import styles from './styles.module.scss'

import { AnimationOnScroll } from 'react-animation-on-scroll'
import Decoration from '../../../public/icons/linkDecoration.svg'

interface BestWorkProps {
  title: string
  titlename: string
  image: StaticImageData
  link: string
  variant?: 'left' | 'right'
}
export const BestWorkComponent = ({
  title,
  titlename,
  image,
  link,
  variant = 'right'
}: BestWorkProps) => {
  if (variant === 'left') {
    return (
      <div className={styles.container}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <Image src={image} alt={title} />
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          className={styles.contentLeft}
        >
          <h3>{title}</h3>
          <p>{titlename}</p>

          <div className={styles.link}>
            <a href={link} aria-label={`See more ${title}`}>
              See more
            </a>

            <Image src={Decoration} alt="Decoração" />
          </div>
        </AnimationOnScroll>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        className={styles.content}
      >
        <h3>{title}</h3>
        <p>{titlename}</p>

        <div className={styles.link}>
          <a href={link}>See more</a>

          <Image src={Decoration} alt="Decoração" />
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInRight">
        <Image src={image} alt={title} />
      </AnimationOnScroll>
    </div>
  )
}
