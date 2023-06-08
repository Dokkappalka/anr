import styles from './EnPage.module.scss'
import licImage from '../../assets/RosAudit20203.jpg'
import Image from 'next/image'
const enMainPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>About the group of companies</h2>
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; is created in 1992.
        </p>
        <p className={styles.paragraph}>
          The group of companies &quot;Association &quot;Taxes of Russia&quot;
          includes the following organizations:
          <ul className={styles.outsideUl}>
            <li>JSC &quot;ANR&quot;</li>
            <li>LLC &quot;Metaudit&quot;</li>
            <li>LLC &quot;Legal Center &quot;Taxes and Arbitration&quot;</li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          During the development due to high quality of services and their
          operative granting to clients the Association became the leader among
          the auditor companies of the Ural region which purpose - to promote
          development of business and an increment of success of Clients.
        </p>
        <p className={styles.paragraph}>
          We aspire to complex development and protection of business of our
          clients, therefore the basic directions of our activity are audit of
          annual reports of the Russian and foreign clients, tax consulting,
          legal services, valuation services, protection of clients in court and
          state agencies.
        </p>
        <p className={styles.paragraph}>
          LLC &quot;Metaudit&quot; (ORNZ 12006041466) is a member of the
          Self-Regulatory Organization of Auditors Association
          &quot;Sodruzhestvo&quot; (SRO AAS). Provides audit and related
          services.
        </p>
        <p className={styles.paragraph}>
          JSC &quot;ANR&quot; is a member of the non-profit partnership
          &quot;Community of Appraisers &quot;SMAO&quot; (NP &quot;SMAOs&quot;).
          Provides consulting (appraisal) services.
        </p>
        <p className={styles.paragraph}>
          LLC &quot;Legal Center &quot;Taxes and Arbitration&quot;, provides
          legal services, including representation of clients in courts.
        </p>
        <p className={styles.paragraph}>
          Ability of the company&apos;s to look ahead allows it to master new
          technologies successfully. The level of techniques of work suggested
          by us, and also the principles of our work based on observance of full
          confidentiality concerning activity of the client, professionalism and
          the responsibility for results of the work, competence and valuable
          practical experience, define a choice and trust of many who addresses
          to us for the help and advice.
        </p>
        <p className={styles.paragraph}>
          The rating for 2021 the group of companies &quot;Association
          &quot;Taxes of Russia&quot; is the largest audit and consulting group
          of the Ural region, providing audit, consulting, legal and valuation
          services
        </p>
        <p className={styles.paragraph}>
          (
          <a
            target='_blank'
            href='https://raex-rr.com/b2b/audit/biggest_audit_groups/2022/'
          >
            Rating of audit companies and groups
          </a>
          ,{' '}
          <a
            target='_blank'
            href='https://raex-rr.com/b2b/audit/law_consulting_rating/2022/'
          >
            Rating of largest audit groups
          </a>
          )
        </p>
        <div className='flex justify-center'>
          <Image src={licImage} alt='certificate' className='w-[450px]' />
        </div>
      </div>
    </div>
  )
}

export default enMainPage
