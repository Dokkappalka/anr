import ServicePerson from '@/components/ServicePerson/ServicePerson'
import styles from '../EnPage.module.scss'
import { getCurrentPerson } from '@/services/getCurrentPerson'

const EnValuationPage = async () => {
  const bahtin = await getCurrentPerson('bahtin@anr.ru')
  return (
    <div className={styles.pageContainer}>
      <h2>Valuation</h2>
      <ServicePerson
        isEn={true}
        name={bahtin[0].enName}
        image={bahtin[0].image}
        phone={bahtin[0].phone}
        work={bahtin[0].enWork}
      />
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Estimated division of the Association &quot;Taxes of Russia&quot;
          provides professional services to assess all types of property for
          more than 20 years.
        </p>
        <p className={styles.paragraph}>
          During this time, our experts made more than 3,000 prisoners of cost,
          geography of works covers almost the whole of Russia, and our loyal
          customers are a wide variety of business areas, from retail and food
          manufacturing to heavy industry and mining.
        </p>
        <p className={styles.paragraph}>
          Compliance with the requirements of good time, strict adherence to the
          client&apos;s interests, professional and highly qualified employees,
          the continuous improvement of their professional knowledge and skills,
          the use of innovative technologies - all this makes our company so
          long to be among the market leaders in the Ural region.
        </p>
        <p className={styles.paragraph}>
          The leading position of the Association &quot;Taxes of Russia&quot; in
          the market valuation services supported by highly ranked appraisal
          companies compiled by the rating agency &quot;Expert RA&quot; (in
          2017, the company ranks among the 100 largest appraisal companies of
          Russia), the magazine &quot;Expert-Ural&quot;.
        </p>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; accredited and successful
          cooperation with such major banks as &quot;Bank Otkritie Financial
          Corporation&quot;, ROSSIYSKY CAPITAL, VTB.
        </p>
        <p className={styles.paragraph}>
          Today, our company can offer you the following services to property
          valuation:
          <ul className={styles.outsideUl}>
            <li>Business Valuation</li>
            <li>Evaluation of commercial and residential real estate</li>
            <li>Assessment of equipment and capital assets</li>
            <li>Assessment of other property</li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          The company is open for partners interested in evaluating in
          Yekaterinburg, Sverdlovsk region and other regions of Russia. Our
          specialists will fulfil orders of any complexity in the shortest
          possible time.
        </p>
        <p className={styles.paragraph}>
          Our appraisers are members of the largest self-regulatory
          organizations of appraisers Russia: Non-Profit Partnership &quot;The
          community of Appraisers&quot; (NP &quot;SMAO&quot;) and&quot; Russian
          Society of Appraisers&apos; (NP ROO). All of them are insured under
          the compulsory insurance valuation of not less than 2.5 million
          roubles.
        </p>
        <p className={styles.paragraph}>
          Our appraisers are qualified &quot;expert business valuation&quot; and
          the advisory council composed of NP &quot;SMAO&quot; The solution of
          problems of any evaluation of further provided the opportunity to
          engage the experts in the field of law, accounting, tax, and
          management consulting.
        </p>
        <p className={styles.paragraph}>
          In case of any unexpected risks and professional responsibility of the
          Association &quot;Taxes of Russia&quot; is insured for 30 million
          (thirty million).
        </p>
        <p className={styles.paragraph}>
          We value our reputation and guarantee to our clients with quality and
          accurate assessment. For any questions, you cannot just call our team,
          but also to come to our office to discuss the details of assessment,
          conditions and terms of payment and other issues.
        </p>
        <p className={styles.paragraph}>
          We wish you every success and look forward to a long and productive
          relationship.
        </p>
        <p className={styles.paragraph}>
          To place an order on our website to drive to our office.
        </p>
        <h3>Business Valuation</h3>
        <p className={styles.paragraph}>
          Business Valuation (enterprises) - the definition of enterprise value
          on a particular date.
        </p>
        <p className={styles.paragraph}>
          Valuation of business is carried out for the following purposes:
          <ul className={styles.outsideUl}>
            <li>The sale of the enterprise (business);</li>
            <li>The sale of the assets of the enterprise (business);</li>
            <li>
              reorganization (merger, demerger, merger, etc.) and closing a
              business, carried out by the decision of its owners, and by the
              decision of the arbitral tribunal in case of bankruptcy of the
              enterprise;
            </li>
            <li>
              purchase and sale of the shares on the stock market with limited
              or no market; (buying the company or part of it, are in stock
              ownership);
            </li>
            <li>
              Purchase and sale of shares (deposit) in the share capital of the
              partnership or limited liability company (the proportion is
              estimated in monetary units);
            </li>
            <li>a loan secured by the property business (mortgage);</li>
            <li>revaluation of fixed assets;</li>
            <li>When redemption of shares at the request of shareholders;</li>
            <li>the resolution of property disputes;</li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          Valuation of business is usually carried out using three approaches:
          cost, comparative and income.
        </p>
        <p className={styles.paragraph}>
          The cost approach to valuing a business considers the cost of the
          enterprise in terms of costs to create it. Assets and liabilities of
          the company, as reflected in the balance sheet as a result of
          inflation, changing market conditions and used accounting methods, not
          generally corresponds to the market value and needs to be corrected.
          For its implementation appraiser assesses the market value of each
          asset and liability. Then, by subtracting from the sum of the total
          assets of the liability is determined by the value of the company.
        </p>
        <p className={styles.paragraph}>
          The comparative approach is based on a comparison of the main
          indicators of the characteristics of its analogues, which are known to
          the price and terms of the sale of shares or interests of business. By
          comparing the conclusion of the probable value of the company.
        </p>
        <p className={styles.paragraph}>
          The income approach considers the value of the business in terms of
          revenue, which will bring the company to its owners in the future.
          Expected income stream by certain rules given to the current point in
          time. When it was built based on current economic situation in the
          country and the world, industry specific, notably business, plans and
          prospects of the company.
        </p>
        <p className={styles.paragraph}>
          With our system you will receive a full detailed study, designed in
          the form of the evaluation report, in full compliance with the
          applicable legislation.
        </p>
        <p className={styles.paragraph}>
          To assess the business you will need to provide the following
          information:
          <ul className={styles.outsideUl}>
            <li>Copies of constituent documents of the company.</li>
            <li>
              Copies of prospectuses, reports on the issue of securities (for
              public companies).
            </li>
            <li>
              A list of activities of the enterprise and a description of its
              organizational structure.
            </li>
            <li>
              Copies of records and documents of title to all property belonging
              to the company, as well as the documents establishing the physical
              characteristics of real estate (technical and cadastral
              certificates, explication, plans, etc.);
            </li>
            <li>Copies of the lease contracts (employment) in real estate.</li>
            <li>Copies of the financial statements for the last 3-5 years;</li>
            <li>The auditor&apos;s report (if the audit is conducted.)</li>
            <li>Statement of fixed assets.</li>
            <li>Inventory property listings.</li>
            <li>
              Details of all the company&apos;s assets (real estate, stocks,
              shares of third-party companies, bills, intangible assets, etc.).
            </li>
            <li>
              Details of all the company&apos;s commitment (loans, loans, etc.).
            </li>
            <li>Explanation of accounts payable.</li>
            <li>Explanation of receivables:</li>
            <li>
              Information on subsidiaries, holding companies (if any), financial
              records on them.
            </li>
            <li>
              Plan for development of the company over the next 3-5 years, with
              an indication of the proposed gross receipts for goods / services,
              the necessary investment, expenses, net profit - by year.
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          This list is a preliminary document and may be reduced or expanded
          after detailed examination of the appraiser with the business and
          objectives of the evaluation.
        </p>
        <p className={styles.paragraph}>
          Term evaluation of business is usually 2-3 weeks and can vary
          according to the specific working conditions and characteristics of
          the company being valued.
        </p>
        <p className={styles.paragraph}>
          Cost depends on the purpose of evaluation and the estimated size of
          the company.
        </p>
        <p className={styles.paragraph}>
          Specific terms of the assessment determined through negotiations,
          after a preliminary to the financial and economic indicators of the
          business.
        </p>
        <p className={styles.paragraph}>
          To assess the real estate you need to:
          <ul className={styles.outsideUl}>
            <li>
              Contact our specialist and gave him basic information regarding
              the estimated enterprise, goal and purpose of evaluation;
            </li>
            <li>
              Agree with the specialist terms and conditions of the assessment;
            </li>
            <li>To conclude the contract;</li>
            <li>
              Prepare all necessary documents to evaluate and give them to us;
            </li>
            <li>
              Meet and accompany our expert to inspect the object (exit is at
              our expense on our transport);
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          After that, we evaluate your property and hand you a finished report.
        </p>
        <h3>Valuation of equipment and capital assets</h3>
        <p className={styles.paragraph}>
          Machinery and equipment valuation involves determining the value of
          any personal property of the object: machinery, equipment, vehicles,
          industrial facilities and production lines, power units, office
          equipment, furniture, household items and other objects.
        </p>
        <p className={styles.paragraph}>
          Assessment of machinery and equipment are usually carried out for the
          following purposes:
          <ul className={styles.outsideUl}>
            <li>revaluation of assets of the company;</li>
            <li>for transactions;</li>
            <li>the transfer in the lease;</li>
            <li>the determination of property shares;</li>
            <li>the merger, division, liquidation of the company;</li>
            <li>If foreclosure on the property;</li>
            <li>to determine the value of a property system;</li>
            <li>
              to determine the collateral value of machinery and equipment;
            </li>
            <li>
              to determine the insurance value of machinery and equipment;
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          With our system you will receive a full detailed study, designed in
          the form of the evaluation report, in full compliance with the
          applicable legislation.
        </p>
        <p className={styles.paragraph}>
          To assess the machines and equipment you will need to provide the
          following information:
          <ul className={styles.outsideUl}>
            <li>Full name of the object: the make, model, series.</li>
            <li>The Company (company) - the manufacturer.</li>
            <li>Location of the property being valued.</li>
            <li>Information about the owner of property being valued.</li>
            <li>
              Copies of the purchase, lease or other right in respect of the
              estimated equipment.
            </li>
            <li>
              The year of issue and the date of commencement of operation.
            </li>
            <li>
              The technical characteristics of the object (power, weight, size,
              mileage, performance, etc. - according to the technical
              documentation).
            </li>
            <li>
              Copies of the technical expertise of the equipment (if any).
            </li>
            <li>
              Inventory number, gross and net book value as of the last
              reporting date before the valuation date (if the owner of the
              facility - a legal entity).
            </li>
            <li>
              Information on the conservation and repair (replacement of units,
              assemblies, improvement).
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          This list is provisional and may be reduced or expanded after detailed
          examination of the appraiser with the tasks of assessment and a list
          of equipment.
        </p>
        <p className={styles.paragraph}>
          Specific terms of the assessment of machinery and equipment are
          determined through negotiations, after a preliminary to the list of
          objects and assessment tasks.
        </p>
        <p className={styles.paragraph}>
          For assessment of machinery and equipment you will need:
          <ul className={styles.outsideUl}>
            <li>
              Contact our specialist and gave him information regarding
              properties, objectives and purposes of the assessment;
            </li>
            <li>
              Agree with the specialist terms and conditions of the assessment;
            </li>
            <li>To conclude the contract;</li>
            <li>Prepare all the required documents and submit them to us;</li>
            <li>
              Meet and accompany our expert for the inspection of objects (exit
              is at our expense on our transport);
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          After that, we evaluate your property and hand you a finished report.
        </p>
        <h3>Real estate Valuation</h3>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; holds determine the market
          value of real property for registration fee to the authorized capital
          of companies, registration of pledge (mortgage), changes in the book
          value of fixed assets in accounting, insurance contracts, and any
          other purposes that require the establishment of a project cost by an
          independent appraiser.
        </p>
        <p className={styles.paragraph}>
          Our company can assess any property:
          <ul className={styles.outsideUl}>
            <li>commercial real estate;</li>
            <li>land (plots);</li>
            <li>assets under construction;</li>
            <li>the rent and lease rights;</li>
            <li>enterprises as property complexes;</li>
            <li>apartments;</li>
            <li>suburban residential property (houses cottages, gardens);</li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          In determining the value of the property our specialists will take
          into account all the factors that affect the value of the object: the
          location, the availability and quality of infrastructure, remoteness
          from major centers, transport, the environment, the status of the
          estimated object and wear of its basic design.
        </p>
        <p className={styles.paragraph}>
          Property price will be determined on the basis of:
          <ul className={styles.outsideUl}>
            <li>
              comparison of its performance with unique objects with a known
              price offers;
            </li>
            <li>
              determine the total cost of the new construction of a similar
              facility
            </li>
            <li>
              study of the ability of an object to generate income through its
              commercial use in the future.
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          With our system you will receive a full detailed study, designed in
          the form of the evaluation report, in full compliance with the
          applicable legislation.
        </p>
        <p className={styles.paragraph}>
          In preparing the report for the purpose of lending against property,
          our company takes into account all the requirements of individual
          commercial banks to the evaluation report. Association &quot;Taxes of
          Russia&quot; accredited and successful cooperation with such major
          banks as Gazprombank, the National Bank &quot;Trust&quot;, the
          Agricultural Bank, the Ural Bank of Sberbank of Russia.
        </p>
        <p className={styles.paragraph}>
          For the report on the evaluation of real estate to the customer must
          provide a series of documents describing the physical and legal
          characteristics of the evaluated object:
          <ul className={styles.outsideUl}>
            <li>
              a certificate of registration of rights to real estate, title
              documents, the tenancy agreement or lease;
            </li>
            <li>
              product data, legend, cadastral or floor plan, cadastral land.
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          This list is provisional and may be reduced or expanded after detailed
          examination of the appraiser with the objectives of the assessment and
          listing of real estate.
        </p>
        <p className={styles.paragraph}>
          Term evaluation of real estate is usually 5-7 business days and may
          vary depending on the specific working conditions and characteristics
          of the evaluated properties.
        </p>
        <p className={styles.paragraph}>
          Cost depends on the purpose of assessment, the number and size of the
          property.
        </p>
        <p className={styles.paragraph}>
          Specific terms of the assessment determined through negotiations,
          after a preliminary assessment of the tasks.
        </p>
        <p className={styles.paragraph}>
          To assess the real estate you need to:
          <ul className={styles.outsideUl}>
            <li>
              Contact our specialist and gave him information on the property,
              the goal and purpose of evaluation;
            </li>
            <li>
              Agree with the specialist terms and conditions of the assessment;
            </li>
            <li>To conclude the contract;</li>
            <li>Prepare all the required documents and submit them to us;</li>
            <li>
              Meet and accompany our expert to inspect the object (exit is at
              our expense on our transport);
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          After that, we evaluate your property and hand you a finished report.
        </p>
        <h3>Valuation of other types of property</h3>
        <p className={styles.paragraph}>
          Association &quot;Taxes of Russia&quot; holds the same estimate:
          <ul className={styles.outsideUl}>
            <li>securities (bonds, stocks, bonds);</li>
            <li>Debt (receivables)</li>
            <li>intangible assets (patents, trademarks, copyrights, etc.);</li>
            <li>Other types of property.</li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          With our system you will receive a full detailed study, designed in
          the form of the evaluation report, in full compliance with the
          applicable legislation.
        </p>
        <p className={styles.paragraph}>
          Specific terms of the assessment of other types of property are
          determined through negotiations, after a preliminary to the list of
          objects and assessment tasks.
        </p>
        <p className={styles.paragraph}>
          For assessment you will need:
          <ul className={styles.outsideUl}>
            <li>
              Contact our specialist and gave him information relating to a
              property, the objectives and purposes of assessment;
            </li>
            <li>
              Agree with the specialist terms and conditions of the assessment;
            </li>
            <li>To conclude the contract;</li>
            <li>Prepare all the required documents and submit them to us;</li>
            <li>
              Meet and accompany our expert for the inspection of objects (exit
              is at our expense on our transport);
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          After that, we evaluate your property and hand you a finished report.
        </p>
      </div>
    </div>
  )
}

export default EnValuationPage
