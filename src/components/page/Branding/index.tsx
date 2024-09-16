import Image from 'next/image'
import React, { useState } from 'react'
import styles from './styles.module.scss'

import Separator from '../../../../public/icons/separator.svg'

import { ButtonBackground } from '../../ButtonBackground'

// cards
import BrandingCardFront from '../../../../public/icons/cards/CardBrandingFront.svg'
import BrandingCardBack from '../../../../public/icons/cards/CardBrandingBack.svg'

import AnimationCardFront from '../../../../public/icons/cards/CardAnimationFront.svg'
import AnimationCardBack from '../../../../public/icons/cards/CardAnimationBack.svg'

import InnovationCardFront from '../../../../public/icons/cards/CardInnovationFront.svg'
import InnovationCardBack from '../../../../public/icons/cards/CardInnovationBack.svg'

import ReactCardFlip from 'react-card-flip'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Link } from 'react-scroll'

export const Branding = () => {
  const [brandingCardIsFlipped, setBrandingCardIsFlipped] = useState(false)
  const [animationCardIsFlipped, setAnimationCardFrontIsFlipped] =
    useState(false)
  const [innovationCardFrontIsFlipped, setInnovationCardFrontIsFlipped] =
    useState(false)

  const [hoverOnMouseCards, setHoverOnMouseCards] = useState(true)

  function handleBrandingCardFlipped() {
    setBrandingCardIsFlipped(!brandingCardIsFlipped)

    setAnimationCardFrontIsFlipped(false)
    setInnovationCardFrontIsFlipped(false)
  }

  function handleAnimationCardFlipped() {
    setAnimationCardFrontIsFlipped(!animationCardIsFlipped)

    setBrandingCardIsFlipped(false)
    setInnovationCardFrontIsFlipped(false)
  }

  function handleInnovationCardFrontFlipped() {
    setInnovationCardFrontIsFlipped(!innovationCardFrontIsFlipped)

    setAnimationCardFrontIsFlipped(false)
    setBrandingCardIsFlipped(false)
  }

  function handleHoverOnMouseCards() {
    setHoverOnMouseCards(!hoverOnMouseCards)

    console.log(hoverOnMouseCards)
  }

  return (
    <section className={styles.branding} id="service">
      <h2>
        <span>Brand your </span>business for success
      </h2>

      <p>
        Branding, animation or innovation, here we create what your company
        needs
      </p>

      <div className={styles.separator}>
        <Image src={Separator} alt="Ícone de um separador de conteúdo" />
      </div>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div
          className={
            hoverOnMouseCards ? styles.disabledCards : styles.activeCards
          }
          onMouseEnter={handleHoverOnMouseCards}
          onMouseLeave={handleHoverOnMouseCards}
        >
          <div className={styles.card}>
            <ReactCardFlip
              isFlipped={brandingCardIsFlipped}
              flipDirection="horizontal"
            >
              <button onClick={handleBrandingCardFlipped}>
                <Image src={BrandingCardFront} alt="Imagem de uma carta" />
              </button>

              <Link
                offset={0}
                to="ourCase"
                spy={true}
                smooth={true}
                duration={1000}
                href="#ourCase"
              >
                <Image src={BrandingCardBack} alt="Imagem de uma carta" />
              </Link>
            </ReactCardFlip>
          </div>

          <div className={styles.card}>
            <ReactCardFlip
              isFlipped={animationCardIsFlipped}
              flipDirection="horizontal"
            >
              <button onClick={handleAnimationCardFlipped}>
                <Image src={AnimationCardFront} alt="Imagem de uma carta" />
              </button>

              <Link
                offset={0}
                to="ourCase"
                spy={true}
                smooth={true}
                duration={1000}
                href="#ourCase"
              >
                <Image src={AnimationCardBack} alt="Imagem de uma carta" />
              </Link>
            </ReactCardFlip>
          </div>

          <div className={styles.card}>
            <ReactCardFlip
              isFlipped={innovationCardFrontIsFlipped}
              flipDirection="horizontal"
            >
              <button onClick={handleInnovationCardFrontFlipped}>
                <Image src={InnovationCardFront} alt="Imagem de uma carta" />
              </button>

              <Link
                offset={0}
                to="ourCase"
                spy={true}
                smooth={true}
                duration={1000}
                href="#ourCase"
              >
                <Image src={InnovationCardBack} alt="Imagem de uma carta" />
              </Link>
            </ReactCardFlip>
          </div>
        </div>
      </AnimationOnScroll>

      <div className={styles.button}>
        <ButtonBackground buttonText={'Contact Now'} />
      </div>
    </section>
  )
}
