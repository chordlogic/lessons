import styles from './Footer.module.scss'
import PianoKeys from './PianoKeys'
import logoImg from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.keysBg} aria-hidden>
        <PianoKeys />
      </div>

      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>
              <img src={logoImg} alt="ChordLogic Logo" className={styles.logoImage} />
              <span className={styles.logoText}>ChordLogic</span>
            </a>
            <p className={styles.tagline}>
              Science-Based Piano Lessons<br />with Andrew Varnavsky
            </p>
          </div>

          <nav className={styles.links}>
            <a href="#method">Method</a>
            <a href="#reviews">Reviews</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className={styles.social}>
            <p className={styles.socialLabel}>Watch free lessons</p>
            <a
              href="https://youtube.com/@ChordLogic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ytLink}
            >
              <span className={styles.ytIcon}>▶</span>
              YouTube · ChordLogic
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Andrew Varnavsky · ChordLogic</span>
          <span className={styles.price}>$29 / lesson · First lesson free</span>
        </div>
      </div>
    </footer>
  )
}
