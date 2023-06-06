import ServicePerson from '@/components/ServicePerson/ServicePerson'
import styles from '../EnPage.module.scss'
import { getCurrentPerson } from '@/services/getCurrentPerson'
const EnConsultingPage = async () => {
  const vakulina = await getCurrentPerson('vakulina@anr.ru')
  return (
    <div className={styles.pageContainer}>
      <h2>Consulting services</h2>
      <ServicePerson
        isEn={true}
        name={vakulina[0].enName}
        image={vakulina[0].image}
        phone={vakulina[0].phone}
        work={vakulina[0].enWork}
      />
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; provides consulting services
          that contribute to the full development and protection of
          clients&apos; businesses. Timely treatment to counselling allows the
          company time to identify potential problems and prevent possible
          negative consequences.
        </p>
        <p className={styles.paragraph}>
          Practice shows that appeal to a counsellor for development solutions
          before the key problems is the most effective in terms of costs for
          the services of the client, and from the point of view of preventing
          the negative effects.
        </p>
        <p className={styles.paragraph}>
          Specialists of Association &quot;Taxes of Russia&quot; have
          comprehensive knowledge in tax law and accounting, and in civil law,
          as well as extensive experience of doing business in the courts. It is
          knowledge provides high quality services and takes into account all
          the nuances of the law. Only a comprehensive approach to the concluded
          transaction can significantly reduce the risk of claims by the tax
          authorities.
        </p>
        <p className={styles.paragraph}>
          Comprehensive knowledge of experts from the Association in various
          areas of law and enterprises in various sectors of the economy
          minimize the risks of financial loss when business acquisition.
        </p>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; recommends to turn to its
          experts during of review by tax authorities to prevent the risks of
          additional taxes, interest and penalties by the tax authorities as a
          result of a review by tax authorities. Timely detection of problems
          and well-written objection to the decision of the tax authority, it is
          often an opportunity to avoid litigation.
        </p>
        <p className={styles.paragraph}>
          Comprehensive protection of the client&apos;s business is a priority
          in the provision of consulting services to the Association &quot;Taxes
          of Russia.&quot;
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Tax Consulting</h2>
        <p className={styles.paragraph}>
          The Association provides services consulting with a monthly
          subscription fee and one-time consultation.
        </p>
        <p className={styles.paragraph}>
          In providing advice to the specialists of the Association performed an
          analysis of alternative views, the existing jurisprudence and the
          legal position of the fiscal authorities.
        </p>
        <p className={styles.paragraph}>
          Consultations provide specialists with decades of experience,
          including in disputes with tax authorities.
        </p>
        <p className={styles.paragraph}>
          Under the tax counseling Association &quot;Taxes of Russia&quot;
          provides the following services:
          <ul className={styles.outsideUl}>
            <li>
              interpretation of tax legislation on issues that arise in the
              enterprise;
            </li>
            <li>
              operational development strategies and customer support in unusual
              and crisis situations to avoid or minimize risks and losses;
            </li>
            <li>
              development of accounting policy on accounting and fiscal
              accounting;
            </li>
            <li>development and formulation of tax accounting;</li>
            <li>
              assessment of tax risks when making business transactions and
              contracts.
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Maintenance inspection by the tax authorities</h2>
        <p className={styles.paragraph}>
          As show the long-standing practice of the Association &quot;Taxes of
          Russia&quot;, many claims by tax authorities can be eliminated during
          inspection by the tax authorities.
        </p>
        <p className={styles.paragraph}>
          Large number of claims is due to improper processing of primary
          documents. Employees of the Association in the context of this service
          will help to correct such errors at the stage of the inspection by the
          tax authorities, which will help the company to avoid the lengthy
          process of challenging the inspection.
        </p>
        <p className={styles.paragraph}>
          Employees Association will make reasoned arguments with reference to
          case law and clarify the Ministry of Finance and the Federal Tax
          Service of the Russian Federation have similar issues of concern that
          may convince inspectors not to include an inspection report
          controversial issues.
        </p>
        <p className={styles.paragraph}>
          Involvement of experts of Association &quot;Taxes of Russia&quot; for
          this service allows you to save a lot of resources of the enterprise,
          so the cost is usually much lower than the amount imposed by the tax
          authorities of claims and the cost of services for representation in
          court to challenge the act of the tax authority.
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Due Diligence</h2>
        <p className={styles.paragraph}>
          Due Diligence - support of the process of a business, other investment
          projects.
        </p>
        <p className={styles.paragraph}>
          Tax Due Diligence - tax analysis of the acquiree can identify tax
          risks that may arise after the purchase.
        </p>
        <p className={styles.paragraph}>
          Legal Due Diligence - legal review of the activities of the acquiree,
          check for rights to assets
        </p>
        <p className={styles.paragraph}>
          Results of Due Diligence will allow investors to get full information
          about the acquired business and other planned investments, assess the
          risks that may arise after the acquisition, respectively, to make an
          informed decision on the feasibility of the transaction and determine
          its real price.
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Insolvency (bankruptcy) of the company</h2>
        <p className={styles.paragraph}>
          The Association provides services in support of the procedure of
          bankruptcy, which is in a financial crisis is a useful way of
          improvement and restructuring of debts of the enterprise.
        </p>
        <p className={styles.paragraph}>
          This service may include:
          <ul className={styles.outsideUl}>
            <li>analysis of the availability of the bankruptcy;</li>
            <li>
              Review of legal compliance of transactions concluded in the
              presence of the bankruptcy (suspicious transactions);
            </li>
            <li>
              Analysis of financial and economic activity of the enterprise and
              causes signs of insolvency (bankruptcy) of the company;
            </li>
            <li>
              make recommendations for action to improve the financial
              performance of the business;
            </li>
            <li>
              Develop a plan of bankruptcy and its methods of implementation;
            </li>
            <li>Preparing applications for a bankruptcy;</li>
            <li>representation in the court of the bankruptcy;</li>
            <li>
              preparing the necessary documents for transactions on the sale of
              property of the debtor;
            </li>
            <li>Organization of the meeting of creditors.</li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Legal services</h2>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; provides a full range of legal
          services, including:
          <ul className={styles.outsideUl}>
            <li>
              written and oral advice on civil, administrative, and other
              branches of law arising in the enterprises;{' '}
            </li>
            <li>
              preparation and examination of contracts and other legal
              documents;
            </li>
            <li>
              pre-trial settlement of disputes, including the preparation of
              claims, negotiations with contractors;
            </li>
            <li>Legal support of transactions and business processes.</li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Tax Expertise</h2>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; examines:
          <ul className={styles.outsideUl}>
            <li>acts of tax and other regulatory bodies;</li>
            <li>contracts and other documents;</li>
            <li>individual business transactions.</li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          This service is included at no extra cost in the contract maintenance
          inspection by the tax authorities and representation in court on tax
          disputes.
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Tax Planning</h2>
        <p className={styles.paragraph}>
          The main goal of tax planning is to reduce the tax burden by legal
          methods.
        </p>
        <p className={styles.paragraph}>
          In the implementation of tax planning takes into account the case law
          produced by the build system of business processes, combining the best
          ways to manage and takes into account their tax implications.
        </p>
        <p className={styles.paragraph}>
          Competence and experience of experts of the &quot;Association&quot;
          Taxes of Russia &quot;in the area of tax planning can increase the
          profitability of the company and to minimize tax risks. Tax planning
          is important not only in the design of business processes, but also to
          conclude contracts with counterparties.
        </p>
      </div>
    </div>
  )
}

export default EnConsultingPage
