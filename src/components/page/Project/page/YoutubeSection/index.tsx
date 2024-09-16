import React, { useEffect, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import YouTube from 'react-youtube'
import styles from './styles.module.scss'
export const YoutubeSection = () => {
  const [widthScreen, setWidthScreen] = useState(0)

  useEffect(() => {
    setWidthScreen(window.innerWidth)
  }, [])

  const opts = {
    width: '100%',
    height: '511',
    playerVars: {
      autoplay: 0
    },
    resizeTo: {
      width: widthScreen > 912 ? '912' : widthScreen - 20
    }
  }

  function onReadyVideo(event: any) {
    event.target.pauseVideo()
  }

  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <section className={styles.youtubeSection}>
        <div className={styles.youtubePlayer}>
          <YouTube videoId="l2WcxMAaiRA" opts={opts} onReady={onReadyVideo} />
        </div>
      </section>
    </AnimationOnScroll>
  )
}
