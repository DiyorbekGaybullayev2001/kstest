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
    question: "Excelda Jadvaldagi qiymatlar orasidan eng kattasini topish funksiyasi qaysi?",
    answer: "MAX()",
    options: [
      "SUMM()",
      "MAX()",
      "MIN()",
    ],
  },
  {
    question: "Word hujjatining standart kengaytmasi (format) qaysi?",
    answer: ".docx",
    options: [
      ".docx",
      ".xlsx",
      ".pptx",
    ],
  },
  {
    question: "Ctrl + C qanday amalni bajaradi?",
    answer: "Nusxalash",
    options: [
      "Kesish",
      "Nusxalash",
      "Joylashtrish",
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
      "Ctrl + X qanday amalni bajaradi?",
    answer: "Kesish",
    options: ["Kesish", "Nusxalash", "Joylashtrish"],
  },
  {
    question:
      "WORD matn redaktorida yangi list yaratish uchun qaysi klavishlardan foydalaniladi?",
    answer: "Ctrl+Enter",
    options: ["Shift+Alt", "Ctrl+Tab", "Ctrl+Enter"],
  },
  {
    question:
      "Ctrl + V nimaga xizmat qiladi?",
    answer: "Joylashtrish",
    options: ["Nusxalash", "Kesish", "Joylashtrish"],
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
  {
    question:
      "Ctrl + Z qanday funksiyani bajaradi?",
    answer: "Orqaga Qaytarish",
    options: ["Orqaga Qaytarish", "O'chirish", "Markazlash"],
  },
  {
    question:
      "Ctrl + P qanday amalni bajaradi?",
    answer: "Chop etish",
    options: ["Chop etish", "Yozish", "Saqlash"],
  },
  {
    question:
      "Internet brauzeri deganda nima tushuniladi?",
    answer: "Google Chrome, Yandex",
    options: ["Word, Excel", "Google Chrome, Yandex", "Windows"],
  },
  {
    question:
      "Excel’da qator va ustun kesishgan joy qanday ataladi?",
    answer: "Ячейка",
    options: ["Ячейка", "Строка", "Столбец"],
  },
  {
    question:
      "Virus nima?",
    answer: "Zararli dastur",
    options: ["Zararli dastur", "Qurilma", "Foydali dastur"],
  },
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
    question:
      "Ctrl + A nimaga xizmat qiladi?",
    answer: "Barcha matnni tanlash",
    options: ["Barcha matnni tanlash", "Barcha matnni nusxalash", "Barcha matnni o'chirish"],
  },
  {
    question: "9)	Wordda shriftni tanlash qaysi menyuda ko`rsatilgan? ",
    answer: "Glavnaya",
    options: ["Fayl", "Vstavka", "Glavnaya"],
  },
  {
    question: "Ctrl + F qanday amalni bajaradi? ",
    answer: "Izlash",
    options: ["Izlash", "Hujjatni saqlaydi", "O'chirish"],
  },
  {
    question:
      "Alt + Tab nima uchun ishlatiladi?",
    answer: "Oynalarni almashtirish",
    options: [
      "Oynalarni almashtirish",
      "Tilni almashtirish",
      "Screenshot",
    ],
  },
  {
    question: "Matnni xotirada saqlash qanday yo`l bilan amalga oshiriladi?",
    answer: "Fayl - Soxranit",
    options: ["Fayl - Zakrit", "Fayl - Soxranit", "Fayl – Pechat"],
  },
  {
    question: "Doimiy xotirada “SSD” va “HDD” qanday farq qiladi?",
    answer: "SSD tezroq, HDD arzonroq va sig‘imi kattaroq bo‘ladi",
    options: ["SSD tezroq, HDD arzonroq va sig‘imi kattaroq bo‘ladi", "SSD arzonroq, HDD tezroq va sig‘imi kattaroq bo‘ladi", "SSD va HDD o‘rtasida farq yo‘q"],
  },
  {
    question:
      "Ctrl + K qaysi amal?",
    answer: "Hyperlink qo‘yish",
    options: ["Nusxalash", "Hyperlink qo‘yish", "Izlash"],
  },
  {
    question:
      "Shrift o‘lchamini o‘zgartirish qaysi joydan amalga oshiriladi?",
    answer: "Главная → Шрифт",
    options: ["Главная → Шрифт", "Вставка → Текст", "Вид → Масштаб"],
  },
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
    question: "Windows + Probel qanday vazifa bajaradi?",
    answer: "Tilni almashtirish",
    options: [
      "Screenshot",
      "Oynalarni almashtirish",
      "Tilni almashtirish",
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
    question: "Excel’da matnni bir nechta qatorga bo‘lish funksiyasi qaysi?.",
    answer: "Перенос текста",
    options: [
      "Перенос текста",
      "Сортировка",
      "Вырезать",
    ],
  },
  {
    question: "Operatsion tizim (OS) nima uchun kerak?",
    answer: "Kompyuterni boshqarish va dasturlarni ishga tushirish uchun",
    options: [
      "Kompyuterni boshqarish va dasturlarni ishga tushirish uchun",
      "Fayllarni boshqarish uchun",
      "Internetga ulanish uchun",
    ],
  },
  {
    question: "Windows + Shift + S nima qiladi?",
    answer: "Ekranning tanlangan qismini skrinshotga olish",
    options: [
      "Oynalarni almashtirish",
      "Ekranning tanlangan qismini skrinshotga olish",
      "Clipboardni ochadi",
    ],
  },
  {
    question:
      "Matnni yozayotganda keyingi satrga o’tish uchun qaysi tugmachadan foydalaniladi?",
    answer: "Enter",
    options: ["Tab", "Enter", "Alt"],
  },
  {
    question:
      "RAM nima ?",
    answer: "Tezkor xotira",
    options: ["Tezkor xotira", "Doimiy xotira", "Fayl tizimi"],
  },
  {
    question:
      "Wordda sahifalarni raqamlash qaysi menyuda?",
    answer: "Вставка → Номер страницы",
    options: ["Вставка → Номер страницы", "Главная → Нумерация", "Разметка страницы → Нумерация"],
  },
  {
    question:
      "Wordda Matnning fon rangini o‘zgartirish qaysi buyruq bilan?",
    answer: "Главная → Фон",
    options: ["Главная → Фон", "Вставка → Текст", "Вид → Масштаб"],
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
  {
    question: "(Корзина) nima?",
    answer: "o'chirilgan fayllarni vaqtincha saqlash joyi",
    options: [
      "o'chirilgan fayllarni vaqtincha saqlash joyi",
      "fayllarni doimiy saqlash joyi",
      "fayllarni zaxira nusxasini saqlash joyi",
    ],
  },
  {
    question: "Excelda Eng kichik qiymatni topish funksiyasi qaysi?",
    answer: "MIN()",
    options: ["MIN()", "MAX()", "SUMM()"],
  },
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
    question:
      "Antivirus nima?",
    answer: "Viruslardan himoya qiluvchi dastur",
    options: [
      "O'yin dasturi",
      "Virus tarqatuvchi dastur",
      "Viruslardan himoya qiluvchi dastur",
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
    question: "Excelda Jadvalga filter qo‘shish uchun qaysi buyruq ishlatiladi?",
    answer: "Фильтр",
    options: [
      "Фильтр",
      "Сортировка",
      "Очистить",
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
  {
    question:
      "Excelda raqamlarni o‘rtacha qiymatini topish funksiyasi qaysi?",
    answer: "СРЗНАЧ()",
    options: ["СРЗНАЧ()", "Очистить", "МИН()"],
  },
  {
    question:
      "Excel fayllari qanday kengaytmaga ega?",
    answer: ".xlsx",
    options: [".xlsx", ".docx", ".pptx"],
  },
  {
    question:
      "PowerPoint fayllari qanday kengaytmaga ega?",
    answer: ".pptx",
    options: [".xlsx", ".docx", ".pptx"],
  },
  {
    question:
      "Kompyuterni bloklash tugmasi ?",
    answer: "Windows + L",
    options: [
      "Windows + D",
      "Windows + L",
      "Windows + V",
    ],
  },
  {
    question:
      "Klaviaturaning qaysi tugmasi yordamida obyektlarni o‘chirish mumkin?",
    answer: "Delete",
    options: ["End", "F8", "Delete"],
  },
  {
    question:
      "Windows + V qaysi amalni bajaradi?",
    answer: "Bufer (Clipboard History) ni ochadi",
    options: ["Bufer (Clipboard History) ni ochadi", "Saqlaydi", "Hyperlink qo‘shadi"],
  },
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

  {
    question:
      "Windows + . qanday amal?",
    answer: "Emoji va smayliklar panelini ochish uchun",
    options: ["Screenshot oladi", "Emoji va smayliklar panelini ochish uchun", "Yangi fayl ochadi"],
  },
  {
    question:
      "Excelda  ЕСЛИ() funksiyasi nima uchun ishlatiladi?",
    answer: "Shartni tekshiradi va natujaga ko‘ra turli qiymat qaytaradi",
    options: [" Tanlangan oraliqda nechta son borligini hisoblaydi", "Shartni tekshiradi va natujaga ko‘ra turli qiymat qaytaradi", "Shartga mos keluvchi nechta qiymat borligini hisoblaydi."],
  },
  {
    question:
      "Axborotlarni ekranda tasvirlash xususiyatiga ega bo‘lgan qurilmani ko‘rsating.",
    answer: "Monitor",
    options: ["Modem", "Skaner", "Monitor"],
  },
  {
    question: "Ctrl + P nima qiladi?",
    answer: "Chop etish oynasini ochadi",
    options: ["Palatino shrifti", "Chop etish oynasini ochadi", "Saxranit oynasini ochadi"],
  },
  {
    question: "Ctrl + Y qanday amal bajaradi?",
    answer: "Oldinga qaytarish",
    options: ["Oldinga qaytarish", "Orqaga qaytarish", "Saqlash"],
  },
  {
    question: "Kompyuter necha qismdan tashkil topgan?",
    answer: "Software va Hardware",
    options: ["Software va Hardware", "Monitor, Sichqoncha, Klaviatura, Protsessor", "Operatsion tizim va Dasturlar"],
  },
  {
    question:
      "Belgisi ish stolida joylashgan dasturni qanday ishga tushirish mumkin?",
    answer:
      "dastur belgisi ustida sichqonchaning chap klavishasini ikki marta bosish bilan",
    options: [
      "dastur belgisi ustida sichqonchaning chap klavishasini ikki marta bosish bilan",
      "dastur belgisi ustida sichqonchaning chap klavishasini bir marta bosish bilan",
      "dastur belgisi ustida sichqonchaning o`ng klavishasini ikki marta bosish bilan",
    ],
  },
   {
    question:
      "Excelda  СЧЁТЕСЛИ() funksiyasi nima uchun ishlatiladi?",
    answer: "Shartga mos keluvchi nechta qiymat borligini hisoblaydi.",
    options: [" Tanlangan oraliqda nechta son borligini hisoblaydi", "Shartni tekshiradi va natujaga ko‘ra turli qiymat qaytaradi", "Shartga mos keluvchi nechta qiymat borligini hisoblaydi."],
  },
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
   {
    question:
      "Excelda  СУММЕСЛИ() funksiyasi nima uchun ishlatiladi?",
    answer: "Shartga mos keladigan qiymatlarni yig‘adi.",
    options: [" Tanlangan oraliqda nechta son borligini hisoblaydi", "Shartga mos keladigan qiymatlarni yig‘adi.", "Shartga mos keluvchi nechta qiymat borligini hisoblaydi."],
  },
  {
    numb: 41,
    question:
      "Kerakli obyektlarni qidirish ПУСК menyusiningning qaysi bo`limi orqali bajariladi?",
    answer: "Nayti",
    options: ["Dokumenti", "Spravka", "Nayti"],
  },
  {
    question: "Dunyoda eng ko'p tarqalgan ( OS ) turlari qaysilar?",
    answer: "Windows, MacOS, Linux",
    options: [
      "Windows, MacOS, Linux",
      "MacOS, Ubuntu, Chrome OS",
      "Windows, Chrome OS, Ubuntu",
    ],
  },
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
    question:
      "Excelda  СЧЁТ() funksiyasi nima uchun ishlatiladi?",
    answer: "Tanlangan oraliqda nechta son borligini hisoblaydi",
    options: [" Tanlangan oraliqda nechta son borligini hisoblaydi", "Shartni tekshiradi va natujaga ko‘ra turli qiymat qaytaradi", "Shartga mos keluvchi nechta qiymat borligini hisoblaydi."],
  },
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
  {
    question: "Wordda paragraf oldi masofasi qaysi bo‘limda sozlanadi?",
    answer: "Разметка страницы → Абзац",
    options: [
      "Вставка → Иллюстрация",
      "Разметка страницы → Абзац",
      "Главная → Шрифт",
    ],
  },
  {
    question: "Faylni PDF formatida saqlash qaysi bo‘limda?",
    answer: "Файл → Сохранить как",
    options: ["Файл → Сохранить как", "Главная → Экспорт", "Вставка → Объект"],
  },
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
  {
    question: "Alt + F4 tugmasining vazifasi ?",
    answer: "Kompyuteri o'chirish va chiqish",
    options: [
      "Kompyuteri o'chirish va chiqish",
      "Kompyuteri yoqish va chiqish",
      "Kompyuteri yangilash va chiqish",
    ],
  },
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
  {
    question:
      "Agar excelda tayyorlangan jadval yuqorisiga qator qo’shish kerak bo’lsa, qaysi amal bajariladi ?",
    answer: "Qator nomi ustida o’ng tugma bosiladi va paydo bo’lgan menyudan “Vstavit” buyrug’i tanlanadi",
    options: [" Qator nomi ustida o’ng tugma bosiladi va paydo bo’lgan menyudan “Удалить” buyrug’i tanlanadi", "Qator nomi ustida o’ng tugma bosiladi va paydo bo’lgan menyudan “Копировать” buyrug’i tanlanadi", "Qator nomi ustida o’ng tugma bosiladi va paydo bo’lgan menyudan “Вставить” buyrug’i tanlanadi"],
  },
  {
    question:
      "Microsoft Excel dasturida yangi hujjat yaratilganda, odatda avtomatik ravishda dastur tomonidan unga qanday nom beriladi",
    answer: "“Листы 1”",
    options: ["“Документ 1”", "“Листы 1”", "“Книга 1”"],
  },
  {
    question:
      "Microsoft Excel jadvallarida sichqonchaning qaysi harakati katakka o‘zgartirish kiritish imkonini beradi",
    answer: "Chap tugma bilan ikki marta bosish",
    options: [
      "O‘ng tugma bilan ikki marta bosish",
      "O‘ng tugma bilan bir marta bosish",
      "Chap tugma bilan ikki marta bosish",
    ],
  },
  {
    question:
      "Excel’dagi formulalar qaysi belgi bilan boshlanadi?",
    answer: "=",
    options: [
      "=",
      "+",
      "#",
    ],
  },
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
  {
    question:
      "Jadvaldagi raqamlarni yig‘indisini hisoblash uchun qaysi funksiya ishlatiladi?",
    answer: "СУММ()",
    options: [
      "ЕСЛИ()",
      "СУММ()",
      "МАКС()",
    ],
  },
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
    question:
      "Sun’iy intellekt (AI) nima?",
    answer: "Dasturlarni insonga xos fikrlash va qaror qabul qilish qobiliyati",
    options: [
      "Dasturlarni insonga xos fikrlash va qaror qabul qilish qobiliyati",
      "Dasturlarni tezlashtirish va samaradorligini oshirish",
      "Dasturlarni avtomatlashtirish va boshqarish",
    ],
  },
  {
    numb: 66,
    question:
      "Qaysi javobda veb resurslarning URL manzili to‘g‘ri ko‘rsatilgan",
    answer: "http://www.abt.uz",
    options: ["www://http.diyorcoder.uz", "http://www.diyorcoder.uz", "diyorcoder:uz"],
  },
  {
    question:
      "Excelda Diagramma yaratish uchun qaysi menyu bo‘limiga murojaat qilinadi?",
    answer:
      "Вставка",
    options: [
      "Главная",
      "Вставка",
      "Вид",
    ],
  },
  {
    question:
      "Ctrl + B qanday amal bajaradi?",
    answer: "Matnni qalin qilish",
    options: ["Matnni qalin qilish", "Matnni qiya qilish", "Matnni ostiga chizish"],
  },
  {
    question:
      "“Сохранить как…” buyrug‘i nima uchun ishlatiladi?",
    answer: "Hujjatni yangi nom bilan saqlash",
    options: ["Bluetooth", "Hujjatni yangi nom bilan saqlash", "Hujjatni chop etish"],
  },
  {
    question:
      "Internet tarmog‘i orqali elektron xabarlarni uzatish va qabul qilish texnologiyasi va u orqali taqdim qilinadigan xizmati turi qanday ataladi?",
    answer: "Elektron pochta",
    options: ["Elektron pochta", "Chat", "WWW"],
  },
  {
    question:
      "Ctrl + I qanday amal bajaradi?",
    answer: "Matnni qiya qilish",
    options: ["Matnni qiya qilish", "Matnni qalin qilish", "Matnni ostiga chizish"],
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
  {
    question:
      "Matn oralig‘ini (интервал) o‘zgartirish qayerdan amalga oshiriladi? ",
    answer: "Главная",
    options: ["Главная", "Вставка", "Рецензирование"],
  },
  {
    question: "Word’da rasm qo‘shish qaysi bo‘lim orqali amalga oshiriladi?",
    answer: "Вставка Рисунки",
    options: ["Вставка Рисунки", "Главная", "Разметка страницы"],
  },
  {
    question: "Power Point dasturining asosiy vazifasi nima?",
    answer: "Prezentatsiya tayyorlash",
    options: ["Prezentatsiya tayyorlash", "Rasm chizish", "Matn yozish"],
  },
];
