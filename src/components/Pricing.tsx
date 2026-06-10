import styles from './Pricing.module.scss'

interface PricingProps {
  onOpenCal: () => void
}

const includes = [
  '1-on-1 lesson via Discord (45 min)',
  'Personalized practice plan',
  'Recording of each session',
  'Theory notes & exercises',
  'Ear training drills',
  'Support between lessons',
]

export default function Pricing({ onOpenCal }: PricingProps) {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.header}>
        <span className="tag">Simple Pricing</span>
        <h2 className={`section-title ${styles.title}`}>
          One clear price.<br />
          <em>Zero surprises.</em>
        </h2>
        <div className="divider" style={{ marginTop: '1.5rem' }} />
      </div>

      <div className={styles.cards}>
        <div className={styles.freeCard}>
          <div className={styles.freeTop}>
            <span className={styles.freeLabel}>First Lesson</span>
            <div className={styles.freePrice}>
              <span className={styles.freePriceNum}>Free</span>
            </div>
          </div>
          <p className={styles.freeDesc}>
            A full 45-minute session — no strings attached. I will assess your
            current level, identify your specific blockers, and show you exactly
            what your first month of learning looks like.
          </p>
          <button type="button" className={styles.freeCta} onClick={onOpenCal}>
            Claim Your Free Lesson →
          </button>
        </div>

        <div className={styles.mainCard}>
          <div className={styles.mainTop}>
            <span className={styles.mainLabel}>Regular Lessons</span>
            <div className={styles.mainPrice}>
              <span className={styles.currency}>$</span>
              <span className={styles.priceNum}>29</span>
              <span className={styles.per}>/lesson</span>
            </div>
            <p className={styles.mainSub}>No subscription. Pay per lesson.</p>
          </div>

          <ul className={styles.list}>
            {includes.map((item) => (
              <li key={item} className={styles.listItem}>
                <span className={styles.check}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <button type="button" className={styles.mainCta} onClick={onOpenCal}>
            Book a Lesson
          </button>
        </div>
      </div>

      <p className={styles.note}>
        Cancel or reschedule any lesson up to 24 hours in advance — no charge, no questions.
      </p>
    </section>
  )
}
