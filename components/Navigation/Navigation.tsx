'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.scss'

interface NavLink {
  label: string
  href: string
}

interface Props {
  navLinks: NavLink[]
  isDark: boolean
}

const Navigation = ({ navLinks, isDark }: Props) => {
  const pathname = usePathname()
  const colors = {
    link: isDark
      ? 'text-black hover:text-sky-600'
      : 'text-slate-100 hover:text-slate-400',
    linkActive: isDark ? 'text-sky-800' : 'text-blue-400',
  }
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.label}
            href={link.href}
            className={
              isActive
                ? styles.linkActive + ' ' + colors.linkActive
                : styles.link + ' ' + colors.link
            }
          >
            {link.label}
          </Link>
        )
      })}
    </>
  )
}

export { Navigation }
