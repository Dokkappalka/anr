import { Navigation } from '../Navigation/Navigation'
import TestSlider from '../TestSlider/TestSlider'
import styles from './Header.module.scss'

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
        <p>
          <Navigation navLinks={navItems} />
        </p>
        <p className={styles.buttons}>
          <button>EN</button>
          <button>RU</button>
        </p>
      </header>
    </>
  )
}

export default Header
