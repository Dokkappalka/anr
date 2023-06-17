import Link from 'next/link'
import styles from './AboutPage.module.scss'
import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation/Navigation'

export const metadata: Metadata = {
  title: 'О компании',
}

const navButtons = [
  { label: 'О компании', href: '/about' },
  { label: 'Сотрудники', href: '/about/sotrudniki' },
  { label: 'Рейтинги и аккредитации', href: '/about/ratings' },
  { label: 'Раскрытие информации ООО Метаудит', href: '/about/info' },
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
