import styles from './Reviews.module.scss'

interface Review {
  name: string
  since: string
  stars: number
  text: string
  photo?: string
}

const reviews: Review[] = [
  {
    name: 'Maria K.',
    since: 'Student since 2023',
    stars: 5,
    text: "I tried three other teachers before Andrew. In six weeks with ChordLogic I finally understood chord progressions — not just where to put my fingers, but why it sounds the way it does.",
  },
  {
    name: 'Tom R.',
    since: 'Student since 2022',
    stars: 5,
    text: "The spaced repetition approach genuinely works. I used to forget things between lessons. Now they compound. It's night and day.",
  },
  {
    name: 'Priya S.',
    since: 'Student since 2024',
    stars: 5,
    text: "Andrew's method demystified music theory for me. I always thought it was dry and academic — turns out it's the most practical tool in a musician's kit.",
  },
  {
    name: 'James L.',
    since: 'Student since 2023',
    stars: 5,
    text: "Busy professional with 30 minutes a day. Andrew built a curriculum around that constraint and I've made more progress than I did in two years of traditional lessons.",
  },
  {
    name: 'Sonya M.',
    since: 'Student since 2024',
    stars: 5,
    text: "The ear training component changed everything. I can hear a song now and understand its structure immediately. That never happened before.",
  },
  {
    name: 'Chris B.',
    since: 'Student since 2022',
    stars: 5,
    text: "First lesson is free and it absolutely sold me. Andrew diagnosed my exact weaknesses in 45 minutes and laid out a clear path forward.",
  },
]

function Avatar({ review }: { review: Review }) {
  if (review.photo) {
    return <img src={review.photo} alt={review.name} className={styles.avatarImg} />
  }
  return (
    <div className={styles.avatarPlaceholder} aria-label={review.name}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="10" r="5.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.header}>
        <span className="tag">Student Reviews</span>
        <h2 className={`section-title ${styles.title}`}>
          Results that speak<br />
          <em>for themselves.</em>
        </h2>
        <div className="divider" style={{ marginTop: '1.5rem' }} />
      </div>

      <div className={styles.grid}>
        {reviews.map((r) => (
          <article key={r.name} className={styles.card}>
            <div className={styles.stars}>{'★'.repeat(r.stars)}</div>
            <p className={styles.text}>"{r.text}"</p>
            <footer className={styles.footer}>
              <Avatar review={r} />
              <div>
                <div className={styles.name}>{r.name}</div>
                <div className={styles.since}>{r.since}</div>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
