import styles from './LicensesPage.module.scss'
import License from '@/components/License/License'
import { getAllLicenses } from '@/services/getAllLicenses'

interface ILicenses {
  img: any
  description: string
}

const LicensesPage = async () => {
  // const allLicenses: ILicenses[] = await getAllLicenses()
  return (
    <div className={styles.pageContainer}>
      {/* <h2>Лицензии и свидетельства</h2>
      <div className={styles.licensesContainer}>
        {allLicenses.map((license, i) => {
          return <License {...license} key={i} />
        })}
      </div> */}
    </div>
  )
}

export default LicensesPage
