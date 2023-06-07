import ServicePerson from '@/components/ServicePerson/ServicePerson'
import styles from '../servicesPage.module.scss'
import { getCurrentPerson } from '@/services/getCurrentPerson'

const SeminarsPage = async () => {
  const vakulina = await getCurrentPerson('vakulina@anr.ru')
  return (
    <div className={styles.pageContainer}>
      <h2>Семинары</h2>
      <ServicePerson
        isEn={false}
        name={vakulina[0].name}
        work={vakulina[0].work}
        phone={vakulina[0].phone}
        image={vakulina[0].image}
      />
      <a
        className={styles.link}
        href='https://anr.ru/storage/doc/price_cons.PDF'
        target='_blank'
      >
        Прейскурант
      </a>
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Ассоциация «Налоги России» регулярно проводит семинары по
          налогообложению и бухгалтерскому учету.
        </p>
        <p className={styles.paragraph}>
          Семинары проводятся по согласованным с Заказчиком тематикам. При
          составлении программы семинара учитываются как пожелания Заказчика,
          так и методики, разработанные в Ассоциации «Налоги России».
        </p>
        <p className={styles.paragraph}>
          Программа семинаров составляется с учетом 25-летнего опыта проведения
          аудиторских проверок и собственной арбитражной практики.
        </p>
        <p className={styles.paragraph}>
          Семинары проводит генеральный директор Теущаков И.Л., заместитель
          генерального директора Никитенков А.В., руководитель департамента
          консалтинга Вакулина Е.Е., имеющие большой опыт в области аудита,
          налогового консалтинга и споров с налоговыми органами в арбитражных
          судах и Конституционном суде РФ.
        </p>
        <p className={styles.paragraph}>
          По согласованию с Заказчиком к проведению семинаров могут привлекаться
          ведущие специалисты налоговых органов.
        </p>
        <p className={styles.paragraph}>
          Семинары проводятся в удобное для Заказчика время.
        </p>
        <p className={styles.paragraph}>
          По итогам обучения может проводиться аттестация сотрудников, прошедших
          обучение.
        </p>
      </div>
    </div>
  )
}

export default SeminarsPage
