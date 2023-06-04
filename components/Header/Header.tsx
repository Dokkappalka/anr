import { Navigation } from '../Navigation/Navigation'
import TestSlider from '../TestSlider/TestSlider'
import styles from './Header.module.scss'
import Image from 'next/image'
import flagRU from '../../assets/russia.png'
import flagUK from '../../assets/united-kingdom.png'
import MenuButton from '../MenuButton/MenuButton'

const navItems = [
  { label: 'Услуги', href: '/services/audit' },
  { label: 'Сотрудники', href: '/sotrudniki' },
  { label: 'О компании', href: '/about' },
  { label: 'Клиенты', href: '/clients' },
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
  return (
    <>
      <div className={styles.headerPage}>
        <TestSlider news={allNews} />
      </div>
      <header className={styles.header}>
        <a className='font-semibold text-xl' href='/'>
          ANR.RU
        </a>
        <p className={styles.navList}>
          <Navigation navLinks={navItems} />
        </p>
        <p className={styles.buttons}>
          <button>
            <Image alt='RUS flag' src={flagRU} />
          </button>
          <button>
            <Image alt='UK flag' src={flagUK} />
          </button>
        </p>
        <MenuButton navItems={navItems} />
      </header>
    </>
  )
}

export default Header
