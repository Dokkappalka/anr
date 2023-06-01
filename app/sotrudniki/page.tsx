import Person from '@/components/Person/Person'
import styles from './Sotrudniki.module.scss'
import bossImage from '../../assets/boss.jpg'
import NikitenkovImage from '../../assets/Nikitenkov.jpg'
import VakulinaImage from '../../assets/Vakulina.jpg'
import BathinImage from '../../assets/Bahtin.jpg'

const allPersons = [
  {
    name: 'Теущаков Игорь Леонидович',
    work: 'Генеральный директор',
    isCertified: true,
    description:
      'Закончил Свердловский юридический институт, судебно-прокурорский факультет в 1991 г.В 2003 году закончил УГТУ-УПИ по специальности — экономика и управление на предприятии. В 2006 году прошел курс профессиональной переподготовки по программе «Оценка стоимости предприятия (бизнеса)» в НОУ «Высшая школа приватизации и предпринимательства - институт», г. Москва.',
    exp: 'Опыт арбитражной и юридической практики более 30 лет.',
    phone: '+7 (343) 378-93-33',
    email: 'anr@anr.ru',
    image: bossImage,
  },
  {
    name: 'Никитенков Антон Владимирович',
    work: 'Заместитель генерального директора',
    isCertified: true,
    description:
      'Направления: аудит. В 1998 году закончил УГТУ-УПИ, специальность - "экономика и управление на предприятии".',
    phone: '7 (343) 378-90-88, 378-93-33',
    email: 'nikitenkov@anr.ru',
    image: NikitenkovImage,
    exp: 'Опыт аудиторской практики более 25 лет.',
  },
  {
    name: 'Вакулина Елена Евгеньевна',
    work: 'Руководитель департамента консалтинга',
    isCertified: false,
    description:
      'Направления: консалтинговые услуги, арбитраж. В 1987 году закончила Свердловский юридический институт, факультет правоведения. В 2003 году закончила УГТУ-УПИ по специальности - экономика и управление на предприятии.',
    phone: '+7 (343) 378-93-30, 378-93-33',
    email: 'vakulina@anr.ru',
    image: VakulinaImage,
    exp: 'Опыт арбитражной и юридической практики более 30 лет.',
  },
  {
    name: 'Бахтин Владислав Борисович',
    work: 'Руководитель департамента оценки и управленческого консультирования',
    isCertified: false,
    description:
      'Направления: оценка. В 1997 г. закончил УрГЭУ, экономический факультет. Закончил Институт профессиональной оценки по программе "Оценка стоимости предприятия (бизнеса)" в 2000 г.',
    email: 'bahtin@anr.ru',
    phone: '+7 (343) 378-91-39, 378-93-33',
    image: BathinImage,
    exp: 'Опыт оценочной деятельности более 25 лет.',
  },
]

const Sotrudniki = () => {
  return (
    <div className={styles.pageContainer}>
      <h2>Сотрудники</h2>
      <p className={styles.paragraph}>
        В группе компаний Ассоциации «Налоги России» работает около 30 человек,
        в том числе аудиторы, имеющие квалификационный аттестат на проведение
        аудита на предприятиях любых форм собственности, помощники аудиторов,
        дипломированные юристы и оценщики.
      </p>
      <p className={styles.paragraph}>
        Сотрудники компании — высококвалифицированные специалисты, обладающие
        теоретическими познаниями и практическим опытом в области
        макроэкономики, налогового законодательства и планирования, аудита и
        юридического сопровождения предприятий различных отраслей и форм
        собственности, оценки.
      </p>
      <div className={styles.personsContainer}>
        {allPersons.map((person) => {
          return (
            <Person
              name={person.name}
              work={person.work}
              isCertified={person.isCertified}
              description={person.description}
              exp={person.exp}
              phone={person.phone}
              email={person.email}
              image={person.image}
              key={person.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Sotrudniki
