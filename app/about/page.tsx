import styles from './AboutPage.module.scss'

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>О компании</h2>
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Ассоциация «Налоги России» создана в 1992 году.
        </p>
        <p className={styles.paragraph}>
          В группу компаний &quot;Ассоциация &quot;Налоги России&quot; входят
          следующие организации:
        </p>
        <ul className={styles.outsideUl}>
          <li>
            АО &quot;АНР&quot;
            <p className={styles.ulParagraph}>
              АО &quot;АНР&quot; является членом некоммерческого партнерства
              «Сообщество специалистов-оценщиков «СМАО» (НП «СМАОс»). Оказывает
              консалтинговые, оценочные услуги.
            </p>
          </li>
          <li>
            ООО &quot;Метаудит&quot;
            <p className={styles.ulParagraph}>
              ООО &quot;Метаудит&quot; (ОРНЗ 12006041466) является членом
              Саморегулируемой организации аудиторов Ассоциация
              &quot;Содружество&quot; (СРО ААС). Оказывает аудиторские и
              сопутствующие им услуги.
            </p>
          </li>
          <li>
            ООО &quot;Правовой Центр &quot;Налоги и арбитраж&quot;
            <p className={styles.ulParagraph}>
              ООО &quot;Правовой Центр &quot;Налоги и арбитраж&quot; оказывает
              юридические услуги, включая представительство клиентов в судах и
              налоговых органах.
            </p>
          </li>
        </ul>
        <p className={styles.paragraph}>
          Предлагаемый нами уровень методик работы, а также принципы нашей
          работы, основанные на соблюдении полной конфиденциальности в отношении
          деятельности клиента, профессионализм и ответственность за результаты
          своей работы, компетентность и ценный практический опыт, определяют
          выбор и доверие многих, кто обращается к нам за помощью и советом.
        </p>
        <p className={styles.paragraph}>
          По итогам рейтингов за 2022 год группа компаний &quot;Ассоциация
          &quot;Налоги России&quot; является крупнейшей
          аудиторско-консалтинговой группой Уральского региона, оказывающая
          аудиторские, консалтинговые, юридические и оценочные услуги.
        </p>

        <p className={styles.paragraph}>
          (
          <a
            href='https://raex-rr.com/b2b/audit/biggest_audit_groups/2022/'
            target='_blank'
            className={styles.link}
          >
            Список крупнейших аудиторских групп
          </a>
          ,{' '}
          <a
            href='https://raex-rr.com/b2b/audit/law_consulting_rating/2022/'
            target='_blank'
            className={styles.link}
          >
            Рейтинг аудиторских компаний и групп
          </a>
          ).
        </p>
      </div>
    </div>
  )
}

export default AboutPage
