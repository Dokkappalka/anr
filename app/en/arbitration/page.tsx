import ServicePerson from '@/components/ServicePerson/ServicePerson'
import styles from '../EnPage.module.scss'
import { getCurrentPerson } from '@/services/getCurrentPerson'
const EnArbitrationPage = async () => {
  const vakulina = await getCurrentPerson('vakulina@anr.ru')
  return (
    <div className={styles.pageContainer}>
      <h2>Arbitration</h2>
      <ServicePerson
        isEn={true}
        name={vakulina[0].enName}
        image={vakulina[0].image}
        phone={vakulina[0].phone}
        work={vakulina[0].enWork}
      />
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; has many years of experience
          in representing clients in regulatory bodies and courts in tax and
          civil disputes.
        </p>
        <p className={styles.paragraph}>
          Experienced and highly qualified lawyers Association hold a number of
          ways to resolve disputes, which guarantees the quality and protection
          of client&apos;s interests.
        </p>
        <p className={styles.paragraph}>
          The Association has a wealth of experience in representing companies
          in the courts of most of the Russian Federation, and also represents
          clients in the Supreme Arbitration Court of the Russian Federation,
          the Russian Supreme Court and the Constitutional Court of the Russian
          Federation.
        </p>
        <p className={styles.paragraph}>
          Traditionally, the main type of litigation in which the Association
          defends the interests of its clients are disputes with tax
          authorities. For example, representing the interests of the client in
          the Supreme Arbitration Court of Russia representatives of the
          Association &quot;Taxes of Russia&quot; have shown that the list of
          expenses set out in Article 265 of the Tax Code is not exhaustive
          (Decree of the Presidium of the Supreme Arbitration Court of the
          Russian Federation № 9167/10 from 30.11 .2010)
        </p>
        <p className={styles.paragraph}>
          Necessary training and extensive practical experience in the courts
          allow lawyers Association expectations of its customers and influence
          decisions, even some in bad cases, such as when the practice of
          arbitration courts, including the RF, is not in favour of the
          taxpayer.
        </p>
        <p className={styles.paragraph}>
          Thus, the findings contained in the definition of the Constitutional
          Court from 08.06.2004. № 229-O on May 16, 2007 N 420-OO taken on
          complaints by trained specialists Association, served as a basis for
          reviewing the cases, the decisions of the courts which have been
          handed down to the detriment of taxpayers, with the adoption of new
          legal acts for the benefit of our customers.
        </p>
        <p className={styles.paragraph}>
          Representing clients in disputes with tax authorities include the
          following services: preparation of objections to an inspection by the
          tax authorities, appeal to a higher tax authority and representation
          in all instances.
        </p>
        <p className={styles.paragraph}>
          The provision of these services in the complex allows lawyers to the
          Association to be aware of all the nuances of the case and dynamically
          respond to changing situations, which is a prerequisite for the
          successful solution of the litigation.
        </p>
        <p className={styles.paragraph}>
          Along with representation in tax disputes, lawyers associations
          provide services in representing clients in civil disputes arising
          from any of the types of transactions, as in the pre-trial settlement
          (preparation of claims, negotiations with the opponent, etc.) as well
          as directly in court.
        </p>
        <p className={styles.paragraph}>
          For 20 years, the Association has helped its customers save hundreds
          of billions of roubles, and that is important - goodwill, which is the
          best proof of the quality of our services.
        </p>
      </div>
    </div>
  )
}

export default EnArbitrationPage
