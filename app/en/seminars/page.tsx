import ServicePerson from '@/components/ServicePerson/ServicePerson'
import styles from '../EnPage.module.scss'
import { getCurrentPerson } from '@/services/getCurrentPerson'

const EnSeminarsPage = async () => {
  const vakulina = await getCurrentPerson('vakulina@anr.ru')
  return (
    <div className={styles.pageContainer}>
      <h2>Seminars</h2>
      <ServicePerson
        isEn={true}
        name={vakulina[0].enName}
        image={vakulina[0].image}
        phone={vakulina[0].phone}
        work={vakulina[0].enWork}
      />
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; holds regular seminars on
          taxation and accounting. Seminars are held on topics agreed with the
          customer. In drawing up the program of the workshop included the
          wishes of the customer, and the techniques developed in the
          Association &quot;Taxes of Russia.&quot;
        </p>
        <p className={styles.paragraph}>
          The seminar program is tailored to the 25-year experience of
          conducting audits and private arbitration practice.
        </p>
        <p className={styles.paragraph}>
          Seminars held by the Director General Igor Teushchakov, Deputy
          Director General Anton Nikitenkov, head of the consulting department
          Elena Vakulina, with extensive experience in audit, tax, consulting,
          and disputes with the tax authorities in arbitration courts and the
          Constitutional Court of the Russian Federation.
        </p>
        <p className={styles.paragraph}>
          As agreed with the customer for the workshop can be involved leading
          experts tax authorities.
        </p>
        <p className={styles.paragraph}>
          Seminars are held at a convenient time for the customer.
        </p>
      </div>
    </div>
  )
}

export default EnSeminarsPage
