import ServicePerson from '@/components/ServicePerson/ServicePerson'
import styles from './ArbitrationPage.module.scss'
import { getCurrentPerson } from '@/services/getCurrentPerson'

const ArbitrationPage = async () => {
  const vakulina = await getCurrentPerson('vakulina@anr.ru')
  return (
    <div className={styles.pageContainer}>
      <h2>Арбитраж</h2>
      <ServicePerson
        name={vakulina[0].name}
        work={vakulina[0].work}
        phone={vakulina[0].phone}
        image={vakulina[0].image}
      />
      <a href='https://anr.ru/storage/doc/price_cons.PDF' target='_blank'>
        Прейскурант
      </a>
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Ассоциация "Налоги России" имеет многолетний опыт представления
          интересов своих клиентов в контролирующих органах и судах при
          рассмотрении налоговых и гражданских споров.
        </p>
        <p className={styles.paragraph}>
          Опытные и высококвалифицированные юристы Ассоциации владеют множеством
          способов решения споров, что гарантирует качественную и надежную
          защиту интересов клиентов.
        </p>
        <p className={styles.paragraph}>
          Ассоциация имеет огромный опыт представления интересов предприятий в
          судебных органах большинства субъектов Российской Федерации, а также
          представляет интересы клиентов в Высшем Арбитражном Суде РФ, Верховном
          Суде РФ и Конституционном Суде РФ.
        </p>
        <p className={styles.paragraph}>
          Традиционно основным видом судебных споров, в которых Ассоциация
          защищает интересы своих клиентов, являются споры с налоговыми
          органами.
        </p>
        <p className={styles.paragraph}>
          Например, представляя интересы клиента в Высшем Арбитражном Суде РФ
          представители Ассоциации «Налоги России» доказали, что перечень
          расходов и приравненных в таким расходам убытков налогоплательщика,
          установленных в статье 265 НК РФ, не является исчерпывающим
          (Постановление Президиума ВАС РФ № 9167/10 от 30.11.2010)
        </p>
        <p className={styles.paragraph}>
          Наличие необходимой профессиональной подготовки и большой опыт
          практической работы в судах позволяют юристам Ассоциации оправдывать
          ожидания своих клиентов и добиваться положительных решений даже,
          казалось бы, в безнадежных случаях, например, когда практика
          арбитражных судов, в том числе ВАС РФ, складывается не в пользу
          налогоплательщика.
        </p>
        <p className={styles.paragraph}>
          Так, выводы, содержащихся в Определениях Конституционного Суда РФ от
          08.06.2004г. №229-О, от 16 мая 2007 г. N 420-О-О, принятые по жалобам,
          подготовленным специалистами Ассоциации, явились основаниями для
          пересмотра дел, решения всех судебных инстанций по которым ранее были
          вынесены не в пользу налогоплательщиков, с принятием новых судебных
          актов в пользу наших клиентов.
        </p>
        <p className={styles.paragraph}>
          Представление интересов клиентов по спорам с налоговыми органами
          включает в себя следующие услуги: подготовка возражений на акт
          налоговой проверки, апелляционной жалобы в вышестоящий налоговый орган
          и представительство в суде во всех инстанциях.
        </p>
        <p className={styles.paragraph}>
          Предоставление данных услуг в комплексе позволяет юристам Ассоциации
          быть в курсе всех нюансов дела и динамично реагировать на изменение
          ситуации, что является обязательным условием для успешного решения
          судебного спора.
        </p>
      </div>
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Наряду с представительством в налоговых спорах, юристы Ассоциации
          оказывают услуги по представлению интересов клиентов в гражданских
          спорах, вытекающих из любых видов сделок, как в стадии досудебного
          урегулирования (подготовка претензий, переговоры с оппонентом и т.п.),
          так непосредственно в суде.
        </p>
        <p className={styles.paragraph}>
          Более чем за 20 лет деятельности Ассоциация помогла своим клиентам
          сохранить сотни миллиардов рублей, а также, что немаловажно - деловую
          репутацию, что является наилучшим подтверждением качества наших услуг.
        </p>
      </div>
    </div>
  )
}

export default ArbitrationPage
