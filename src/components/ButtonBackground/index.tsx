import React from 'react'
import { Link } from 'react-scroll'
import styles from './styles.module.scss'

interface ButtonBackgroundProps {
  buttonText: string
}

export const ButtonBackground = ({ buttonText }: ButtonBackgroundProps) => {
  return (
    <Link
      offset={0}
      to="contact"
      spy={true}
      smooth={true}
      duration={1000}
      href="#service"
      className={styles.button}
    >
      {buttonText}
    </Link>
  )
}
