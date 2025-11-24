// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    question: "Microsoft Office dasturlar to’plamidagi WORD dasturi bu - ?",
    answer: "Matn muharriri",
    options: [
      "Jadvallar, matematik va logik funksiyalarni bajaradigan redaktor.",
      "Matn muharriri",
      "Rasmlar redaktori",
    ],
  },
  {
    question:
      "WORD matn redaktorida matnni yozish standartlariga ko’ra qaysi shrift turini qo’llash lozim ?",
    answer: "Times New Roman",
    options: ["Corbel Light", "Times New Roman", "Arial Black"],
  },
  {
    question:
      "WORD matn redaktorida yangi list yaratish uchun qaysi klavishlardan foydalaniladi?",
    answer: "Ctrl+Enter",
    options: ["Shift+Alt", "Ctrl+Tab", "Ctrl+Enter"],
  },
  {
    numb: 4,
    question:
      "WORD matn redaktori dasturida SO’ZNI qalin qilib yozish uchun qaysi funktsiyadan foydalanish kerak ?",
    answer: "Ж",
    options: ["Ч", "Ж", "К "],
  },
  {
    question:
      "WORD matn redaktori dasturida SO’ZNI yotiq yozuv usulida yozish uchun qaysi funktsiyadan foydalanish kerak ?",
    answer: "К",
    options: ["Ж", "Ч", "К"],
  },
  // {
  //   question:
  //     "Kerakli bo’lgan matnni nusxalash uchun qaysi klavishlardan foydalanish kerak ?",
  //   answer: "Ctrl+C",
  //   options: ["Ctrl+C", "Ctrl+L", "Ctrl+A"],
  // },
  {
    question:
      "WORD matn redaktorida varaqni chegara atrofida rasmlar, maxsus bezaklarni o’rnatish uchun qaysi funktsiyadan foydalanish kerak ?",
    answer: "Конструктор→Границы страниц → Страница→Рисунок",
    options: [
      "Вставка → Иллюстрация→Рисунок",
      "Конструктор→Границы страниц → Страница→Рисунок",
      "Макет→ Параметры страницы → Поля",
    ],
  },
  {
    question:
      "Wordda hujjat ekranining ko`rinishini o`zgartirish uchun menyuning qaysi bo`limidan foydalaniladi?",
    answer: "Vid",
    options: ["Vstavka", "Format", "Vid"],
  },
  {
    question: "9)	Wordda shriftni tanlash qaysi menyuda ko`rsatilgan? ",
    answer: "Glavnaya",
    options: ["Fayl", "Vstavka", "Glavnaya"],
  },
  {
    question:
      "Matndagi belgilarni o`chirish qaysi tugmalar yordamida amalga oshiriladi?",
    answer: "BackSpace va Delete tugmalari yordamida",
    options: [
      "Shift tugmasi yordamida",
      "Tab tugmasi yordamida",
      "BackSpace va Delete tugmalari yordamida",
    ],
  },
  {
    question: "Matnni xotirada saqlash qanday yo`l bilan amalga oshiriladi?",
    answer: "Fayl - Soxranit",
    options: ["Fayl - Zakrit", "Fayl - Soxranit", "Fayl – Pechat"],
  },
  // {
  //   question:
  //     "Word tahrirlagichi ishga tushganda kompyuterning o`zi faylga qanday nom beradi?",
  //   answer: "Dokument 1",
  //   options: ["Papka 1", "Dokument 1", "Vid"],
  // },
  {
    question: "[Delete] klavishasining vazifasi.",
    answer: "kursor (yurgich) dan o’ngdagin belgini o’chirish",
    options: [
      "kursor (yurgich) dan o’ngdagin belgini o’chirish",
      "kursor (yurgich) dan chapdagin belgini o’chirish",
      "matn yoki berilganlarni kiritish",
    ],
  },
  {
    question: "Sichqoncha nima uchun kerak?",
    answer: "turli obyektlarni boshqarish uchun",
    options: [
      "matn yozish uchun",
      "ma’lumotlarni chop etish uchun",
      "turli obyektlarni boshqarish uchun",
    ],
  },
  {
    question: "Backspace  [¬ ]  klavishining vazifasi.",
    answer: "Kursordan chapgdagi belgini o’chiradi",
    options: [
      "Kursordan o’ngdagi belgini o’chiradi",
      "Kursordan chapgdagi belgini o’chiradi",
      "matn yoki berilganlarni kiritadi",
    ],
  },
  {
    question:
      "Matnni yo’zayotganda keyingi satrga o’tish uchun qaysi tugmachadan foydalaniladi?",
    answer: "Enter",
    options: ["Tab", "Enter", "Alt"],
  },
  {
    question: "! @ # $ % ^ & * ( ) belgilari qanday yoziladi?",
    answer: "Shift va raqamlardagi mos belgilarni bosgan xolda",
    options: [
      "Shift va raqamlardagi mos belgilarni bosgan xolda",
      "Ctrl va raqamlardagi mos belgilarni bosgan xolda",
      "Alt va raqamlardagi mos belgilarni bosgan xolda",
    ],
  },
  {
    question: "[Caps Lock] klavishini vazifasi?",
    answer: "katta harf holatiga o‘tadi",
    options: [
      "bo‘sh joy qoldiradi",
      "katta harf holatiga o‘tadi",
      "belgi o‘chiradi",
    ],
  },
  // {
  //   question: "Axborotning eng kichik o’lchov birligi?",
  //   answer: "Bit",
  //   options: ["Bayt", "Bit", "Bit va bayt"],
  // },
  {
    question: "Kompyuterni jami nechta o’chirish usuli mavjud ?",
    answer:
      "3 ta (Tizimli blokdagi tugmani bosib, Alt+F4→ Завершение работы, Ish stolida → PUSK tugmasini bosib →Выключение →Завершение работы)",
    options: [
      "1 ta (Tizimli blokdagi tugmani bosib)",
      "2 ta (Tizimli blokdagi tugmani bosib, Alt+F4→ Завершение работы)",
      "3 ta (Tizimli blokdagi tugmani bosib, Alt+F4→ Завершение работы, Ish stolida → PUSK tugmasini bosib →Выключение →Завершение работы)",
    ],
  },
  {
    question:
      "Kompyuterni yoqqanimizda birinchi bo’lib qanaqa dastur bilan muloqotga chiqamiz ?",
    answer: "Operatsion tizim bilan",
    options: [
      "Word dasturi bilan",
      "Excel dasturi bilan",
      "Operatsion tizim bilan",
    ],
  },
  {
    question: "Monitor bu-?",
    answer: "Vizual axborotni foydalanuvchiga taqdim etuvchi qurilma",
    options: [
      "Videokarta foydalanuvchiga videolarni taqdim etuvchi qurulma",
      "Vizual axborotni foydalanuvchiga taqdim etuvchi qurilma",
      "Rasmni taqdim etuvchi qurilma",
    ],
  },
  {
    numb: 23,
    question: "Printer bu-?",
    answer: "Raqamli axborotlarni chop etuvchi qurulma",
    options: [
      "Xujjatlar redaktori",
      "Rasmlar redaktori",
      "Raqamli axborotlarni chop etuvchi qurulma",
    ],
  },
  {
    question: "Skaner bu-?",
    answer: "Qog’ozdagi axborotlarni raqamlashtiradigan qurulma",
    options: [
      "Raqamli axborotlarni chop etuvchi qurulma",
      "Qog’ozdagi axborotlarni raqamlashtiradigan qurulma",
      "Rasmlarni raqamlashtiradigan qurulma",
    ],
  },
  // {
  //   question:
  //     "O‘zi nomi, kengaytmasi va hajmiga ega bo‘lgan u yoki bu turdagi axborotlarni o‘zida jamlagan ob’ekt qanday nomlanadi?",
  //   answer: "Fayl",
  //   options: ["Fayl", "Papka", "Yorliq"],
  // },
  // {
  //   question:
  //     "Diskda o‘z nomiga ega bo‘lgan va o‘zida turli fayl obyektlarini va yorliqlarni jamlagan obyekt qanday nomlanadi?",
  //   answer: "Papka",
  //   options: ["Papka", "Fayl", "Yorliq"],
  // },
  // {
  //   question:
  //     "Ctrl+Shift yoki Alt+Shift tugmalar birikmasi qanday vazifani bajaradi?",
  //   answer: "Klaviatura kiritish tilini almashtiradi",
  //   options: [
  //     "Matnlarni bir tildan boshqasiga o‘giradi",
  //     "Sichqoncha ko‘rsatkichini o‘zgartiradi",
  //     "Klaviatura kiritish tilini almashtiradi",
  //   ],
  // },
  {
    question:
      "Klaviaturaning qaysi tugmasi yordamida obyektlarni o‘chirish mumkin?",
    answer: "Delete",
    options: ["End", "F8", "Delete"],
  },
  // {
  //   question:
  //     "Bir guruh fayllar va papkalarni ketma-ket belgilash uchun klaviaturaning qaysi tugmasidan foydalaniladi?",
  //   answer: "Shift",
  //   options: ["Esc", "Enter", "Shift"],
  // },
  {
    question:
      "Odatda Korzinadan obyektlarni tiklash jarayonida obyektlar qayerga tiklanadi?",
    answer: "O‘chirilgan vaqtdagi asl joyiga",
    options: [
      "“Мой компьютер” papkasiga",
      "O‘chirilgan vaqtdagi asl joyiga",
      "Foydalanuvchi tomonidan ko‘rsatilgan joyga",
    ],
  },

  // {
  //   question:
  //     "Qaysi tugmalar birikmasi yordamida ob’ektlar almashish buferiga kesib olinadi",
  //   answer: "Ctrl+X",
  //   options: ["Ctrl+C", "Ctrl+X", "Alt+C"],
  // },
  {
    question:
      "Axborotlarni ekranda tasvirlash xususiyatiga ega bo‘lgan qurilmani ko‘rsating.",
    answer: "Monitor",
    options: ["Modem", "Skaner", "Monitor"],
  },
  // {
  //   question: "Quyidagilardan qaysi biri grafik muharrir?",
  //   answer: "PAINT",
  //   options: ["BASIC", "PAINT", "EXCEL"],
  // },
  // {
  //   question: "Bir bayt necha bitga teng?",
  //   answer: "8",
  //   options: ["2", "8", "10"],
  // },
  // {
  //   question: "Kompyuterni yig‘ishda protsessor qaysi qurilmaga mahkamlanadi?",
  //   answer: "Asosiy (ona) plataga",
  //   options: ["Asosiy (ona) plataga", "Elektr manba blokiga", "Vinchesterga"],
  // },
  // {
  //   question:
  //     "Belgisi ish stolida joylashgan dasturni qanday ishga tushirish mumkin?",
  //   answer:
  //     "dastur belgisi ustida sichqonchaning chap klavishasini ikki marta bosish bilan",
  //   options: [
  //     "dastur belgisi ustida sichqonchaning chap klavishasini ikki marta bosish bilan",
  //     "dastur belgisi ustida sichqonchaning chap klavishasini bir marta bosish bilan",
  //     "dastur belgisi ustida sichqonchaning o`ng klavishasini ikki marta bosish bilan",
  //   ],
  // },
  {
    question: "Windowsda turib kompyuterni qanday to`g`ri o`chirish kerak? ",
    answer:
      "“Pusk” menyusidagi “Zaversheniye raboti” buyrug`ini tanlab, “Viklyuchit kompyuter” bo`limini bosib, “Da” tugmachasini bosish kerak.",
    options: [
      "“Pusk” menyusidagi “Zaversheniye raboti” buyrug`ini tanlab, “Viklyuchit kompyuter” bo`limini bosib, “Da” tugmachasini bosish kerak.",
      "Sistemali blokda “Power” tugmachasini bosish kerak",
      "Yuqoridagi usullar bilan kompyuterni to`g`ri o`chirib bo`lmaydi.",
    ],
  },
  {
    question: "Ish stolida papka qanday tashkil yetiladi?",
    answer:
      "ish stolida sichqonchaning o`ng klavishasini bir marta bosib, “Sozdat” menyusida “Papka” bo`limini tanlash",
    options: [
      "“Pusk” tugmachasida bir marta sichqonchaning chap klavishasini bosib, “Sozdat” menyusida “Papka” bo`limini tanlash",
      "ish stolida sichqonchaning chap klavishasini bir marta bosib, “Sozdat” menyusida “Papka” bo`limini tanlash",
      "ish stolida sichqonchaning o`ng klavishasini bir marta bosib, “Sozdat” menyusida “Papka” bo`limini tanlash",
    ],
  },
  {
    question: "“ Korzina” nima uchun xizmat qiladi?",
    answer: "yo`qotilgan fayllarni vaqtincha saqlash uchun",
    options: [
      "foydalanuvchining fayllarini saqlash uchun",
      "yo`qotilgan fayllarni vaqtincha saqlash uchun",
      "pochta va faks xabarlarni saqlash uchun",
    ],
  },
  // {
  //   question: "Faol va faol bo`lmagan oynalarni qanday ajratish mumkin?",
  //   answer: "oyna o`lchamidan",
  //   options: ["oyna o`lchamidan", "oynadagi matndan", "oyna nomining rangidan"],
  // },
  {
    numb: 41,
    question:
      "Kerakli obyektlarni qidirish ПУСК menyusiningning qaysi bo`limi orqali bajariladi?",
    answer: "Nayti",
    options: ["Dokumenti", "Spravka", "Nayti"],
  },
  // {
  //   question: "Grafik muharrirlar qanday dastur?",
  //   answer: "grafik tasvirlar bilan ishlash",
  //   options: [
  //     "matnning grafikdagi aksini hosil qilish",
  //     "shriftning ko`rinishi va shaklini tahrir qilish",
  //     "grafik tasvirlar bilan ishlash",
  //   ],
  // },
  // {
  //   question: "Paint grafik muharriri yordamida … mumkin",
  //   answer: "grafik tasvir yasash va tahrir qilish",
  //   options: [
  //     "grafik tasvir yasash va tahrir qilish",
  //     "shriftning ko`rinishi va shaklini tahrir qilish",
  //     "grafik tasvirga animatsiya o`rnatish",
  //   ],
  // },
  // {
  //   numb: 44,
  //   question:
  //     "Kompyuterga ishlov beradigan ma`lumotlar elementlari qanday raqamlardan tuzilgan? ",
  //   answer: "0 va 1",
  //   options: ["0 va 1", "0,1, ... .., 10", "0,1, ...., 8"],
  // },
  {
    question: "1 Mbayt necha Kbaytni tashkil yetadi?",
    answer: "1024 Kbaytni",
    options: ["1024 Kbaytni", "108576 Kbaytni", "2048 Kbaytni"],
  },
  {
    question: "Qanday operasion tizimlar mavjud?",
    answer: "Windows",
    options: ["Office 365", "Windows", "Unit"],
  },
  // {
  //   question: "2 x 2 K bayt necha kbaytga teng bo’ladi?",
  //   answer: "4096 bayt",
  //   options: ["4096 bayt", "2048 bayt ", "1024 bayt "],
  // },
  // {
  //   question:
  //     "Windows oynalaridagi <img src='imgr.jpg' alt='thank'> piktogram-malar nima uchun xizmat qiladi?",
  //   answer:
  //     "oynani vaqtinchalik ish stolidan masalalar paneliga olib qo’yish ,oynani ekran bo’ylab kattalashtirish, oynani yopish uchun xizma qiladi",
  //   options: [
  //     "oynani yopish, oynani vaqtinchalik ish stolidan masalalar paneliga olib qo’yish, oynani ekran bo’ylab kattalashtirish uchun xizma qiladi",
  //     "oynani vaqtinchalik ish stolidan masalalar paneliga olib qo’yish ,oynani ekran bo’ylab kattalashtirish, oynani yopish uchun xizma qiladi",
  //     "oynani ekran bo’ylab kattalashtirish, oynani yopish uchun, oynani vaqtinchalik ish stolidan masalalar paneliga olib qo’yish xizma qiladi",
  //   ],
  // },
  {
    question: "Klaviatura nima vazifani bajaradi?",
    answer: "Ma’lumotlarni kiritadi",
    options: [
      "Ma’lumotlarni ekranda namoyon qiladi",
      "Ma’lumotlarni kiritadi",
      "Ma’lumotlarni chiqaradi",
    ],
  },
  {
    question:
      "Kompyuterda tayyorlangan rasmlar va matnlar qaysi qurilma orqali chop etiladi?",
    answer: "printer",
    options: ["skaner", "printer", "plotter"],
  },
  {
    question: "Ish stolida ko‘pi bilan nechta papka hosil qilsih mumkin?",
    answer: "Keragicha",
    options: ["40 ta", "3 ta ", "Keragicha"],
  },
  // {
  //   question: "“Print Screen” klavishini vazifasi?",
  //   answer: "Monitordagi ko‘rinishni xotiraga oladi",
  //   options: [
  //     "Monitordagi ko‘rinishni xotiraga oladi",
  //     "Amalni bajarilishini ma’lum vaqtga to‘xtatadi",
  //     "Harf yoki belgini almashtiradi",
  //   ],
  // },
  {
    question: "Operatsion sistema nima?",
    answer: "kompyuterni ishga tushiruvchi dastur",
    options: [
      "matn muharriri",
      "rasm chizish uchun dastur",
      "kompyuterni ishga tushiruvchi dastur",
    ],
  },
  // {
  //   question: "Jadvalda boshqa kataklarga o’tish uchun qaysi klavish bosiladi?",
  //   answer: "Tab",
  //   options: ["Shift", "Tab", "Caps lock"],
  // },
  // {
  //   question:
  //     "Agar tayyorlangan jadval yuqorisiga satr qo’shish kerak bo’lsa, qaysi amal bajariladi: Sichqonchaning o’ng tugmasi-Вставка-…",
  //   answer: "Satr bo‘yi",
  //   options: ["Satr yuqoriga", "Satr eniga", "Satr bo‘yi"],
  // },
  {
    question:
      "Microsoft Excel dasturida yangi hujjat yaratilganda, odatda avtomatik ravishda dastur tomonidan unga qanday nom beriladi",
    answer: "“Листы 1”",
    options: ["“Документ 1”", "“Листы 1”", "“Книга 1”"],
  },
  // {
  //   question:
  //     "Microsoft Excel jadvallarida sichqonchaning qaysi harakati katakka o‘zgartirish kiritish imkonini beradi",
  //   answer: "Chap tugma bilan ikki marta bosish",
  //   options: [
  //     "O‘ng tugma bilan ikki marta bosish",
  //     "O‘ng tugma bilan bir marta bosish",
  //     "Chap tugma bilan ikki marta bosish",
  //   ],
  // },
  // {
  //   question:
  //     "Microsoft Excel jadvallarida quyidagi amallarning qaysi birining natijasida YOLG‘ON qiymati hosil bo‘ladi",
  //   answer: "=“Shahar” < “Respublika”",
  //   options: [
  //     "=12 < 23",
  //     "=“Shahar” < “Respublika”",
  //     "=“Respublika” < “Shahar”",
  //   ],
  // },
  {
    question: "Microsoft Excel – bu:",
    answer: "Elektron jadval muxarriri",
    options: [
      "Elektron pochta",
      "Ma’lumotlar bazasi",
      "Elektron jadval muxarriri",
    ],
  },
  {
    question:
      "Microsoft Excel jadvallarida formulalar yozish qaysi belgidan boshlanadi",
    answer: "=",
    options: ["?", "-", "="],
  },
  // {
  //   question:
  //     "Kompyuter diskida yoki ixtiyoriy axborot tashuvchida joylashgan “*.xls” kengaytmali faylga sichqoncha ko‘rsatkichi bilan ikki marta bosilsa qanday jarayon sodir bo‘ladi?",
  //   answer:
  //     "Microsoft Excel dasturi ishga tushiriladi va unga tanlangan hujjat yuklanadi",
  //   options: [
  //     "Microsoft WordPad dasturi ishga tushiriladi va unga tanlangan hujjat yuklanadi",
  //     "Microsoft PowerPoint dasturi ishga tushiriladi va unga tanlangan hujjat yuklanadi",
  //     "Microsoft Excel dasturi ishga tushiriladi va unga tanlangan hujjat yuklanadi",
  //   ],
  // },
  {
    question: "Excel ish kitobida kamida nechta sahifa (list) bo‘lishi mumkin",
    answer: "1",
    options: ["1", "3", "2"],
  },
  // {
  //   question:
  //     "Microsoft Excel jadvallarida ustun sarlavhasiga sichqoncha ko‘rsatkichi bilan bosilsa nima sodir bo‘ladi",
  //   answer: "Ustun faollashadi",
  //   options: [
  //     "Kursor tanlangan ustunga o‘rnatiladi",
  //     "Ustun faollashadi",
  //     "Ustun to‘liq belgilanadi",
  //   ],
  // },
  {
    question:
      "Microsoft Excel jadvallarida satr tartib raqamiga (satr nomiga) sichqoncha ko‘rsatkichi bilan bosilsa nima sodir bo‘ladi",
    answer: "Satr to‘liq belgilanadi",
    options: [
      "Kursor tanlangan satga o‘rnatiladi",
      "Satr to‘liq belgilanadi",
      "Satrning ekranda ko‘ringan qismi belgilanadi",
    ],
  },
  {
    question:
      "Internet tarmog‘ining imkoniyatlari to‘g‘ri ko‘rsatilgan qatorni ko‘rsating.",
    answer: "Barchasi to‘g‘ri",
    options: [
      "Ma’lumotlarni nomiga qarab tezda topish, ma’lumotlardan nusxa ko‘chirib olish;",
      "Axborotni o‘qish va tarqatish, xat almashish;",
      "Barchasi to‘g‘ri",
    ],
  },
  {
    numb: 66,
    question:
      "Qaysi javobda veb resurslarning URL manzili to‘g‘ri ko‘rsatilgan",
    answer: "http://www.abt.uz",
    options: ["www://http. abt.uz", "http://www.abt.uz", "test.abt:uz"],
  },
  // {
  //   question:
  //     "Internet tarmog‘idagi qidiruv tizimlarining vazifasini ko‘rsating.",
  //   answer:
  //     "Qidiruv tizimi bu Internet tarmogida ma’lumotlarni qidirish imkoniyatini beradi",
  //   options: [
  //     "Qidiruv tizimi bu Internet tarmogida ma’lumotlarni qidirish imkoniyatini beradi",
  //     "Qidiruv tizimi- bu Internet tarmogida ma’lumotlarni saqlash imkoniyatini beradi",
  //     "Qidiruv tizimi-bu Internet tarmogida ma’lumotlarni bosmaga chiqarish imkoniyatini beradi",
  //   ],
  // },
  // {
  //   question:
  //     "Biror bir sohaga, faoliyatga, voqea va xodisaga bag‘ishlangan ma’lumotlarni o‘zida jamlagan Internet sahifalar majmui qanday ataladi?",
  //   answer: "Veb-sayt",
  //   options: ["Gipermatn", "Veb hujjat", "Veb-sayt"],
  // },
  // {
  //   question:
  //     "Quyidagi texnologiyalarning qaysi birlari orqali Internet tarmog‘iga simsiz ulanish mumkin",
  //   answer: "WiFi, WiMax",
  //   options: ["Bluetooth", "WiFi, WiMax", "Dial-UP"],
  // },
  {
    question:
      "Internet tarmog‘i orqali elektron xabarlarni uzatish va qabul qilish texnologiyasi va u orqali taqdim qilinadigan xizmati turi qanday ataladi?",
    answer: "Elektron pochta",
    options: ["Elektron pochta", "Chat", "WWW"],
  },
  {
    question:
      "Elektron pochta manzillarida quyidagi belgilarning qaysi biri ishlatiladi?",
    answer: "@",
    options: ["@", "%", "&"],
  },
  {
    question: "Internet tarmog‘i bu ....",
    answer: "Global tarmoq",
    options: ["Lokal tarmoq", "Global tarmoq", "Mahalliy tarmoq"],
  },
  // {
  //   question:
  //     "Internet tarmog‘i orqali ko‘rsatiladigan elektron pochta xizmati qanday ataladi?",
  //   answer: "E-mail",
  //   options: ["E-mail", "TSR", "HTML"],
  // },
  // {
  //   question: "Quyidagi dasturlarning qaysi biri Veb-brauzer hisoblanmaydi?",
  //   answer: "Outlook Express",
  //   options: ["Google Chrome", "Firefox Mozilla", "Outlook Express"],
  // },
];
