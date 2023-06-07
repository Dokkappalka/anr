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
      <div className={styles.pageBlock}>
        <h2>Transfer pricing analysis</h2>
        <p className={styles.paragraph}>
          Analysis of transfer pricing and the pricing policy of the company
          includes:
          <ul className={styles.outsideUl}>
            <li>
              risk analysis of the tax authorities Article V1 of the Tax Code
              when checking the prices applied by enterprises,
            </li>
            <li>
              Conduct market research to determine market prices for specific
              goods, labor, services,
            </li>
            <li>
              Preparation of documents justifying the market value of the goods
              (works, services).
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Business Consulting</h2>
        <p className={styles.paragraph}>
          With years of experience working with companies of different sectors
          and size of the business, the Association "Taxes of Russia" provides
          services for the development and implementation of highly effective
          management decisions.
        </p>
        <p className={styles.paragraph}>
          Consulting services provided by the Association "Taxes of Russia",
          promote the comprehensive development and protection of clients'
          businesses. Timely treatment to counselling allows the company time to
          identify potential problems and prevent possible negative effects, a
          strategy and tactics of the company's development, use
          commercially-tuned management decision.
        </p>
        <p className={styles.paragraph}>
          Presence in the State of the Association "Taxes of Russia" highly
          qualified professionals with economic and legal background allows
          balancing decisions and significantly reduce the risk of financial
          loss on the part of third parties, including the tax and other
          regulatory authorities, competitors, business partners.
        </p>
        <p className={styles.paragraph}>
          Association "Taxes of Russia" is accredited and works successfully
          with such banks as Gazprombank, ROSSIYSKY CAPITAL, VTB24, which allows
          qualified, subject to the requirements of leading Russian banks to
          develop business plans.
        </p>
        <p className={styles.paragraph}>
          Comprehensive protection of the client's business is a priority in the
          provision of consulting services to the Association "Taxes of Russia."
        </p>
        <h3>Analysis of financial and economic activity</h3>
        <p className={styles.paragraph}>
          Analysis of financial and economic activity (FEA) is performed to
          explore company development tendency to search, change and ground
          internal reserve of enterprise directed to increase its efficiency.
        </p>
        <p className={styles.paragraph}>
          Analysis of FEA includes:
          <ul className={styles.outsideUl}>
            <li>
              Analysis of budgeting system arrangement and management accounting
              in the enterprise
            </li>
            <li>
              Analysis of pricing methods, expenses management, budget formation
              in the enterprise
            </li>
            <li>Analysis and rationing of current capital.</li>
            <li>Analysis and optimization of pay-roll fund.</li>
            <li>
              The factor economic analysis of influence on efficiency of profit,
              sales volume, expenses, nomenclature of turn out product
            </li>
            <li>
              Factor economic analysis of recourse exploitation intensification
            </li>
            <li>
              Economic analysis of sales volume, expenses, profits,
              profitability, financial condition, liquidity and solvency.
            </li>
            <li>Monitoring of financial condition, solvency</li>
            <li>
              Forward-looking analysis of financial inability (risk of
              bankruptcy).
            </li>
            <li>
              Economic analysis of investment policy. Analysis of investment
              risk.
            </li>
          </ul>
        </p>
        <h3>Cost analysis</h3>
        <p className={styles.paragraph}>
          Development of a program to reduce costs provide for the establishment
          of the organizational structure, processes and cost management tools,
          providing complete management of costs of the enterprise.
        </p>
        <p className={styles.paragraph}>
          Development of a program for strategic cost reductions include:
          <ul className={styles.outsideUl}>
            <li>Assess the quality of the current cost management company;</li>
            <li>
              Analysis and evaluation of critical success factors to reduce
              costs;
            </li>
            <li>
              the definition of financial and non-financial criteria for
              evaluating critical success factors;
            </li>
            <li>
              identification of the most significant factors affecting the cost
              of doing business;
            </li>
            <li>Development of complex business models;</li>
            <li>
              Development of effective methods of cost management company;
            </li>
            <li>
              Formation of the organizational elements of the cost management;
            </li>
          </ul>
        </p>
        <h3>Business plan development</h3>
        <p className={styles.paragraph}>
          Performance of works on business-planning and investment designing
          includes:
        </p>
        <p className={styles.paragraph}>1. Marketing research:</p>
        <p className={styles.paragraph}>
          Within business-plans development the following researches are carried
          out:
          <ul className={styles.outsideUl}>
            <li>
              Examination of development condition and tendencies of branch as
              an object of investment;
            </li>
            <li>
              Estimation of volume and structure of current demand/supply;
            </li>
            <li>Perspective estimation of supply and demand in the market;</li>
            <li>
              Examination of dynamics and modelling of capacity and development
              of market in mid-term;
            </li>
            <li>
              Analysis of markets and revealing of the most perspective for
              investment commodity groups;
            </li>
            <li>
              Estimation of competitive environment (circle of basic
              competitors, strategic plans of competitors’ development, activity
              tactics and strategy);
            </li>
            <li>
              Drawing up of forecasts for sales volume of production and
              services, proceeding from dynamics of market development and
              competition conditions.
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          2. Business-planning and investment designing.
        </p>
        <p className={styles.paragraph}>
          On basis of market researches by means of Program products the
          enterprise financial model is developed which includes:
          <ul className={styles.outsideUl}>
            <li>Investment plan,</li>
            <li>Operational plan,</li>
            <li>Financial plan,</li>
            <li>Cash-flow,</li>
            <li>Balance,</li>
            <li>Report on profits and losses,</li>
            <li>Integrated indexation of investments efficiency,</li>
            <li>Analysis of sensitivity,</li>
            <li>Breakeven Analysis,</li>
            <li>
              Statistical analysis of the project by means of Monte-Carlo method
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          3. Consulting services in risk-management:
        </p>
        <p className={styles.paragraph}>
          In case financial plan provides for use of borrowed assets and
          business-plan is intended for decision-making by external investor on
          project financing, business-plan includes:
          <ul className={styles.outsideUl}>
            <li>
              card of enterprise risks (identification, systematized description
              and risks rating);
            </li>
            <li>identification, systematized description and risks rating;</li>
            <li>
              numerical estimation of overall risk and definition of capital
              amount for risks covering;
            </li>
            <li>
              stress-testing (checking of company stability to stressful changes
              of risk factors and other crisis situations);
            </li>
            <li>
              development of action system and rules to control and decrease
              risks.
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          Researches may be performed stage by stage and in optimum reference
          for the customer according to current situation at the enterprise and
          its objectives.
        </p>
        <h3>Managerial Accounting</h3>
        <p className={styles.paragraph}>
          Development of management accounting and controlling Management
          accounting system is being developed as the most effective tool to get
          a full and accurate information about the company in real time.
        </p>
        <p className={styles.paragraph}>
          An initial concept of the administrative account, which determines: •
          centers of financial accounting, their subordination in the management
          accounts;
          <ul className={styles.outsideUl}>
            <li>
              the structure of the users of information (level, the volume of
              the data, frequency);
            </li>
            <li>
              a common data structure, expected to gather in the developed
              system of management accounting;
            </li>
            <li>
              requirements for a set of key indicators, intended for the
              evaluation of the company.
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          In the second stage, a Decree on management accounting, which will
          determine:
          <ul className={styles.outsideUl}>
            <li>
              Key indicators to measure and monitor the financial activities of
              each center of financial accounting;
            </li>
            <li>
              forms and terms of management reporting to meet the requirements
              of different users (management, shareholders, etc.);
            </li>
            <li>
              schema document in the company to ensure effective management
              accounting mechanism consolidation of management reporting;
            </li>
            <li>
              principles and rules for the distribution of income and expenses
              between the various business units of the company;
            </li>
            <li>
              layout and procedure of budgets for the next period, and a list of
              persons responsible for the adoption and approval of budgets;
            </li>
            <li>
              a methodology for analysing the financial and economic activities
              and identify those responsible.
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default EnConsultingPage
