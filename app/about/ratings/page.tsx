import styles from './LicensesPage.module.scss'
import License from '@/components/License/License'
import { getCurrentLicense } from '@/services/getCurrentLicense'

interface ILicenses {
  img: any
  description: string
}

const LicensesPage = async () => {
  const elevenLicense = await getCurrentLicense(17)
  return (
    <div className={styles.pageContainer}>
      <h2>Рейтинги и аккредитации</h2>

      <License {...elevenLicense[0]} />
    </div>
  )
}

export default LicensesPage
