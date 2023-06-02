import { Navigation } from '../Navigation/Navigation'
import TestSlider from '../TestSlider/TestSlider'
import styles from './Header.module.scss'
import menu from '../../assets/menu.svg'
import Image from 'next/image'
const navItems = [
  { label: 'Услуги', href: '/qwe' },
  { label: 'Сотрудники', href: '/sotrudniki' },
  { label: 'О компании', href: '/about' },
  { label: 'Клиенты', href: '/clients' },
]

const Header = () => {
  return (
    <>
      <div className={styles.headerPage}>
        <TestSlider />
      </div>
      <header className={styles.header}>
        <a className='font-semibold text-xl' href='/'>
          ANR.RU
        </a>
        <p className={styles.navList}>
          <Navigation navLinks={navItems} />
        </p>
        <p className={styles.buttons}>
          <button>EN</button>
          <button>RU</button>
        </p>
        <button className={styles.menuButton}>
          <Image alt='Menu button' src={menu} />
        </button>
      </header>
    </>
  )
}

export default Header
