import ServicePerson from '@/components/ServicePerson/ServicePerson'
import styles from '../EnPage.module.scss'
import { getCurrentPerson } from '@/services/getCurrentPerson'
const EnAuditPage = async () => {
  const nikitenkov = await getCurrentPerson('nikitenkov@anr.ru')
  return (
    <div className={styles.pageContainer}>
      <h2>Audit</h2>
      <ServicePerson
        isEn={true}
        name={nikitenkov[0].enName}
        image={nikitenkov[0].image}
        phone={nikitenkov[0].phone}
        work={nikitenkov[0].enWork}
      />
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          One of the main activities of the group of companies Association
          &quot;Taxes of Russia&quot; is the provision of audit services. We
          audit accounting (financial) reporting prepared in accordance with
          Russian Accounting Standards (RAS) and International Reporting
          Standards (IFRS).
        </p>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; has 30 years of experience in
          providing audit services and is one of the largest regional audit
          firms in Russia.
        </p>
        <p className={styles.paragraph}>
          LLC &quot;Metaudit&quot; (ORNZ 12006041466) is a member of the
          Self-Regulatory Organization of Auditors Association
          &quot;Sodruzhestvo&quot; (SRO AAS). Provides audit and related
          services.
        </p>
        <p className={styles.paragraph}>
          During its development, the Association &quot;Taxes of Russia&quot;
          has greatly expanded and brought to a new level range of audit
          services. We have the internal auditing standards that allow providing
          quality of audit services. LLC &quot;Metaudit&quot; is guided in its
          activities by a system of internal auditing standards, auditing
          standards, regulations governing auditing. LLC &quot;Metaudit&quot;
          has repeatedly been tested by external quality control of the audit
          services provided and compliance with professional ethics.
        </p>
        <p className={styles.paragraph}>
          Our approach to audit is focused on providing clients with
          comprehensive and objective information, enabling them to adequately
          assess their business and make justified decisions.
        </p>
        <p className={styles.paragraph}>
          One of the benefits of the Association is that during the audit, we
          pay great attention to the issues of taxation, which can significantly
          reduce the tax risks of the Customer.
        </p>
        <p className={styles.paragraph}>
          All the services are provided by the staff. The staff of the
          Association consists of about 30 people, include auditors, assistant
          of auditors. This allows us to be more demanding to the compliance of
          quality of services, as well as to issues of confidentiality.
        </p>
      </div>
    </div>
  )
}

export default EnAuditPage
