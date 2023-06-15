import ServicePerson from '@/components/ServicePerson/ServicePerson'
import styles from '../servicesPage.module.scss'
import { getCurrentPerson } from '@/services/getCurrentPerson'

const ConsultingPage = async () => {
  const vakulina = await getCurrentPerson('vakulina@anr.ru')
  return (
    <div className={styles.pageContainer}>
      <h2>Консалтинговые услуги</h2>
      <ServicePerson
        isEn={false}
        name={vakulina[0].name}
        work={vakulina[0].work}
        phone={vakulina[0].phone}
        image={vakulina[0].image}
      />
      <a className={styles.link} href='/price_cons.PDF' target='_blank'>
        Прейскурант
      </a>
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          Консалтинговые услуги, оказываемые Ассоциацией «Налоги России»,
          способствуют комплексному развитию и защите бизнеса клиентов.
          Своевременное обращение к консультанту позволяет предприятию вовремя
          выявить возможные проблемы и предотвратить возможные негативные
          последствия. Как показывает практика, обращение к консультанту на
          стадии заключения договора с контрагентом, при принятии решения об
          отражении финансово-хозяйственной операции в налоговом и бухгалтерском
          учете и других аналогичных случаях является наиболее эффективным как с
          точки зрения расходов клиента по оплате услуг, так и с точки зрения
          предотвращения негативных последствий.
        </p>
        <p className={styles.paragraph}>
          Ассоциация «Налоги России» всегда рекомендует руководителям
          предприятий при заключении новых договоров проконсультироваться не
          только у юристов, которые хорошо разбираются в гражданском
          законодательстве, но и специалистов по налогообложению, чтобы вовремя
          спрогнозировать налоговые последствия – какие риски берет на себя
          компания и насколько они для нее критичны. Только комплексный подход к
          заключаемой сделке может значительно снизить риски претензий со
          стороны налоговых органов.
        </p>
        <p className={styles.paragraph}>
          Специалисты Ассоциации «Налоги России» имеют комплексные знания как в
          налоговом законодательстве и бухгалтерском учете, так и в гражданском
          законодательстве, а также большой опыт ведения дел в судах. Такого
          рода знания позволяют оказывать услугу высокого качества и учитывать
          все нюансы действующего законодательства.
        </p>
        <p className={styles.paragraph}>
          Комплексные знания специалистов Ассоциации в различных отраслях права
          и экономики предприятий различных отраслей позволяют минимизировать
          риски финансовых потерь клиента при сопровождении приобретения
          бизнеса. При приобретении услуги по сопровождению покупки бизнеса
          клиент получает представление о том, что в действительности он
          приобретает и возможные риски потерь, которые могут возникнуть после
          приобретения бизнеса.
        </p>
        <p className={styles.paragraph}>
          На стадии принятия решений о развитии и приобретении бизнеса также
          эффективно налоговое планирование, которое позволяет комплексно
          выявить возможные финансовые резервы и правильно структурировать
          бизнес.
        </p>
        <p className={styles.paragraph}>
          Для предотвращения рисков доначисления налогов, пени и штрафов со
          стороны налоговых органов в результате налоговой проверки Ассоциация
          «Налоги России» рекомендует обратиться к ее специалистам с момента
          начала налоговой проверки. Как показывает практика, чем раньше
          специалисты приступят к оказанию помощи клиенту при проведении
          налоговой проверки, тем выше вероятность избежать доначисления
          налогов, пени и штрафов.
        </p>
        <p className={styles.paragraph}>
          Своевременное выявление проблемы и грамотно составленное возражение,
          например, для обжалования решения налогового органа, очень часто дает
          возможность избежать судебного разбирательства.
        </p>
        <p className={styles.paragraph}>
          Банкротство предприятия многие расценивают как окончание ведения
          бизнеса. Однако у предприятий-банкротов есть несколько путей
          дальнейшего развития. Если невозможно восстановить бизнес, его,
          например, можно продать, очистив от долгов. Ассоциация «Налоги России»
          осуществляет помощь как собственнику бизнеса, оказавшегося в сложной
          экономической ситуации, так и потенциальному инвестору очищенного от
          долгов бизнеса.
        </p>
        <p className={styles.paragraph}>
          Комплексная защита бизнеса клиента является приоритетом при оказании
          консалтинговых услуг Ассоциацией «Налоги России».
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Налоговое консультирование</h2>
        <p className={styles.paragraph}>
          Ассоциация предоставляет услуги как по комплексному консультационному
          абонентскому обслуживанию за фиксированную ежемесячную абонентскую
          плату, так и разовые консультации.
        </p>
        <p className={styles.paragraph}>
          При предоставлении консультации проводится анализ альтернативных
          мнений и существующих правовых позиций судебных и фискальных органов.
        </p>
        <p className={styles.paragraph}>
          Консультации предоставляют специалисты, имеющие многолетний
          практический опыт, в том числе в спорах с налоговыми органами.
        </p>
        <p className={styles.paragraph}>
          В рамках налогового консультирования Ассоциация «Налоги России»
          предоставляет следующие услуги:
          <ul className={styles.outsideUl}>
            <li>
              разъяснение налогового законодательства по вопросам, возникшим в
              деятельности предприятия;
            </li>
            <li>
              оперативная выработка стратегии и поддержка в нестандартных и
              кризисных ситуациях, позволяющих предотвратить или минимизировать
              риски и потери;
            </li>
            <li>
              разработка учетной политики предприятия по бухгалтерскому и
              налоговому учету;
            </li>
            <li>разработка и постановка налогового учета;</li>
            <li>
              оценка налоговых рисков при совершении хозяйственных операций и
              заключении договоров.
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Налоговое планирование</h2>
        <p className={styles.paragraph}>
          Основной целью налогового планирования является легитимное уменьшение
          налоговой нагрузки предприятия. В рамках действующего налогового
          законодательства с учетом судебной практики вырабатывается система
          построения бизнес-процессов, сочетающая оптимальные способы управления
          и учитывающая их налоговые последствия.
        </p>
        <p className={styles.paragraph}>
          Компетентность и многолетний опыт специалистов «Ассоциации «Налоги
          России» в области налогового планирования позволяет увеличить
          доходность предприятия и свести к минимуму налоговые риски.
        </p>
        <p className={styles.paragraph}>
          Налоговое планирование актуально не только при разработке
          бизнес-процессов, но и при заключении договоров с контрагентами.
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Налоговая экспертиза</h2>
        <p className={styles.paragraph}>
          Ассоциация «Налоги России» проводит экспертизу:
          <ul className={styles.outsideUl}>
            <li>актов налоговых и иных контролирующих органов;</li>
            <li>договоров и иных документов;</li>
            <li>отдельных финансово-хозяйственных операций.</li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          При заключении договора на сопровождение налоговых проверок или
          представительства в суде по налоговым спорам налоговая экспертиза
          включается в комплекс услуг по договору и дополнительной оплате не
          подлежит.
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Сопровождение налоговых проверок</h2>
        <p className={styles.paragraph}>
          Как показывает многолетняя практика Ассоциации «Налоги России» многие
          претензии со стороны налоговой инспекции можно исключить на стадии
          налоговой проверки.
        </p>
        <p className={styles.paragraph}>
          Большое количество претензий возникает из-за неправильного оформления
          первичных документов. Сотрудники Ассоциации в рамках данной услуги
          помогут исправить такого рода ошибки на стадии проведения налоговой
          проверки, что поможет предприятию избежать длительного процесса
          оспаривания акта проверки.
        </p>
        <p className={styles.paragraph}>
          Аргументированные доводы сотрудников Ассоциации со ссылкой на судебную
          практику и разъяснения Минфина РФ и ФНС РФ по возникающим аналогичным
          проблемным вопросам, как правило, позволяют убедить проверяющих не
          включать в акт проверки спорные вопросы.
        </p>
        <p className={styles.paragraph}>
          Привлечение специалистов Ассоциации «Налоги России» для оказания
          данной услуги позволяет значительно сэкономить средства предприятия,
          так ее стоимость, как правило, значительно ниже, чем размер
          предъявляемых налоговыми органами претензий, а также стоимости услуг
          по представлению интересов в суде при оспаривании акта налогового
          органа.
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Трансфертное ценообразование</h2>
        <p className={styles.paragraph}>
          Анализ трансфертного ценообразования и ценовой политики предприятия
          включает:
          <ul className={styles.outsideUl}>
            <li>
              анализ возможных рисков применения налоговыми органами раздела IV
              НК РФ при проверке цен, применяемых предприятиями,
            </li>
            <li>
              проведение исследований рынков с целью определения рыночных цен на
              конкретные товары, работы, услуги,
            </li>
            <li>
              подготовка документов, обосновывающих рыночную стоимость товаров
              (работ, услуг).
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Юридические услуги</h2>
        <p className={styles.paragraph}>
          Ассоциация «Налоги России» оказывает весь комплекс юридических услуг,
          в том числе:
          <ul className={styles.outsideUl}>
            <li>
              письменные и устные консультации по вопросам гражданского,
              административного и иных отраслей права, возникающим у
              предприятий;
            </li>
            <li>
              составление и экспертиза договоров и иных документов правового
              характера;
            </li>
            <li>
              досудебное урегулирование споров, в том числе подготовка
              претензии, переговоры с контрагентами;
            </li>
            <li>правовое сопровождение сделок и бизнес-процессов.</li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Сопровождение покупки бизнеса</h2>
        <p className={styles.paragraph}>
          Ассоциация &quot;Налоги России&quot; оказывает услуги по проведению
          Due Diligence с целью получить полную информацию о приобретаемом
          бизнесе и иных планируемых вложениях, оценить риски, которые могут
          возникнуть после приобретения, соотвественно, принять взвешенное
          решение о целесообразности сделки и определить ее реальную цену.
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Банкротство предприятий</h2>
        <p className={styles.paragraph}>
          Ассоциация оказывает услуги по сопровождению процедуры банкротства
          предприятия, которое в условиях финансового кризиса является
          действенным способом оздоровления и реструктуризации долгов
          предприятия.
        </p>
        <p className={styles.paragraph}>
          Данная услуга может включать:
          <ul className={styles.outsideUl}>
            <li>анализ наличия признаков банкротства;</li>
            <li>
              анализ соответствия законодательству сделок, заключаемых при
              наличии признаков банкротства (подозрительных сделок);
            </li>
            <li>
              анализ финансово-хозяйственной деятельности предприятия и причин
              возникновения признаков несостоятельности (банкротства)
              предприятия;
            </li>
            <li>
              выработка рекомендаций для принятия мер по улучшению финансовых
              показателей бизнеса;
            </li>
            <li>разработка плана банкротства и методов его реализации;</li>
            <li>подготовка заявления о признании должника банкротом.</li>
            <li>представительство в суде по делам о банкротстве;</li>
            <li>
              подготовка необходимых документов для сделок по реализации
              имущества должника;
            </li>
            <li>организация проведения собраний кредиторов.</li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Анализ финансово-хозяйственной деятельности</h2>
        <p className={styles.paragraph}>
          Анализ ФХД проводится для исследования тенденций развития предприятия
          с целью поиска, измерения и обоснования внутренних резервов
          производства, направленных на повышение эффективности его работы.
        </p>
        <p className={styles.paragraph}>
          Анализ ФХД включает:
          <ul className={styles.outsideUl}>
            <li>
              Анализ организации систем бюджетирования и управленческого учета
              на предприятии.
            </li>
            <li>
              Анализ методов ценообразования, управления затратами, формирования
              бюджета на предприятии.
            </li>
            <li>Анализ и нормирование оборотного капитала.</li>
            <li>Анализ и оптимизация фонда заработной платы.</li>
            <li>
              Факторный экономический анализ влияния на эффективность прибыли,
              объема продаж, затрат, номенклатуры выпускаемой продукции.
            </li>
            <li>
              Факторный экономический анализ интенсификации использования
              ресурсов.
            </li>
            <li>
              Экономический анализ объема продаж, затрат, прибыли,
              рентабельности, финансового состояния, ликвидности и
              платежеспособности.
            </li>
            <li>Мониторинг финансового состояния, платежеспособности.</li>
            <li>
              Прогнозный анализ финансовой несостоятельности (риска
              банкротства).
            </li>
            <li>
              Экономический анализ инвестиционной политики. Анализ
              инвестиционного риска.
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Анализ затрат</h2>
        <p className={styles.paragraph}>
          Разработка программы сокращения затрат предполагают создание
          организационной структуры, процессов и инструментов управления
          издержками, обеспечивающих полное управление издержками предприятия.
        </p>
        <p className={styles.paragraph}>
          Разработка программы стратегического сокращения затрат включает:
          <ul className={styles.outsideUl}>
            <li>оценка качества текущего управления издержками предприятия;</li>
            <li>
              анализ и оценка критических факторов успеха снижения издержек;
            </li>
            <li>
              определение финансовых и нефинансовых критериев оценки критических
              факторов успеха;
            </li>
            <li>
              выделение наиболее существенных факторов влияющих на издержки
              бизнеса;
            </li>
            <li>разработка комплексных моделей бизнеса;</li>
            <li>
              разработка эффективных методик управления издержками предприятии;
            </li>
            <li>
              формирование организационных элементов системы управления
              издержками;
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <h2>Разработка бизнес-плана</h2>
        <h3>
          Выполнение работ по бизнес-планированию и инвестиционному
          проектированию включает:
        </h3>
        <p className={styles.paragraph}>
          <h3>1. Проведение маркетинговых исследований</h3>В рамках разработки
          бизнес-планов проводятся следующие исследования:
          <ul className={styles.outsideUl}>
            <li>
              Изучение состояния и тенденций развития отрасли как объекта
              инвестирования;
            </li>
            <li>Оценка величины и структуры текущего спроса/предложения;</li>
            <li>Перспективная оценка спроса и предложений на рынке;</li>
            <li>
              Изучение динамики и моделирование емкости и развития рынка в
              среднесрочной перспективе;
            </li>
            <li>
              Анализ рынков и выявление наиболее перспективных для
              инвестирования товарных групп;
            </li>
            <li>
              Оценка конкурентной среды (круг основных конкурентов,
              стратегические планы развития конкурентов, тактики и стратегии
              деятельности);
            </li>
            <li>
              Составление прогнозов объема продаж продукции и услуг, исходя из
              динамики развития рынка и условий конкуренции.
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          <h3>2. Бизнес-планирование и инвестиционное проектирование.</h3>
          На основе маркетинговых исследований с помощью программных продуктов
          разрабатывается финансовая модель предприятия, которая включает в
          себя:
          <ul className={styles.outsideUl}>
            <li>Инвестиционный план;</li>
            <li>Операционный план;</li>
            <li>Финансовый план;</li>
            <li>Кэш-фло;</li>
            <li>Баланс;</li>
            <li>Отчет о прибылях-убытках;</li>
            <li>Интегральные показатели эффективности инвестиций;</li>
            <li>Анализ чувствительности;</li>
            <li>Анализ безубыточности;</li>
            <li>Статистический анализ проекта с помощью метода Монте-Карло.</li>
          </ul>
        </p>
      </div>
      <div className={styles.pageBlock}>
        <p className={styles.paragraph}>
          <h3>3. Консультационные услуги в области риск-менеджмента:</h3>В
          случае, если финансовый план предусматривает использование заемных
          средств и бизнес-план предназначен для принятия решения внешним
          инвестором о финансировании проекта, в бизнес-план включаются:
          <ul className={styles.outsideUl}>
            <li>
              карта рисков предприятия - идентификация, систематизированное
              описание и ранжирование рисков;
            </li>
            <li>
              численная оценка совокупного риска и определение величины капитала
              на покрытие рисков;
            </li>
            <li>
              стресс-тестирование - проверка устойчивости компании к стрессовым
              изменениям факторов риска и другим кризисным ситуациям;
            </li>
            <li>
              разработка системы мероприятий и регламентов по контролю и
              снижению рисков. Исследования могут проводиться поэтапно, и в
              оптимальном для клиентов соотношении в соответствии с текущей
              ситуацией на предприятии и стоящих перед ним задач.
            </li>
          </ul>
        </p>
        <a className={styles.link} href='/'>
          Подробно о разработке бизнес-плана
        </a>
      </div>
      <div className={styles.pageBlock}>
        <h2>Управленческий учет</h2>
        <p className={styles.paragraph}>
          <h3>Разработка системы управленческого учета и контроллинга</h3>
          Система управленческого учета разрабатывается как наиболее эффективный
          инструмент, позволяющий получать полноценную и достоверную информацию
          о компании в режиме реального времени.
        </p>
        <p className={styles.paragraph}>
          <h3>
            На первом этапе разрабатывается концепция управленческого учета,
            которая определяет:
          </h3>
          <ul className={styles.outsideUl}>
            <li>
              центры финансового учета, их подчинение в системе управленческого
              учета;
            </li>
            <li>
              структуру пользователей информации (уровни, объем получаемых
              данных, периодичность);
            </li>
            <li>
              общую структуру данных, предполагаемых к сбору в разрабатываемой
              системе управленческого учета;
            </li>
            <li>
              требования к набору ключевых показателей, предполагаемых для
              использования оценки деятельности компании.
            </li>
          </ul>
        </p>
        <p className={styles.paragraph}>
          <h3>
            На втором этапе разрабатывается положение по управленческому учету,
            которое определит:
          </h3>
          <ul className={styles.outsideUl}>
            <li>
              ключевые показатели для оценки эффективности и мониторинга
              финансово-хозяйственной деятельности каждого центра финансового
              учета;
            </li>
            <li>
              формы и сроки предоставления управленческой отчетности,
              удовлетворяющей требованиям различных пользователей (руководство,
              акционеры и т.п.);
            </li>
            <li>
              схему документооборота в компании, обеспечивающей эффективное
              ведение управленческого учета-механизм консолидации управленческой
              отчетности;
            </li>
            <li>
              принципы и правила распределения доходов и затрат между различными
              бизнес-единицами компании;
            </li>
            <li>
              схему и процедуры принятия бюджетов на следующий период, а также
              перечень лиц, ответственных за принятие и утверждение бюджетов;
            </li>
            <li>
              методику анализа финансово-хозяйственной деятельности и
              определения ответственных лиц.
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default ConsultingPage
