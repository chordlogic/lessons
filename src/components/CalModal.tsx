import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Cal, { getCalApi } from '@calcom/embed-react'
import type { Theme } from '../types'
import styles from './CalModal.module.scss'

interface CalModalProps {
  open: boolean
  onClose: () => void
  theme: Theme
}

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function CalModal({ open, onClose, theme }: CalModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (open) {
      setVisible(true)
      setClosing(false)
    }
  }, [open])

  useEffect(() => {
    if (!open && visible && !closing) {
      setClosing(true)
    }
  }, [open, visible, closing])

  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (closing && e.target === e.currentTarget) {
      setVisible(false)
      setClosing(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: 'chordlogic-lesson' })
      cal('ui', {
        theme: theme,
        hideEventTypeDetails: true,
        layout: 'month_view',
        styles: { branding: { brandColor: '#c9a84c' } },
      })
    })()
  }, [theme])

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    if (!panel) return

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusable = panel.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    const firstFocusable = panel.querySelector<HTMLElement>(FOCUSABLE)
    firstFocusable?.focus()

    panel.addEventListener('keydown', handleTab)
    return () => panel.removeEventListener('keydown', handleTab)
  }, [open])

  if (!visible) return null

  return createPortal(
    <div
      className={`${styles.overlay} ${closing ? styles.closing : ''}`}
      onClick={closing ? undefined : onClose}
      onAnimationEnd={handleAnimationEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Book a lesson"
    >
      <div className={styles.panel} ref={panelRef} onClick={e => e.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close booking">
          ✕
        </button>
        <div className={styles.calWrap}>
          <Cal
            key={theme}
            namespace="chordlogic-lesson"
            calLink="chordlogic/piano-lesson"
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{ layout: 'month_view', theme: theme }}
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
