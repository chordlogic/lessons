import styles from './Hero.module.scss'
import PianoKeys from './PianoKeys'
import andrewImg from '../assets/andrew.png'

interface HeroProps {
  onOpenCal: () => void
}

export default function Hero({ onOpenCal }: HeroProps) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} aria-hidden>
        <PianoKeys />
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className="tag">ChordLogic · YouTube</span>
        </div>

        <div className={styles.mainRow}>
          <h1 className={styles.headline}>
            Science-Based<br />
            Piano Teaching
          </h1>
          <div className={styles.portraitCol}>
            <div className={styles.portrait}>
              <img src={andrewImg} alt="Andrew Varnavsky" className={styles.portraitImg} />
            </div>
            <p className={styles.portraitName}>Andrew Varnavsky</p>
          </div>
        </div>

        <div className={styles.rule} />

        <div className={styles.footer}>
          <p className={styles.meta}>
            $29 per lesson &nbsp;·&nbsp; First lesson free
          </p>
          <button type="button" className={styles.cta} onClick={onOpenCal}>
            Book Your Free Lesson →
          </button>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  )
}
