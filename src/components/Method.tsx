import styles from './Method.module.scss'

const pillars = [
  {
    num: '01',
    title: 'Music Theory First',
    body: 'Every technique is explained through the lens of music theory. You understand why a chord works before you play it — so it sticks.',
  },
  {
    num: '02',
    title: 'Spaced Repetition',
    body: 'Lessons are structured around proven cognitive science: concepts are revisited at optimal intervals to cement long-term memory.',
  },
  {
    num: '03',
    title: 'Deliberate Practice',
    body: 'No mindless repetition. Each practice session targets specific weaknesses with focused micro-exercises built just for you.',
  },
  {
    num: '04',
    title: 'Ear Training Integrated',
    body: 'Your ears and hands develop together. Interval recognition, chord quality, and melodic dictation are woven into every lesson.',
  },
]

export default function Method() {
  return (
    <section id="method" className={styles.section}>
      <div className={styles.header}>
        <span className="tag">The ChordLogic Method</span>
        <h2 className={`section-title ${styles.title}`}>
          Piano teaching built on<br />
          <em>how the brain actually works.</em>
        </h2>
        <p className="section-sub">
          Most piano methods are 200 years old. I rebuilt the curriculum
          from scratch using cognitive science research, so my students progress
          2–3× faster with less frustration.
        </p>
        <div className="divider" style={{ marginTop: '2rem' }} />
      </div>

      <div className={styles.grid}>
        {pillars.map((p) => (
          <div key={p.num} className={styles.card}>
            <span className={styles.num}>{p.num}</span>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardBody}>{p.body}</p>
          </div>
        ))}
      </div>

      <div className={styles.banner}>
        <div className={styles.bannerLines}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className={styles.staffLine} />
          ))}
        </div>
        <blockquote className={styles.quote}>
          "Learn the rules like a pro so you can break them like a virtuoso."
          <cite>— Andrew Varnavsky</cite>
        </blockquote>
      </div>
    </section>
  )
}
