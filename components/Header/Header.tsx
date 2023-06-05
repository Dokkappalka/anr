'use client'

import { Navigation } from '../Navigation/Navigation'
import TestSlider from '../TestSlider/TestSlider'
import styles from './Header.module.scss'
import Image from 'next/image'
import flagRU from '../../assets/russia.png'
import flagUK from '../../assets/united-kingdom.png'
import MenuButton from '../MenuButton/MenuButton'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
  { label: 'Услуги', href: '/services/audit' },
  { label: 'Сотрудники', href: '/sotrudniki' },
  { label: 'О компании', href: '/about' },
  { label: 'Клиенты', href: '/clients' },
]

const enNavItems = [
  { label: 'Audit', href: '/en/audit' },
  { label: 'Consulting services', href: '/en/consulting' },
  { label: 'Arbitration', href: '/en/arbitration' },
  { label: 'Valuation', href: '/en/evaluation' },
  { label: 'Seminars', href: '/en/seminars' },
]

interface INew {
  id: number
  title: string
  text: string
}

interface Props {
  allNews: INew[]
}
const Header = ({ allNews }: Props) => {
  const pathname = usePathname().split('/')
  const isEn = pathname.includes('en')
  return (
    <>
      <div className={styles.headerPage}>
        <TestSlider news={isEn ? [] : allNews} />
      </div>
      <header className={styles.header}>
        <a className='font-semibold text-xl' href={isEn ? '/en' : '/'}>
          ANR.RU
        </a>
        <p className={styles.navList}>
          <Navigation navLinks={isEn ? enNavItems : navItems} />
        </p>
        <p className={styles.links}>
          <Link href='/'>
            <Image alt='RUS flag' src={flagRU} />
          </Link>
          <Link href='/en'>
            <Image alt='UK flag' src={flagUK} />
          </Link>
        </p>
        <MenuButton navItems={isEn ? enNavItems : navItems} />
      </header>
    </>
  )
}

export default Header
