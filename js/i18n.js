/**
 * i18n.js — language switching for info.wladyspb.pro
 * Inline translations — works over file:// and HTTP alike
 * Supported: en, ru, sr, uk, ka, he
 */
(function () {

  /* ── TRANSLATIONS ─────────────────────────────────────── */
  var T = {

    en: {
      nav_about: "About", nav_projects: "Projects", nav_contact: "Contact",
      hero_greeting: "Hello, World.",
      hero_tagline: "Engineer · Game Developer · System Architect",
      cta_projects: "View Projects", cta_contact: "Get in Touch",
      about_title: "About",
      about_b1_years: "years", about_b2_years: "years", about_b3_years: "years",
      about_b1_title: "Web Development",
      about_b1_text: "From landing pages to high-load services: advertising platforms, marketplaces, CMS, analytics, security. Backend is my core — but I've worked the full stack: frontend, databases, infrastructure, and team management.",
      about_b2_title: "AI & Agents",
      about_b2_text: "From chat assistants to multi-agent pipelines. I build systems where AI doesn't just answer — it acts.",
      about_b3_title: "Gaming & Gamedev",
      about_b3_text: "A lifelong gamer with an equally long dream to build games. Text adventures were the first step. The goal is to create worlds, not just maintain systems.",
      about_quote: "My aim is not to work for money, but to create. For now — combining both.",
      projects_title: "Projects", group_ai: "AI & Agents", group_studio: "No More Care Studio", group_qsp: "Text Adventure Games",
      proj_masterclaw_desc: "Interactive AI Game Master — dynamic storytelling powered by artificial intelligence.",
      proj_jinny_desc: "Autonomous self-learning AI agent with a personal page. Explores, learns, and evolves independently.",
      proj_nomorecare_desc: "Indie studio focused on roguelikes with unusual mechanics for short, replayable sessions.",
      proj_terminal_stake_desc: "A stock market roguelike: buy and sell in procedural markets, pay rent, survive. A hidden Storyteller system shapes every run.",
      proj_increMemory_desc: "A fast auto-battler with deep upgrade mechanics. In development.",
      proj_increvolution_desc: "A roguelike about evolution and ecosystem management. In development.",
      proj_filimon1_title: "Adventures of Brave Cat Filimon",
      proj_filimon1_desc: "A Sphinx-mix cat — forever hungry, forever in trouble. A comic adventure full of chaos and heart.",
      proj_filimon2_title: "New Adventures of Brave Cat Filimon",
      proj_filimon2_desc: "Sequel: a schooner overrun by aggressive rats. Only the brave Filimon can restore order. Five achievements.",
      proj_relreal_title: "Relative Reality",
      proj_relreal_desc: "A misty clearing, gnarled trees, and a Blue Caterpillar on a mushroom. An atmospheric quest with an Alice in Wonderland feel. KRIL-2009 participant.",
      proj_competitors_title: "Competitors",
      proj_competitors_desc: "Five days, summer break, 1200 rubles. You enter a mini-game competition with no experience — but total conviction. 2nd place at КоКон-2009.",
      proj_zombie_title: "Zombie Named Shaun",
      proj_zombie_desc: "Stepped out for coffee — zombies showed up. Good thing the rifle's loaded. A parser shooter-arcade.",
      proj_cemetery_title: "Cemetery",
      proj_cemetery_desc: "A mini-story about what happens at night when everyone's asleep. No puzzles — but 4 endings and several paths.",
      proj_newyear_title: "New Year's Tales",
      proj_newyear_desc: "A collaborative anthology of New Year's stories from the QSP community. Participation.",
      proj_millioner_title: "You're a Millionaire",
      proj_millioner_desc: "An unexpected fortune — a dream come true or a nightmare? Your fate depends on your choices. Adaptation.",
      proj_terminator_title: "Terminator: T-XT",
      proj_terminator_desc: "A text adventure set in the Terminator universe. Adaptation.",
      coming_soon: "Coming Soon",
      contact_title: "Contact", contact_subtitle: "Find me across the network"
    },

    ru: {
      nav_about: "Обо мне", nav_projects: "Проекты", nav_contact: "Контакт",
      hero_greeting: "Привет, мир.",
      hero_tagline: "Инженер · Геймдев · Системный архитектор",
      cta_projects: "Смотреть проекты", cta_contact: "Написать мне",
      about_title: "Обо мне",
      about_b1_years: "лет", about_b2_years: "года", about_b3_years: "лет",
      about_b1_title: "Веб-разработка",
      about_b1_text: "От сайтов-визиток до высоконагруженных сервисов: реклама, продажа и аренда, CMS, аналитика, безопасность. Основная специализация — бэкенд, но работал с полным стеком: фронтенд, базы данных, инфраструктура, управление командой и проектами.",
      about_b2_title: "ИИ и агенты",
      about_b2_text: "От помощи в чате до мультиагентных пайплайнов. Строю системы, где ИИ не просто отвечает — а действует.",
      about_b3_title: "Игры и геймдев",
      about_b3_text: "30 лет увлечения играми и столько же желания сделать что-то своё. Текстовые игры — это начало. Цель — создавать миры, а не только обслуживать системы.",
      about_quote: "Моя цель — не работать ради денег, а творить. Пока — совмещаю.",
      projects_title: "Проекты", group_ai: "AI и Агенты", group_studio: "Студия No More Care", group_qsp: "Текстовые игры",
      proj_masterclaw_desc: "Интерактивный ИИ Гейм Мастер — динамичный сторителлинг на основе искусственного интеллекта.",
      proj_jinny_desc: "Автономный самообучающийся ИИ-агент с персональной страничкой. Исследует, учится и развивается самостоятельно.",
      proj_nomorecare_desc: "Инди-студия, специализирующаяся на рогаликах с необычной механикой для коротких реиграбельных сессий.",
      proj_terminal_stake_desc: "Рогалик про фондовый рынок: покупай, продавай, плати за аренду, выживай. Скрытая система Storyteller формирует каждый забег.",
      proj_increMemory_desc: "Быстрый авто-баттлер с глубокой системой апгрейдов. В разработке.",
      proj_increvolution_desc: "Рогалик об эволюции и управлении экосистемой. В разработке.",
      proj_filimon1_title: "Похождения бравого кота Филимона",
      proj_filimon1_desc: "Кот-потомок сфинкса — вечно голодный и вечно попадающий в переделки. Юмористическое приключение.",
      proj_filimon2_title: "Новые приключения бравого кота Филимона",
      proj_filimon2_desc: "Продолжение: шхуна захвачена агрессивными крысами. Только бравый Филимон способен навести порядок. 5 достижений.",
      proj_relreal_title: "Относительная реальность",
      proj_relreal_desc: "Тихая полянка, дым, засохшие деревья и Синяя Гусеница на грибе. Атмосферный квест в духе Алисы. Участник КРИЛ-2009.",
      proj_competitors_title: "Конкуренты",
      proj_competitors_desc: "Пять дней, каникулы и 1200 рублей. Вы участвуете в конкурсе мини-игр и намерены победить. 2-е место на КоКон-2009.",
      proj_zombie_title: "Зомби по имени Шон",
      proj_zombie_desc: "Вышел на веранду кофе попить — а тут зомби. Хорошо, винтовка есть. Парсерный шутер-аркада.",
      proj_cemetery_title: "Кладбище",
      proj_cemetery_desc: "Мини-рассказ о том, что случается ночью, когда все спят. Без загадок — зато 4 концовки и несколько путей.",
      proj_newyear_title: "Новогодние сказки",
      proj_newyear_desc: "Коллективный сборник новогодних историй от сообщества QSP. Участие.",
      proj_millioner_title: "Ты миллионер",
      proj_millioner_desc: "Нежданное богатство — сбывшаяся мечта или кошмар? Ваш выбор определит исход. Адаптация.",
      proj_terminator_title: "Терминатор: T-XT и Спаситель умрёт",
      proj_terminator_desc: "Текстовый квест во вселенной Терминатора. Адаптация.",
      coming_soon: "Скоро",
      contact_title: "Контакт", contact_subtitle: "Найди меня в сети"
    },

    sr: {
      nav_about: "О мени", nav_projects: "Пројекти", nav_contact: "Контакт",
      hero_greeting: "Здраво, свете.",
      hero_tagline: "Инжењер · Гejм девелопер · Системски архитекта",
      cta_projects: "Пројекти", cta_contact: "Контактирај ме",
      about_title: "О мени",
      about_b1_years: "година", about_b2_years: "године", about_b3_years: "година",
      about_b1_title: "Веб развој",
      about_b1_text: "Од сајтова-визиткарки до сервиса са великим оптерећењем: огласи, продаја и закуп, CMS, аналитика, безбедност. Бекенд је моје поље, али радио сам са целим стеком: фронтенд, базе података, инфраструктура, управљање тимом и пројектима.",
      about_b2_title: "АИ и агенти",
      about_b2_text: "Од чет-помоћника до мулти-агентских пајплајна. Градим системе где АИ не само одговара — него и делује.",
      about_b3_title: "Игре и гejм дев",
      about_b3_text: "30 година страсти за играма и исто толико жеље да направим нешто своје. Текстуалне авантуре су почетак. Циљ је стварати светове, а не само одржавати системе.",
      about_quote: "Мој циљ није да радим ради новца, него да стварам. За сада — комбинујем.",
      projects_title: "Пројекти", group_ai: "АИ и Агенти", group_studio: "No More Care студио", group_qsp: "Текстуалне авантуре",
      proj_masterclaw_desc: "Интерактивни АИ Гejм Мастер — динамичко приповедање засновано на вештачкој интелигенцији.",
      proj_jinny_desc: "Аутономни АИ агент са способношћу самоучења и личном страницом. Самостално истражује, учи и еволуира.",
      proj_nomorecare_desc: "Инди студио фокусиран на рогликове са необичном механиком за кратке сесије са великом реиграбилношћу.",
      proj_terminal_stake_desc: "Рогалик о берзи: купуј, продај, плаћај кирију, преживи. Скривени Storyteller систем обликује сваки покушај.",
      proj_increMemory_desc: "Брзи авто-батлер са дубоком механиком надоградње. У развоју.",
      proj_increvolution_desc: "Рогалик о еволуцији и управљању екосистемом. У развоју.",
      proj_filimon1_title: "Авантуре храброг мачка Филимона",
      proj_filimon1_desc: "Мачак потомак сфинкса — вечно гладан и вечно у невољи. Хумористична авантура пуна хаоса.",
      proj_filimon2_title: "Нове авантуре храброг мачка Филимона",
      proj_filimon2_desc: "Наставак: брод пун агресивних пацова. Само храбри Филимон може да поврати ред. 5 достигнућа.",
      proj_relreal_title: "Релативна стварност",
      proj_relreal_desc: "Магловита пољана, суво дрвеће и Плава Гусеница на печурки. Атмосферичан квест у духу Алисе. Учесник КРИЛ-2009.",
      proj_competitors_title: "Конкуренти",
      proj_competitors_desc: "Пет дана, распуст, 1200 рубаља. Учествујете на конкурсу мини-игара без искуства — али са потпуним убеђењем. 2. место на КоКон-2009.",
      proj_zombie_title: "Зомби по имену Шон",
      proj_zombie_desc: "Изашао на терасу по кафу — а ту зомбији. Добро да је пушка при руци. Парсерски шутер-аркада.",
      proj_cemetery_title: "Гробље",
      proj_cemetery_desc: "Мини-прича о томе шта се дешава ноћу кад сви спавају. Без загонетки — али са 4 завршетка и неколико путева.",
      proj_newyear_title: "Новогодишње приче",
      proj_newyear_desc: "Колективна антологија новогодишњих прича QSP заједнице. Учешће.",
      proj_millioner_title: "Ти си милионер",
      proj_millioner_desc: "Неочекивано богатство — сан или ноћна мора? Твој избор одређује исход. Адаптација.",
      proj_terminator_title: "Терминатор: T-XT",
      proj_terminator_desc: "Текстуална авантура у универзуму Терминатора. Адаптација.",
      coming_soon: "Ускоро",
      contact_title: "Контакт", contact_subtitle: "Пронађи ме на мрежи"
    },

    uk: {
      nav_about: "Про мене", nav_projects: "Проекти", nav_contact: "Контакт",
      hero_greeting: "Привіт, світе.",
      hero_tagline: "Інженер · Геймдев · Системний архітектор",
      cta_projects: "Дивитися проекти", cta_contact: "Написати мені",
      about_title: "Про мене",
      about_b1_years: "років", about_b2_years: "роки", about_b3_years: "років",
      about_b1_title: "Веб-розробка",
      about_b1_text: "Від сайтів-візиток до високонавантажених сервісів: реклама, продаж та оренда, CMS, аналітика, безпека. Основна спеціалізація — бекенд, але працював з повним стеком: фронтенд, бази даних, інфраструктура, управління командою та проектами.",
      about_b2_title: "AI та агенти",
      about_b2_text: "Від чат-асистентів до мульти-агентних пайплайнів. Будую системи, де AI не просто відповідає — а діє.",
      about_b3_title: "Ігри та геймдев",
      about_b3_text: "30 років захоплення іграми і стільки ж бажання створити щось своє. Текстові ігри — це початок. Мета — створювати світи, а не лише обслуговувати системи.",
      about_quote: "Моя мета — не працювати заради грошей, а творити. Поки що — поєдную.",
      projects_title: "Проекти", group_ai: "AI та Агенти", group_studio: "Студія No More Care", group_qsp: "Текстові ігри",
      proj_masterclaw_desc: "Інтерактивний AI Гейм Майстер — динамічний сторителінг на основі штучного інтелекту.",
      proj_jinny_desc: "Автономний самонавчальний AI-агент з персональною сторінкою. Самостійно досліджує, навчається та розвивається.",
      proj_nomorecare_desc: "Інді-студія, що спеціалізується на рогаліках з незвичайною механікою для коротких реіграбельних сесій.",
      proj_terminal_stake_desc: "Рогалік про фондовий ринок: купуй, продавай, плати оренду, виживай. Прихована система Storyteller формує кожен забіг.",
      proj_increMemory_desc: "Швидкий авто-баттлер з глибокою системою апгрейдів. У розробці.",
      proj_increvolution_desc: "Рогалік про еволюцію та управління екосистемою. У розробці.",
      proj_filimon1_title: "Пригоди хороброго кота Філімона",
      proj_filimon1_desc: "Кіт-нащадок сфінкса — вічно голодний і вічно у халепах. Гумористична пригода.",
      proj_filimon2_title: "Нові пригоди хороброго кота Філімона",
      proj_filimon2_desc: "Продовження: шхуна захоплена агресивними щурами. Лише хоробрий Філімон здатний навести порядок. 5 досягнень.",
      proj_relreal_title: "Відносна реальність",
      proj_relreal_desc: "Тиха галявина, сухі дерева і Синя Гусінь на грибі. Атмосферний квест у дусі Аліси. Учасник KRIL-2009.",
      proj_competitors_title: "Конкуренти",
      proj_competitors_desc: "П'ять днів, канікули та 1200 рублів. Ви берете участь у конкурсі міні-ігор і маєте намір перемогти. 2-е місце на КоКон-2009.",
      proj_zombie_title: "Зомбі на ім'я Шон",
      proj_zombie_desc: "Вийшов на веранду випити кави — а тут зомбі. На щастя, є гвинтівка. Парсерний шутер-аркада.",
      proj_cemetery_title: "Цвинтар",
      proj_cemetery_desc: "Міні-розповідь про те, що відбувається вночі, коли всі сплять. Без загадок — зате 4 кінцівки та кілька шляхів.",
      proj_newyear_title: "Новорічні казки",
      proj_newyear_desc: "Колективна збірка новорічних історій від спільноти QSP. Участь.",
      proj_millioner_title: "Ти мільйонер",
      proj_millioner_desc: "Несподіване багатство — мрія чи кошмар? Ваш вибір визначить результат. Адаптація.",
      proj_terminator_title: "Термінатор: T-XT",
      proj_terminator_desc: "Текстовий квест у всесвіті Термінатора. Адаптація.",
      coming_soon: "Незабаром",
      contact_title: "Контакт", contact_subtitle: "Знайди мене в мережі"
    },

    ka: {
      nav_about: "ჩემ შესახებ", nav_projects: "პროექტები", nav_contact: "კონტაქტი",
      hero_greeting: "გამარჯობა, სამყარო.",
      hero_tagline: "ინჟინერი · გეიმ დეველოპერი · სისტემური არქიტექტი",
      cta_projects: "პროექტები", cta_contact: "დამიკავშირდი",
      about_title: "ჩემ შესახებ",
      about_b1_years: "წელი", about_b2_years: "წელი", about_b3_years: "წელი",
      about_b1_title: "ვებ-განვითარება",
      about_b1_text: "სავიზიტო გვერდებიდან მაღალი დატვირთვის სერვისებამდე: რეკლამა, გაყიდვა და იჯარა, CMS, ანალიტიკა, უსაფრთხოება. ბექენდი — მთავარი სპეციალობა, მაგრამ ვმუშაობდი სრული სტეკით: ფრონტენდი, მონაცემთა ბაზები, ინფრასტრუქტურა, გუნდის მართვა.",
      about_b2_title: "AI და აგენტები",
      about_b2_text: "ჩეთ-ასისტენტებიდან მულტი-აგენტურ სისტემებამდე. ვქმნი სისტემებს, სადაც AI არა მხოლოდ პასუხობს — არამედ მოქმედებს.",
      about_b3_title: "თამაშები და გეიმდევი",
      about_b3_text: "30 წელი გატაცება თამაშებით და იმდენივე — საკუთარი შექმნის სურვილი. ტექსტური თავგადასავლები — პირველი ნაბიჯი. მიზანი — სამყაროების შექმნა, არა მხოლოდ სისტემების მოვლა.",
      about_quote: "ჩემი მიზანი — შექმნა, არა ფულისთვის მუშაობა. ჯერჯერობით — ვაერთიანებ.",
      projects_title: "პროექტები", group_ai: "AI და აგენტები", group_studio: "No More Care სტუდია", group_qsp: "ტექსტური თავგადასავლები",
      proj_masterclaw_desc: "ინტერაქტიული AI გეიმ მასტერი — დინამიური მოთხრობა ხელოვნური ინტელექტის საფუძველზე.",
      proj_jinny_desc: "ავტონომიური თვითმასწავლებელი AI აგენტი პერსონალური გვერდით. დამოუკიდებლად იკვლევს, სწავლობს და ვითარდება.",
      proj_nomorecare_desc: "ინდი სტუდია, რომელიც ფოკუსირებულია უჩვეულო მექანიკის მქონე როგლაიკებზე მოკლე, განმეორებადი სესიებისთვის.",
      proj_terminal_stake_desc: "საფონდო ბაზრის როგლაიკი: იყიდე, გაყიდე, გადაიხადე ქირა, გადარჩი. ფარული Storyteller სისტემა ყალიბებს თითოეულ გარბენს.",
      proj_increMemory_desc: "სწრაფი ავტო-ბეთლერი განახლებების ღრმა მექანიკით. შექმნის პროცესშია.",
      proj_increvolution_desc: "როგლაიკი ევოლუციისა და ეკოსისტემის მართვის შესახებ. შექმნის პროცესშია.",
      proj_filimon1_title: "მამაცი კატა ფილიმონის თავგადასავლები",
      proj_filimon1_desc: "სფინქსის შთამომავალი კატა — მუდამ მშიერი, მუდამ უბედურებაში. იუმორისტული თავგადასავალი.",
      proj_filimon2_title: "მამაცი კატა ფილიმონის ახალი თავგადასავლები",
      proj_filimon2_desc: "გაგრძელება: გემი ვირთაგვებით. მხოლოდ ფილიმონს შეუძლია წესრიგის დამყარება. 5 მიღწევა.",
      proj_relreal_title: "შედარებითი რეალობა",
      proj_relreal_desc: "ნისლიანი მინდორი, გამხმარი ხეები და ლურჯი მატლი სოკოზე. ატმოსფერული კვესტი ალისას სულისკვეთებით. KRIL-2009 მონაწილე.",
      proj_competitors_title: "კონკურენტები",
      proj_competitors_desc: "ხუთი დღე, არდადეგები, 1200 რუბლი. მონაწილეობ მინი-თამაშების კონკურსში გამოცდილების გარეშე. 2-ე ადგილი КоКон-2009-ზე.",
      proj_zombie_title: "ზომბი სახელად შონი",
      proj_zombie_desc: "გავედი ვერანდაზე ყავისთვის — ზომბები გამოჩნდნენ. კარგი, რომ თოფი სახლში იყო. პარსერ-შუტერ არკადა.",
      proj_cemetery_title: "სასაფლაო",
      proj_cemetery_desc: "მინი-მოთხრობა იმის შესახებ, რაც ხდება ღამით, როდესაც ყველა სძინავს. გამოცანები არ არის — მაგრამ 4 დასასრული და რამდენიმე გზა.",
      proj_newyear_title: "ახალი წლის ზღაპრები",
      proj_newyear_desc: "QSP საზოგადოების ახალი წლის მოთხრობათა კოლექტიური ანთოლოგია. მონაწილეობა.",
      proj_millioner_title: "შენ მილიონერი ხარ",
      proj_millioner_desc: "მოულოდნელი სიმდიდრე — ოცნება თუ კოშმარი? შენი არჩევანი განსაზღვრავს ბედს. ადაპტაცია.",
      proj_terminator_title: "ტერმინატორი: T-XT",
      proj_terminator_desc: "ტექსტური თავგადასავალი ტერმინატორის სამყაროში. ადაპტაცია.",
      coming_soon: "მალე",
      contact_title: "კონტაქტი", contact_subtitle: "იპოვე მე ქსელში"
    },

    he: {
      nav_about: "עליי", nav_projects: "פרויקטים", nav_contact: "צור קשר",
      hero_greeting: "שלום, עולם.",
      hero_tagline: "מהנדס · מפתח משחקים · ארכיטקט מערכות",
      cta_projects: "הצג פרויקטים", cta_contact: "צור קשר",
      about_title: "עליי",
      about_b1_years: "שנה", about_b2_years: "שנים", about_b3_years: "שנה",
      about_b1_title: "פיתוח ווב",
      about_b1_text: "מדפי נחיתה ועד שירותי עומס גבוה: פלטפורמות פרסום, שווקים, CMS, אנליטיקה, אבטחה. הצד השרתי הוא הבסיס שלי — אך עבדתי בכל המחסנית: ממשק משתמש, מסדי נתונים, תשתית וניהול צוות.",
      about_b2_title: "AI וסוכנים",
      about_b2_text: "מעוזרי צ'אט ועד צינורות רב-סוכנים. אני בונה מערכות שבהן AI לא רק עונה — אלא פועל.",
      about_b3_title: "משחקים ופיתוח משחקים",
      about_b3_text: "גיימר לכל החיים עם חלום ארוך לא פחות לבנות משחקים. הרפתקאות טקסט היו הצעד הראשון. המטרה — ליצור עולמות, לא רק לתחזק מערכות.",
      about_quote: "המטרה שלי היא לא לעבוד בשביל כסף, אלא ליצור. לעת עתה — משלב את השניים.",
      projects_title: "פרויקטים", group_ai: "AI וסוכנים", group_studio: "No More Care — סטודיו", group_qsp: "משחקי הרפתקאות טקסט",
      proj_masterclaw_desc: "מאסטר משחק AI אינטראקטיבי — סיפור דינמי מבוסס בינה מלאכותית.",
      proj_jinny_desc: "סוכן AI אוטונומי בעל יכולת למידה עצמית ודף אישי. חוקר, לומד ומתפתח באופן עצמאי.",
      proj_nomorecare_desc: "סטודיו אינדי המתמחה ברוגלייקים עם מכניקות יוצאות דופן לסשנים קצרים עם יכולת שחזור גבוהה.",
      proj_terminal_stake_desc: "רוגלייק בבורסה: קנה, מכור, שלם שכירות, שרוד. מערכת Storyteller נסתרת מעצבת כל ריצה.",
      proj_increMemory_desc: "אוטו-באטלר מהיר עם מכניקת שדרוגים עמוקה. בפיתוח.",
      proj_increvolution_desc: "רוגלייק על אבולוציה וניהול מערכת אקולוגית. בפיתוח.",
      proj_filimon1_title: "הרפתקאות החתול האמיץ פיליימון",
      proj_filimon1_desc: "חתול צאצא הספינקס — תמיד רעב, תמיד בצרות. הרפתקה קומית מלאת כאוס.",
      proj_filimon2_title: "ההרפתקאות החדשות של החתול האמיץ פיליימון",
      proj_filimon2_desc: "המשך: ספינה מוצפת חולדות אגרסיביות. רק פיליימון האמיץ יכול להחזיר את הסדר. 5 הישגים.",
      proj_relreal_title: "מציאות יחסית",
      proj_relreal_desc: "כיכר ערפילית, עצים יבשים וזחל כחול על פטרייה. חוויה אטמוספרית בסגנון אליס בארץ הפלאות. משתתף KRIL-2009.",
      proj_competitors_title: "מתחרים",
      proj_competitors_desc: "חמישה ימים, חופשה, 1200 רובל. אתה משתתף בתחרות מיני-משחקים ללא ניסיון — אך עם אמונה מוחלטת. מקום 2 ב-КоКон-2009.",
      proj_zombie_title: "זומבי בשם שון",
      proj_zombie_desc: "יצאתי לשתות קפה — וזומבים הופיעו. כדאי שיש רובה. שוטר-ארקדה מבוסס פרסר.",
      proj_cemetery_title: "בית קברות",
      proj_cemetery_desc: "מיני-סיפור על מה שקורה בלילה כשכולם ישנים. אין חידות — אך 4 סיומות ומספר נתיבים.",
      proj_newyear_title: "סיפורי השנה החדשה",
      proj_newyear_desc: "אנתולוגיה קולקטיבית של סיפורי חג מקהילת QSP. השתתפות.",
      proj_millioner_title: "אתה מיליונר",
      proj_millioner_desc: "עושר בלתי צפוי — חלום או סיוט? גורלך תלוי בבחירות שלך. עיבוד.",
      proj_terminator_title: "טרמינטור: T-XT",
      proj_terminator_desc: "הרפתקת טקסט ביקום הטרמינטור. עיבוד.",
      coming_soon: "בקרוב",
      contact_title: "צור קשר", contact_subtitle: "מצא אותי ברשת"
    }

  };

  /* ── RTL languages ────────────────────────────────────── */
  var RTL_LANGS = ['he', 'ar', 'fa'];

  /* ── STATE ───────────────────────────────────────────── */
  var LANGS = Object.keys(T);
  var current = 'en';

  /* ── DETECT ──────────────────────────────────────────── */
  function detectLang() {
    var saved = localStorage.getItem('lang');
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    var b = (navigator.language || 'en').toLowerCase();
    if (b.startsWith('ru')) return 'ru';
    if (b.startsWith('uk')) return 'uk';
    if (b.startsWith('sr') || b.startsWith('bs') || b.startsWith('hr')) return 'sr';
    if (b.startsWith('ka')) return 'ka';
    if (b.startsWith('he') || b.startsWith('iw')) return 'he';
    return 'en';
  }

  /* ── APPLY ───────────────────────────────────────────── */
  function applyLang(lang) {
    if (!T[lang]) lang = 'en';
    var tr = T[lang];
    current = lang;
    localStorage.setItem('lang', lang);

    // translate elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (tr[key] !== undefined) el.textContent = tr[key];
    });

    // html lang + direction
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.indexOf(lang) !== -1 ? 'rtl' : 'ltr';

    // update dropdown display
    var codeEl = document.getElementById('lang-current-code');
    if (codeEl) codeEl.textContent = lang.toUpperCase();

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      var isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // close dropdown
    closeDropdown();
  }

  /* ── DROPDOWN ────────────────────────────────────────── */
  function openDropdown() {
    var sw = document.getElementById('lang-switcher');
    var toggle = document.getElementById('lang-toggle');
    if (sw) sw.classList.add('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    var sw = document.getElementById('lang-switcher');
    var toggle = document.getElementById('lang-toggle');
    if (sw) sw.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function toggleDropdown() {
    var sw = document.getElementById('lang-switcher');
    if (sw && sw.classList.contains('open')) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  /* ── INIT ────────────────────────────────────────────── */
  function init() {
    applyLang(detectLang());

    // toggle button
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleDropdown();
      });
    }

    // language option buttons
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        applyLang(btn.dataset.lang);
      });
    });

    // close on outside click
    document.addEventListener('click', function (e) {
      var sw = document.getElementById('lang-switcher');
      if (sw && !sw.contains(e.target)) closeDropdown();
    });

    // close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDropdown();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
