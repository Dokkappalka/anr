import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © 1999-2023 <a href='http://localhost:3000'>АО "АНР".</a> Все права
      защищены
    </footer>
  )
}

export default Footer
