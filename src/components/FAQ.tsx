import { useState } from 'react'
import styles from './FAQ.module.scss'

const items = [
  {
    q: 'How are lessons hosted?',
    a: 'All lessons take place via Discord video call. You\'ll need a free Discord account and a stable internet connection. I\'ll send you a server invite before your first session.',
  },
  {
    q: 'What do I need to get started?',
    a: 'A piano or keyboard with at least 61 keys, a Discord account, and a device with a camera and microphone. No prior music reading experience is required.',
  },
  {
    q: 'Do I need any prior experience?',
    a: 'None at all. I teach complete beginners through to advanced players. The free first lesson exists precisely to assess where you are and build a plan from there.',
  },
  {
    q: 'How long is each lesson?',
    a: 'Each session is 45 minutes. That\'s long enough to cover new material and review, but short enough to stay focused — in line with cognitive science recommendations on deliberate practice.',
  },
  {
    q: 'How often should I take lessons?',
    a: 'Once a week is the most effective cadence for most students. It gives enough time to practice between sessions while keeping the spaced-repetition cycle intact.',
  },
  {
    q: 'What\'s the cancellation policy?',
    a: 'You can cancel or reschedule any lesson up to 24 hours in advance at no charge. Life happens — no questions asked.',
  },
  {
    q: 'What makes ChordLogic different from other piano teachers?',
    a: 'Most methods teach you what to play. ChordLogic teaches you why it works — using music theory, ear training, and spaced repetition together. Students build genuine musical understanding, not just learned fingering patterns.',
  },
  {
    q: 'Is the first lesson really free?',
    a: 'Yes, completely. The first 45-minute session is a diagnostic lesson at no cost. I\'ll identify your exact weaknesses and outline a personalised learning roadmap — whether or not you continue.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i))

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.header}>
        <span className="tag">FAQ</span>
        <h2 className={`section-title ${styles.title}`}>
          Common questions,<br />
          <em>honest answers.</em>
        </h2>
        <div className="divider" style={{ marginTop: '1.5rem' }} />
      </div>

      <ul className={styles.list}>
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <li key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
              <button
                type="button"
                className={styles.trigger}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span className={styles.question}>{item.q}</span>
                <span className={styles.icon} aria-hidden>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                  >
                    <line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div
                className={styles.body}
                style={{ maxHeight: isOpen ? '300px' : '0' }}
              >
                <p className={styles.answer}>{item.a}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
