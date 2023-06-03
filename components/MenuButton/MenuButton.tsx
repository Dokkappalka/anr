'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './MenuButton.module.scss'
import menu from '../../assets/menu.svg'
import Image from 'next/image'
import { Navigation } from '../Navigation/Navigation'
import flagRU from '../../assets/russia.png'
import flagUK from '../../assets/united-kingdom.png'

interface INavItems {
  href: string
  label: string
}

interface Props {
  navItems: INavItems[]
}

const MenuButton = ({ navItems }: Props) => {
  const [hidden, setHidden] = useState<boolean>(true)
  const menuListRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const onClick = (e: any) =>
      menuListRef.current &&
      (menuListRef.current.contains(e.target) || setHidden(true))
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return (
    <>
      <button
        className={styles.menuButton}
        onClick={() => {
          setHidden((prev) => !prev)
        }}
        ref={menuListRef}
      >
        <Image alt='Menu button' src={menu} />
      </button>
      <div className={hidden ? styles.hide : styles.navList}>
        {hidden ? (
          ''
        ) : (
          <>
            <Navigation navLinks={navItems} />
            <p className={styles.buttons}>
              <button>
                <Image alt='RUS flag' src={flagRU} />
              </button>
              <button>
                <Image alt='UK flag' src={flagUK} />
              </button>
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default MenuButton
