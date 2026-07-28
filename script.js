const translations = {
  ru:{
    nav:{design:"Дизайн",dev:"Разработка и IT",texts:"Тексты и переводы",seo:"SEO и трафик",smm:"Соцсети и маркетинг",media:"Аудио, видео, съёмка"},
    header:{login:"Вход",register:"Регистрация"},
    ribbon:{r1:"ОХОТА НА ЛУЧШИХ ИСПОЛНИТЕЛЕЙ",r2:"НОВЫЕ ЗАКАЗЫ КАЖДУЮ МИНУТУ",r3:"HUNTA — ФРИЛАНС МАРКЕТПЛЕЙС"},
    hero:{eyebrow:"Фриланс-маркетплейс нового формата",h1:'Начни свою <em>охоту</em><br>за заказами',lead:"Тысячи заказчиков ищут именно ваши навыки. Разместите услугу за 5 минут и получайте первые заказы уже сегодня.",cta1:"Начать продажи",cta2:"Как это работает",tagLabel:"новых проектов / нед.",videoCaption:"Каждую минуту — новый заказ",videoInfo:"Сотни заказчиков уже нашли своих исполнителей на Hunta"},
    stats:{l1:"Кворки покупают чаще",l2:"Средний заработок / мес.",l3:"Новых проектов в неделю"},
    community:{eyebrow:"Комьюнити",h2:"Присоединяйтесь к охотникам за заказами",p:"Более 30 специальностей уже зарабатывают на Hunta каждый день",ctaTitle:"Кто вы по специальности?"},
    roles:{designer:"Дизайнер",dev:"Веб-разработчик",copy:"Копирайтер",translator:"Переводчик",marketer:"Маркетолог",producer:"Продюсер",editor:"Видеомонтажёр",smm:"СММ-менеджер",mobilographer:"Мобилограф"},
    contact:{write:"Написать"},
    profiles:{
      p1:{name:"Азиз",role:"Графический дизайнер",bio:"Здравствуйте, меня зовут Азиз. Я графический дизайнер с опытом более 1 года. Уверенно работаю в Adobe Illustrator, Adobe Photoshop и Figma. Занимаюсь разработкой полного брендинга, логотипов, SMM-постов, постеров, обложек книг и других видов дизайна. Если хотите визуально выделяться среди конкурентов в своей нише — я тот, кого вы ищете."},
      p2:{name:"Улугбек",role:"Веб-разработчик",bio:"Здравствуйте, меня зовут Улугбек. Я разработчик с опытом более 4 лет. Создаю современные веб-сайты, Telegram-ботов и мобильные приложения — быстро, надёжно и удобно. Также занимаюсь CRM-системами, автоматизацией процессов и различными цифровыми решениями для бизнеса. Если планируете оцифровать бизнес или запустить новый проект — я тот, кого вы ищете."},
      p3:{name:"Исмаил",role:"Fullstack-разработчик / AI-инженер",bio:"Здравствуйте, меня зовут Исмаил. Я fullstack-разработчик и AI automation engineer — помогаю компаниям автоматизировать бизнес-процессы с помощью Telegram-ботов, AI-агентов на базе Claude и GPT, RAG-систем и интеграций с CRM и внешними сервисами. Работаю с Node.js, TypeScript, Vue.js и современными AI-инструментами. Если нужен разработчик, который понимает не только код, но и то, как применять AI для бизнеса — я тот, кого вы ищете."},
      p4:{name:"Мурод",role:"СММ-продвижение",bio:"Здравствуйте! Меня зовут Мурод. Я занимаюсь продвижением в Telegram, Instagram и YouTube: увеличиваю число подписчиков, просмотров, лайков и других показателей активности. Работаю быстро, ответственно и подбираю оптимальное решение под задачи каждого клиента. Если хотите ускорить развитие своего проекта — буду рад помочь."},
      p5:{name:"Дилшодбек",role:"Таргетолог",bio:"Здравствуйте, меня зовут Дилшодбек. Я таргетолог с опытом более 3 лет: создаю и веду эффективные рекламные кампании в Facebook, Instagram и других соцсетях. Моя цель — получить максимум результата от рекламного бюджета и привести вашему бизнесу больше клиентов и продаж. Если хотите развивать бренд через рекламу — я тот, кого вы ищете."}
    },
    steps:{shopTitle:"Магазин услуг",shopTag:"// для исполнителей",exTitle:"Биржа проектов",exTag:"// для тех, кто откликается",
      shop1t:"Создайте карточку",shop1p:"Зарегистрируйтесь и разместите свою услугу в каталоге. Пять минут — и готово.",
      shop2t:"Получите заказ",shop2p:"Заказчики находят вашу услугу и оформляют заказ. Вы получаете уведомление сразу.",
      shop3t:"Сдайте работу",shop3p:"Выполните заказ в срок и получите гарантированную оплату на баланс.",
      ex1t:"Найдите проект",ex1p:"Отслеживайте новые задачи на бирже и откликайтесь на подходящие вам темы.",
      ex2t:"Выполните заказ",ex2p:"Приступайте к работе как можно скорее — это позитивно влияет на рейтинг.",
      ex3t:"Получите оплату",ex3p:"Сдайте готовую работу — оплата поступит на баланс после проверки."},
    testi:{eyebrow:"Отзывы",h2:"Что говорят заказчики",
      q1:"Нашла на Hunta исполнителя для срочной вёрстки книги — успели за три дня, хотя студии отказывались.",w1:"Олеся, издатель",
      q2:"На Hunta нашёл сразу нескольких надёжных подрядчиков — теперь не переживаю за сроки контрактов.",w2:"Дмитрий, директор SMM-агентства",
      q3:"Скорость решает всё в нашем бизнесе. На Hunta чёткие сроки — это уверенность, что задача закрыта вовремя.",w3:"Иван, IT-директор",
      q4:"Запустила новый сайт и настроила рекламу за неделю — первые заявки пришли ещё до полного запуска.",w4:"Мария, карьерный консультант"},
    faq:{eyebrow:"Вопрос — ответ",h2:"Частые вопросы",
      q1:"Как начать зарабатывать на Hunta?",a1:"Зарегистрируйтесь, заполните профиль и разместите первую услугу в каталоге — это займёт около 5 минут.",
      q2:"Сколько времени нужно уделять фрилансу?",a2:"Столько, сколько удобно вам — от пары часов в неделю до полной занятости.",
      q3:"Сколько я могу заработать?",a3:"Заработок зависит от специальности, загрузки и рейтинга — средний показатель на платформе около 4 000 000 сумм/мес.",
      q4:"Как получить оплату за работу?",a4:"После сдачи и проверки заказа оплата автоматически зачисляется на ваш баланс.",
      q5:"Нужно ли платить за аккаунт?",a5:"Нет, регистрация и размещение услуг бесплатны."},
    finalCta:{h2:"Начните охоту прямо сейчас"},
    footer:{tagline:"Фриланс-маркетплейс: находите исполнителей или получайте заказы каждую минуту.",
      h1:"О Hunta",l1:"О проекте",l2:"Пользовательское соглашение",l3:"Способы оплаты",
      h2:"Сообщество",l4:"Блог",l5:"Партнёрская программа",l6:"Кейсы",
      h3:"Полезное",l7:"Покупателям",l8:"Фрилансеру",l9:"Рубрики",
      h4:"Контакты",channel:"Канал: @webflow_siteuz",copy:"© 2026 HUNTA. Все права защищены."},
    auth:{
      tabLogin:"Вход",tabRegister:"Регистрация",
      phoneTitleLogin:"Вход в аккаунт",phoneTitleRegister:"Регистрация",
      phoneHint:"Укажите номер телефона в Telegram — мы отправим код в бота Hunta.",
      getCode:"Получить код",
      codeTitle:"Введите код",
      codeHint:"Код отправлен в Telegram-бот на номер",
      changeNumber:"Изменить номер",
      verify:"Подтвердить",
      resend:"Отправить код повторно",
      resendIn:"Повторно через",
      successTitleLogin:"Вы вошли в аккаунт",
      successTitleRegister:"Регистрация завершена",
      successHint:"Готово! Можно продолжать пользоваться Hunta.",
      errPhone:"Проверьте номер телефона — введите 9 цифр после +998.",
      errCode:"Неверный код. Попробуйте ещё раз.",
      errGeneric:"Не удалось связаться с ботом. Попробуйте ещё раз чуть позже.",
      sending:"Отправляем...",
      checking:"Проверяем..."
    }
  },
  en:{
    nav:{design:"Design",dev:"Dev & IT",texts:"Writing & Translation",seo:"SEO & Traffic",smm:"Social & Marketing",media:"Audio, Video, Photo"},
    header:{login:"Log in",register:"Sign up"},
    ribbon:{r1:"HUNTING THE BEST TALENT",r2:"NEW ORDERS EVERY MINUTE",r3:"HUNTA — FREELANCE MARKETPLACE"},
    hero:{eyebrow:"A new kind of freelance marketplace",h1:'Start your <em>hunt</em><br>for orders',lead:"Thousands of clients are looking for exactly your skills. List a service in 5 minutes and get your first orders today.",cta1:"Start selling",cta2:"How it works",tagLabel:"new projects / week",videoCaption:"A new order every minute",videoInfo:"Hundreds of clients have already found their freelancers on Hunta"},
    stats:{l1:"Gigs get bought this often",l2:"Average earnings / month",l3:"New projects per week"},
    community:{eyebrow:"Community",h2:"Join the hunters for orders",p:"30+ specialities are already earning on Hunta every day",ctaTitle:"What's your specialty?"},
    roles:{designer:"Designer",dev:"Web developer",copy:"Copywriter",translator:"Translator",marketer:"Marketer",producer:"Producer",editor:"Video editor",smm:"SMM manager",mobilographer:"Mobile videographer"},
    contact:{write:"Message"},
    profiles:{
      p1:{name:"Aziz",role:"Graphic designer",bio:"Hi, my name is Aziz. I'm a graphic designer with over 1 year of experience. I work confidently in Adobe Illustrator, Adobe Photoshop and Figma. I create full brand identities, logos, social media posts, posters, book covers and many other design types. If you want to stand out visually from your competitors, I'm the person you're looking for."},
      p2:{name:"Ulugbek",role:"Web developer",bio:"Hi, my name is Ulugbek. I'm a developer with over 4 years of experience. I build modern websites, Telegram bots and mobile apps — fast, secure and convenient. I also work on CRM systems, process automation and various digital solutions for business. If you're planning to digitalize your business or launch a new project, I'm the person you're looking for."},
      p3:{name:"Ismail",role:"Fullstack Developer / AI Engineer",bio:"Hi, my name is Ismail. I'm a fullstack developer and AI automation engineer — I help companies automate business processes with Telegram bots, LLM-based AI agents (Claude, GPT), RAG systems and CRM/API integrations. My stack: Node.js, TypeScript, Vue.js and modern AI tools. If you need a developer who understands not just code but how to apply AI to business, I'm the person you're looking for."},
      p4:{name:"Murod",role:"Social media growth",bio:"Hi! My name is Murod. I grow Telegram, Instagram and YouTube accounts: subscribers, views, likes and other engagement metrics. I work fast and reliably, and tailor the best solution to each client's goals. If you want to speed up your project's growth, I'll be glad to help."},
      p5:{name:"Dilshodbek",role:"Targeting specialist",bio:"Hi, my name is Dilshodbek. I'm a targeting/ads specialist with 3+ years of experience: I build and run effective ad campaigns on Facebook, Instagram and other social networks. My goal is to get the most out of your ad budget and bring more clients and sales to your business. If you want to grow your brand through advertising, I'm the person you're looking for."}
    },
    steps:{shopTitle:"Service shop",shopTag:"// for sellers",exTitle:"Project exchange",exTag:"// for applicants",
      shop1t:"Create a listing",shop1p:"Sign up and list your service in the catalog. Five minutes and you're done.",
      shop2t:"Get an order",shop2p:"Buyers find your service and place an order. You get notified instantly.",
      shop3t:"Deliver the work",shop3p:"Complete the order on time and get guaranteed payment to your balance.",
      ex1t:"Find a project",ex1p:"Track new tasks on the exchange and apply to the ones that suit you.",
      ex2t:"Complete the order",ex2p:"Start work as soon as possible — it boosts your rating.",
      ex3t:"Get paid",ex3p:"Deliver the finished work — payment lands on your balance after review."},
    testi:{eyebrow:"Reviews",h2:"What clients say",
      q1:"Found a Hunta freelancer to prep a book for print in 3 days — no studio could do it that fast.",w1:"Olesya, Publisher",
      q2:"Found several reliable contractors on Hunta at once — no more worrying about contract deadlines.",w2:"Dmitry, SMM Agency Director",
      q3:"Speed decides everything in our business. Hunta's clear deadlines give real confidence.",w3:"Ivan, IT Director",
      q4:"Launched a new site and set up ads within a week — first leads came in before full launch.",w4:"Maria, Career Consultant"},
    faq:{eyebrow:"FAQ",h2:"Frequently asked questions",
      q1:"How do I start earning on Hunta?",a1:"Sign up, fill out your profile and list your first service — it takes about 5 minutes.",
      q2:"How much time does freelancing take?",a2:"As much as suits you — from a couple of hours a week to full-time.",
      q3:"How much can I earn?",a3:"Earnings depend on your specialty, workload and rating — the platform average is about 30,000 ₽/month.",
      q4:"How do I get paid?",a4:"Once the order is delivered and reviewed, payment is credited to your balance automatically.",
      q5:"Do I need to pay for an account?",a5:"No, registration and listing services are free."},
    finalCta:{h2:"Start the hunt right now"},
    footer:{tagline:"A freelance marketplace: find talent or get orders every minute.",
      h1:"About Hunta",l1:"About",l2:"Terms of use",l3:"Payment methods",
      h2:"Community",l4:"Blog",l5:"Affiliate program",l6:"Case studies",
      h3:"Resources",l7:"For buyers",l8:"For freelancers",l9:"Categories",
      h4:"Contact",channel:"Channel: @webflow_siteuz",copy:"© 2026 HUNTA. All rights reserved."},
    auth:{
      tabLogin:"Log in",tabRegister:"Sign up",
      phoneTitleLogin:"Log in",phoneTitleRegister:"Sign up",
      phoneHint:"Enter your Telegram phone number — we'll send a code to the Hunta bot.",
      getCode:"Get code",
      codeTitle:"Enter the code",
      codeHint:"Code sent to the Telegram bot for",
      changeNumber:"Change number",
      verify:"Confirm",
      resend:"Resend code",
      resendIn:"Resend in",
      successTitleLogin:"You're logged in",
      successTitleRegister:"Registration complete",
      successHint:"Done! You can keep using Hunta now.",
      errPhone:"Check your phone number — enter 9 digits after +998.",
      errCode:"Wrong code. Please try again.",
      errGeneric:"Couldn't reach the bot. Please try again shortly.",
      sending:"Sending...",
      checking:"Checking..."
    }
  },
  uz:{
    nav:{design:"Dizayn",dev:"Dasturlash va IT",texts:"Matn va tarjima",seo:"SEO va trafik",smm:"Ijtimoiy tarmoq va marketing",media:"Audio, video, foto"},
    header:{login:"Kirish",register:"Ro'yxatdan o'tish"},
    ribbon:{r1:"ENG YAXSHI IJROCHILARNI OVLASH",r2:"HAR DAQIQADA YANGI BUYURTMA",r3:"HUNTA — FRILANS MARKETPLEYS"},
    hero:{eyebrow:"Yangi formatdagi frilans marketpleysi",h1:"O'z buyurtmalaringiz uchun <em>ovingizni</em><br>boshlang",lead:"Minglab buyurtmachilar aynan sizning ko'nikmalaringizni izlamoqda. Xizmatni 5 daqiqada joylashtiring va bugunoq birinchi buyurtmalarni oling.",cta1:"Sotishni boshlash",cta2:"Bu qanday ishlaydi",tagLabel:"yangi loyiha / hafta",videoCaption:"Har daqiqada yangi buyurtma",videoInfo:"Yuzlab buyurtmachilar Hunta'da o'z ijrochilarini allaqachon topishdi"},
    stats:{l1:"Xizmatlar shu chastotada sotib olinadi",l2:"O'rtacha daromad / oy",l3:"Haftalik yangi loyihalar"},
    community:{eyebrow:"Hamjamiyat",h2:"Buyurtma ovchilariga qo'shiling",p:"30 dan ortiq mutaxassislik egalari Hunta'da har kuni daromad olishmoqda",ctaTitle:"Sizning mutaxassisligingiz qanday?"},
    roles:{designer:"Dizayner",dev:"Veb-dasturchi",copy:"Kopirayter",translator:"Tarjimon",marketer:"Marketolog",producer:"Prodyuser",editor:"Video montajchi",smm:"SMM-menejer",mobilographer:"Mobilograf"},
    contact:{write:"Yozish"},
    profiles:{
      p1:{name:"Aziz",role:"Grafik dizayner",bio:"Assalomu aleykum, ismim Aziz. Men 1 yildan ortiq tajribaga ega grafik dizayneriman. Adobe Illustrator, Adobe Photoshop va Figma kabi dasturlardan mohirona foydalanaman. Men to'liq brend identitet, logotip, SMD post, poster, kitob muqova va boshqa ko'plab dizayn turlarini dizaynini qilaman. Agar siz o'z sohangizda raqobatchilaringizdan vizual ustun bo'lishni istasangiz, men siz izlayotgan odamman."},
      p2:{name:"Ulug'bek",role:"Dasturchi",bio:"Assalomu alaykum, ismim Ulug'bek. Men 4 yildan ortiq tajribaga ega dasturchiman. Zamonaviy veb-saytlar, Telegram botlar va mobil ilovalarni tezkor, xavfsiz hamda qulay ko'rinishda ishlab chiqaman. Shuningdek, CRM tizimlari, avtomatlashtirish loyihalari va biznes uchun turli raqamli yechimlarni yarataman. Agar biznesingizni raqamlashtirish yoki yangi loyiha yaratishni rejalashtirayotgan bo'lsangiz, men siz izlayotgan odamman."},
      p3:{name:"Ismoil",role:"Fullstack dasturchi / AI muhandisi",bio:"Assalomu alaykum, ismim Ismoil. Men fullstack dasturchi va AI automation engineerman — kompaniyalarga Telegram botlar, Claude va GPT asosidagi AI-agentlar, RAG tizimlari hamda CRM va tashqi xizmatlar bilan integratsiyalar orqali biznes-jarayonlarni avtomatlashtirishda yordam beraman. Node.js, TypeScript, Vue.js va zamonaviy AI vositalari bilan ishlayman. Agar sizga nafaqat kod yozadigan, balki AI'ni biznesga qanday tatbiq etishni tushunadigan dasturchi kerak bo'lsa — men siz izlayotgan odamman."},
      p4:{name:"Murod",role:"SMM-targ'ibot",bio:"Assalomu alaykum! Ismim Murod. Men Telegram, Instagram va YouTube'da targ'ib qilish bilan shug'ullanaman: obunachilar, ko'rishlar, layklar va boshqa faollik ko'rsatkichlarini oshiraman. Tez, mas'uliyat bilan ishlayman va har bir mijoz uchun eng maqbul yechimni tanlayman. Loyihangiz rivojini tezlashtirmoqchi bo'lsangiz — yordam berishdan mamnun bo'laman."},
      p5:{name:"Dilshodbek",role:"Targetolog",bio:"Assalomu alaykum, ismim Dilshodbek. Men 3 yildan ortiq tajribaga ega targetologman. Facebook, Instagram va boshqa ijtimoiy tarmoqlarda samarali reklama kampaniyalarini yarataman va boshqaraman. Maqsadim — reklama byudjetidan maksimal natija olib, biznesingizga ko'proq mijoz va savdo olib kelish. Agar brendingizni rivojlantirib, reklama orqali yuqori natijalarga erishmoqchi bo'lsangiz, men siz izlayotgan mutaxassisman."}
    },
    steps:{shopTitle:"Xizmatlar do'koni",shopTag:"// ijrochilar uchun",exTitle:"Loyihalar birjasi",exTag:"// murojaat qiluvchilar uchun",
      shop1t:"Karta yarating",shop1p:"Ro'yxatdan o'ting va xizmatingizni katalogga joylashtiring. Besh daqiqa — va tayyor.",
      shop2t:"Buyurtma oling",shop2p:"Xaridorlar xizmatingizni topib, buyurtma berishadi. Siz darhol xabar olasiz.",
      shop3t:"Ishni topshiring",shop3p:"Buyurtmani muddatida bajaring va balansingizga kafolatlangan to'lovni oling.",
      ex1t:"Loyiha toping",ex1p:"Birjadagi yangi topshiriqlarni kuzatib boring va o'zingizga mos mavzularga murojaat qiling.",
      ex2t:"Buyurtmani bajaring",ex2p:"Ishni imkon qadar tezroq boshlang — bu reytingingizga ijobiy ta'sir qiladi.",
      ex3t:"To'lovni oling",ex3p:"Tayyor ishni topshiring — tekshiruvdan so'ng to'lov balansingizga tushadi."},
    testi:{eyebrow:"Fikrlar",h2:"Buyurtmachilar nima deyishadi",
      q1:"Hunta'dan kitobni shoshilinch tayyorlash uchun ijrochi topdim — 3 kunda ulgurishdi, biror studiya buni qila olmagan edi.",w1:"Olesya, nashriyotchi",
      q2:"Hunta'da bir vaqtning o'zida bir nechta ishonchli ijrochi topdim — endi shartnoma muddatlari haqida xavotir olmayman.",w2:"Dmitriy, SMM-agentlik direktori",
      q3:"Bizning bizneste tezlik hal qiluvchi omil. Hunta'da aniq muddatlar — vazifa o'z vaqtida bajarilishiga ishonch beradi.",w3:"Ivan, IT-direktor",
      q4:"Bir hafta ichida yangi sayt ishga tushirdim va reklamani sozladim — to'liq ishga tushishdan oldin birinchi murojaatlar kela boshladi.",w4:"Mariya, karyera konsultanti"},
    faq:{eyebrow:"Savol — javob",h2:"Ko'p beriladigan savollar",
      q1:"Hunta'da qanday daromad qila boshlash mumkin?",a1:"Ro'yxatdan o'ting, profilingizni to'ldiring va birinchi xizmatingizni katalogga joylashtiring — bu taxminan 5 daqiqa vaqt oladi.",
      q2:"Frilansga qancha vaqt ajratish kerak?",a2:"Sizga qulay bo'lgancha — haftasiga bir necha soatdan to to'liq bandlikkacha.",
      q3:"Qancha daromad qilishim mumkin?",a3:"Daromad mutaxassislik, bandlik va reytingga bog'liq — platformadagi o'rtacha ko'rsatkich oyiga taxminan 30 000 ₽.",
      q4:"Ish uchun to'lovni qanday olsam bo'ladi?",a4:"Buyurtma topshirilib tekshirilgandan so'ng, to'lov avtomatik ravishda balansingizga tushadi.",
      q5:"Akkaunt uchun to'lov qilish kerakmi?",a5:"Yo'q, ro'yxatdan o'tish va xizmatlarni joylashtirish bepul."},
    finalCta:{h2:"Ovni hozir boshlang"},
    footer:{tagline:"Frilans marketpleysi: ijrochilarni toping yoki har daqiqada buyurtma oling.",
      h1:"Hunta haqida",l1:"Loyiha haqida",l2:"Foydalanuvchi shartnomasi",l3:"To'lov usullari",
      h2:"Hamjamiyat",l4:"Blog",l5:"Hamkorlik dasturi",l6:"Keyslar",
      h3:"Foydali",l7:"Xaridorlarga",l8:"Frilanserga",l9:"Ruknlar",
      h4:"Aloqa",channel:"Kanal: @webflow_siteuz",copy:"© 2026 HUNTA. Barcha huquqlar himoyalangan."},
    auth:{
      tabLogin:"Kirish",tabRegister:"Ro'yxatdan o'tish",
      phoneTitleLogin:"Akkauntga kirish",phoneTitleRegister:"Ro'yxatdan o'tish",
      phoneHint:"Telegram raqamingizni kiriting — Hunta botiga kod yuboramiz.",
      getCode:"Kod olish",
      codeTitle:"Kodni kiriting",
      codeHint:"Kod quyidagi raqamga Telegram-botga yuborildi",
      changeNumber:"Raqamni o'zgartirish",
      verify:"Tasdiqlash",
      resend:"Kodni qayta yuborish",
      resendIn:"Qayta yuborish",
      successTitleLogin:"Tizimga kirdingiz",
      successTitleRegister:"Ro'yxatdan o'tish yakunlandi",
      successHint:"Tayyor! Hunta'dan foydalanishni davom ettirishingiz mumkin.",
      errPhone:"Telefon raqamini tekshiring — +998 dan keyin 9 ta raqam kiriting.",
      errCode:"Kod noto'g'ri. Qayta urinib ko'ring.",
      errGeneric:"Bot bilan bog'lanib bo'lmadi. Birozdan so'ng qayta urinib ko'ring.",
      sending:"Yuborilmoqda...",
      checking:"Tekshirilmoqda..."
    }
  }
};

let currentLang = 'ru';

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const path = el.getAttribute('data-i18n').split('.');
    let val = translations[lang];
    path.forEach(p=>val = val ? val[p] : null);
    if(val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const path = el.getAttribute('data-i18n-html').split('.');
    let val = translations[lang];
    path.forEach(p=>val = val ? val[p] : null);
    if(val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-lang-btn]').forEach(b=>{
    b.classList.toggle('active', b.dataset.langBtn === lang);
  });
  if(typeof updateAuthTexts === 'function') updateAuthTexts();
}

document.querySelectorAll('[data-lang-btn]').forEach(btn=>{
  btn.addEventListener('click', ()=>applyLang(btn.dataset.langBtn));
});
applyLang('ru');

document.getElementById('themeToggle').addEventListener('click', ()=>{
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});

document.querySelectorAll('.faq-item').forEach(item=>{
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click',()=>{
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o=>{
      o.classList.remove('open');
      o.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

/* ---------- PROFILE MODAL ---------- */
const modalOverlay = document.getElementById('profileModalOverlay');
const modalClose = document.getElementById('modalClose');
const modalPhoto = document.getElementById('modalPhoto');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');
const modalWriteBtn = document.getElementById('modalWriteBtn');

function openProfileModal(card){
  const key = card.dataset.profile;
  const data = translations[currentLang].profiles[key];
  if(!data) return;
  const photoSrc = card.querySelector('img').getAttribute('src');
  modalPhoto.src = photoSrc;
  modalName.textContent = data.name;
  modalRole.textContent = data.role;
  modalBio.textContent = data.bio;
  modalWriteBtn.href = card.dataset.tg;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProfileModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.profile-card').forEach(card=>{
  card.addEventListener('click', (e)=>{
    if(e.target.closest('.write-btn')) return;
    openProfileModal(card);
  });
  const writeBtn = card.querySelector('.write-btn');
  writeBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    window.open(card.dataset.tg, '_blank');
  });
});

modalClose.addEventListener('click', closeProfileModal);
modalOverlay.addEventListener('click', (e)=>{
  if(e.target === modalOverlay) closeProfileModal();
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeProfileModal();
});

/* ---------- AUTH MODAL (вход / регистрация через телефон + код из Telegram-бота) ----------
   ВАЖНО: requestAuthCode() и verifyAuthCode() ниже — это ЗАГЛУШКИ.
   Реальный запрос кода и его проверка должны идти в ваш Telegram-бот (тот же бэкенд,
   что уже используется в ваших aiogram-проектах). Просто замените тела этих двух
   функций на fetch() к своим эндпоинтам, например:
     POST /api/auth/request-code   { phone }        -> бот отправляет код пользователю в Telegram
     POST /api/auth/verify-code    { phone, code }   -> бот подтверждает код и возвращает токен/сессию
   Повторный вход (если сессия слетела) устроен той же логикой: пользователь снова
   вводит номер телефона, бот присылает новый код, пользователь вводит его — это
   ровно тот же экран "Вход" ниже. ---------- */

const authOverlay   = document.getElementById('authModalOverlay');
const authClose     = document.getElementById('authModalClose');
const authTabs      = document.querySelectorAll('.auth-tab');
const authSteps     = document.querySelectorAll('.auth-step');
const authPhoneInput   = document.getElementById('authPhoneInput');
const authPhoneError   = document.getElementById('authPhoneError');
const authSendCodeBtn  = document.getElementById('authSendCodeBtn');
const authPhoneTitle   = document.getElementById('authPhoneTitle');
const authPhoneDisplay = document.getElementById('authPhoneDisplay');
const authChangePhone  = document.getElementById('authChangePhone');
const authCodeInput    = document.getElementById('authCodeInput');
const authCodeError    = document.getElementById('authCodeError');
const authVerifyBtn    = document.getElementById('authVerifyBtn');
const authResendBtn    = document.getElementById('authResendBtn');
const authSuccessTitle = document.getElementById('authSuccessTitle');

let authTab = 'login';       // 'login' | 'register'
let authPhone = '';          // текущий номер в формате +998XXXXXXXXX
let resendTimerId = null;
let resendSeconds = 0;

function t(key){
  const path = key.split('.');
  let val = translations[currentLang];
  path.forEach(p=>val = val ? val[p] : null);
  return val || '';
}

function updateAuthTexts(){
  authTabs.forEach(btn=>{
    btn.textContent = t('auth.tab' + (btn.dataset.authTab === 'login' ? 'Login' : 'Register'));
    btn.classList.toggle('active', btn.dataset.authTab === authTab);
  });
  authPhoneTitle.textContent = t('auth.phoneTitle' + (authTab === 'login' ? 'Login' : 'Register'));
  authSuccessTitle.textContent = t('auth.successTitle' + (authTab === 'login' ? 'Login' : 'Register'));
  authPhoneDisplay.textContent = '+998' + authPhone;
}

function showAuthStep(step){
  authSteps.forEach(s=>{
    s.hidden = s.dataset.authStep !== step;
  });
}

function resetAuthModal(){
  authPhoneInput.value = '';
  authCodeInput.value = '';
  authPhoneError.textContent = '';
  authCodeError.textContent = '';
  authSendCodeBtn.disabled = false;
  authSendCodeBtn.textContent = t('auth.getCode');
  authVerifyBtn.disabled = false;
  authVerifyBtn.textContent = t('auth.verify');
  stopResendCountdown();
  showAuthStep('phone');
}

function openAuthModal(tab){
  authTab = tab === 'register' ? 'register' : 'login';
  resetAuthModal();
  updateAuthTexts();
  authOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  authPhoneInput.focus();
}

function closeAuthModal(){
  authOverlay.classList.remove('open');
  document.body.style.overflow = '';
  stopResendCountdown();
}

authTabs.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    authTab = btn.dataset.authTab;
    resetAuthModal();
    updateAuthTexts();
  });
});

authClose.addEventListener('click', closeAuthModal);
authOverlay.addEventListener('click', (e)=>{ if(e.target === authOverlay) closeAuthModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && authOverlay.classList.contains('open')) closeAuthModal(); });

// открытие модалки: логин/регистрация в шапке, пункты меню, все CTA "начать/зарегистрироваться"
document.getElementById('loginLink').addEventListener('click', (e)=>{ e.preventDefault(); openAuthModal('login'); });
document.getElementById('registerLink').addEventListener('click', (e)=>{ e.preventDefault(); openAuthModal('register'); });
document.querySelectorAll('.js-open-register').forEach(el=>{
  el.addEventListener('click', (e)=>{ e.preventDefault(); openAuthModal('register'); });
});
// клик по разделам в шапке (Дизайн, Разработка и IT, ...) — просим зарегистрироваться
document.querySelectorAll('.nav-link').forEach(el=>{
  el.addEventListener('click', (e)=>{ e.preventDefault(); openAuthModal('register'); });
});

authPhoneInput.addEventListener('input', ()=>{
  authPhoneInput.value = authPhoneInput.value.replace(/\D/g,'').slice(0,9);
});
authCodeInput.addEventListener('input', ()=>{
  authCodeInput.value = authCodeInput.value.replace(/\D/g,'').slice(0,5);
});

authSendCodeBtn.addEventListener('click', ()=>{
  const digits = authPhoneInput.value.replace(/\D/g,'');
  authPhoneError.textContent = '';
  if(digits.length !== 9){
    authPhoneError.textContent = t('auth.errPhone');
    return;
  }
  authPhone = digits;
  authSendCodeBtn.disabled = true;
  authSendCodeBtn.textContent = t('auth.sending');
  requestAuthCode('+998' + digits)
    .then(()=>{
      updateAuthTexts();
      showAuthStep('code');
      authCodeInput.focus();
      startResendCountdown(60);
    })
    .catch(()=>{
      authPhoneError.textContent = t('auth.errGeneric');
    })
    .finally(()=>{
      authSendCodeBtn.disabled = false;
      authSendCodeBtn.textContent = t('auth.getCode');
    });
});

authChangePhone.addEventListener('click', (e)=>{
  e.preventDefault();
  showAuthStep('phone');
  stopResendCountdown();
});

authVerifyBtn.addEventListener('click', ()=>{
  const code = authCodeInput.value.trim();
  authCodeError.textContent = '';
  if(code.length < 4){
    authCodeError.textContent = t('auth.errCode');
    return;
  }
  authVerifyBtn.disabled = true;
  authVerifyBtn.textContent = t('auth.checking');
  verifyAuthCode('+998' + authPhone, code)
    .then(()=>{
      showAuthStep('success');
      stopResendCountdown();
    })
    .catch(()=>{
      authCodeError.textContent = t('auth.errCode');
    })
    .finally(()=>{
      authVerifyBtn.disabled = false;
      authVerifyBtn.textContent = t('auth.verify');
    });
});

authResendBtn.addEventListener('click', ()=>{
  if(authResendBtn.disabled) return;
  authResendBtn.disabled = true;
  requestAuthCode('+998' + authPhone).then(()=>{ startResendCountdown(60); });
});

function startResendCountdown(seconds){
  stopResendCountdown();
  resendSeconds = seconds;
  authResendBtn.disabled = true;
  renderResend();
  resendTimerId = setInterval(()=>{
    resendSeconds -= 1;
    renderResend();
    if(resendSeconds <= 0) stopResendCountdown();
  }, 1000);
}

function stopResendCountdown(){
  if(resendTimerId){ clearInterval(resendTimerId); resendTimerId = null; }
  resendSeconds = 0;
  authResendBtn.disabled = false;
  authResendBtn.textContent = t('auth.resend');
}

function renderResend(){
  if(resendSeconds > 0){
    authResendBtn.disabled = true;
    authResendBtn.textContent = t('auth.resendIn') + ' ' + resendSeconds + 'с';
  } else {
    authResendBtn.disabled = false;
    authResendBtn.textContent = t('auth.resend');
  }
}

// ЗАГЛУШКИ сети — заменить на реальные запросы к Telegram-боту (см. комментарий выше)
function requestAuthCode(phone){
  return new Promise((resolve)=>{
    setTimeout(resolve, 700); // имитация отправки кода ботом
  });
}
function verifyAuthCode(phone, code){
  return new Promise((resolve)=>{
    setTimeout(resolve, 600); // имитация проверки кода ботом
  });
}
