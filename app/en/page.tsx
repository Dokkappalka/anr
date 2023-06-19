import styles from './EnPage.module.scss'
import licImage from '../../assets/RosAudit20203.jpg'
import Image from 'next/image'
const enMainPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>About the group of companies</h2>
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; was founded in 1992.
        </p>
        <p className={styles.paragraph}>
          The group of companies &quot;Association &quot;Taxes of Russia&quot;
          includes the following organizations:
          <ul className={styles.outsideUl}>
            <li>
              JSC &quot;ANR&quot;
              <p className={styles.ulParagraph}>
                JSC &quot;ANR&quot; is a member of the non-profit partnership
                &quot;Community of Appraisers &quot;SMAO&quot; (NP
                &quot;SMAOs&quot;). Provides consulting and valuation services.
              </p>
            </li>
            <li>
              LLC &quot;Metaudit&quot;
              <p className={styles.ulParagraph}>
                OOO &quot;Metaudit&quot; (ORNZ 12006041466) is a member of the
                Self-Regulatory Organization of Auditors Association
                &quot;Sodruzhestvo&quot; (SRO AAS). Provides audit and related
                services.
              </p>
            </li>
            <li>
              LLC &quot;Legal Center &quot;Taxes and Arbitration&quot;
              <p className={styles.ulParagraph}>
                LLC &quot;Legal Center &quot;Taxes and Arbitration&quot;
                provides legal services, including representation of clients in
                courts and tax authorities.
              </p>
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          The level of work methods we offer, as well as the principles of our
          work, based on complete confidentiality regarding the client's
          activities, professionalism and responsibility for the results of our
          work, competence and valuable practical experience, determine the
          choice and trust of many who turn to us for help and advice.
        </p>
        <p className={styles.paragraph}>
          Based on the results of the ratings for 2022, the Tax Association of
          Russia group of companies is the largest audit and consulting group in
          the Ural region, providing audit, consulting, legal and valuation
          services.
        </p>
      </div>
    </div>
  )
}

export default enMainPage
