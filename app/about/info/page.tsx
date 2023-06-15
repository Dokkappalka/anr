import styles from './InfoPage.module.scss'

const InfoPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>Раскрытие информации ООО Метаудит</h2>
      <div className={styles.links}>
        <a href='/soutMetaudit.pdf' className={styles.link}>
          Отчет о проведении специальной оценки условий труда ООО
          &quot;Метаудит&quot;
        </a>
      </div>
    </div>
  )
}

export default InfoPage
