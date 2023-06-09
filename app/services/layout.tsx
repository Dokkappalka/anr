import Link from 'next/link'
import styles from './servicesPage.module.scss'
import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation/Navigation'

const navButtons = [
  { label: 'Аудит', href: '/services/audit' },
  { label: 'Консалтинговые услуги', href: '/services/consulting' },
  { label: 'Арбитраж', href: '/services/arbitration' },
  { label: 'Оценка', href: '/services/evaluation' },
  { label: 'Семинары', href: '/services/seminars' },
]

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.navContainer}>
        <Navigation navLinks={navButtons} isDark={true} />
      </div>
      {children}
    </div>
  )
}
