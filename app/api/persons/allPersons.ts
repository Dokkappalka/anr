import bossImage from '../../../assets/boss.jpg'
import NikitenkovImage from '../../../assets/Nikitenkov.jpg'
import VakulinaImage from '../../../assets/Vakulina.jpg'
import BathinImage from '../../../assets/Bahtin.jpg'

export const allPersons = [
  {
    name: 'Теущаков Игорь Леонидович',
    enName: '1',
    work: 'Генеральный директор',
    enWork: '1',
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
    enName: 'Nikitenkov Anton Vladimirovich',
    work: 'Заместитель генерального директора',
    enWork: 'Deputy Director General',
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
    enName: 'Vakulina Elena Evgenevna',
    work: 'Руководитель департамента консалтинга',
    enWork: 'The Head of consalting Department',
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
    enName: 'Bakhtin Vladislav Borisovich',
    work: 'Руководитель департамента оценки и управленческого консультирования',
    enWork: 'the Head of evaluation department',
    isCertified: false,
    description:
      'Направления: оценка. В 1997 г. закончил УрГЭУ, экономический факультет. Закончил Институт профессиональной оценки по программе "Оценка стоимости предприятия (бизнеса)" в 2000 г.',
    email: 'bahtin@anr.ru',
    phone: '+7 (343) 378-91-39, 378-93-33',
    image: BathinImage,
    exp: 'Опыт оценочной деятельности более 25 лет.',
  },
]
