/* ══════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════ */
const TRANSLATIONS = {
  uz: {
    catalogTitle: 'VC',
    catalogSubtitle: 'Mahsulotlar katalogi',
    orderBtn: '📍 Buyurtma berish',
    searchPlaceholder: 'Nomi yoki kategoriya bo\'yicha qidiring…',
    allTab: 'Hammasi',
    noResults: 'Hech narsa topilmadi',
    selectRegion: 'Hududingizni tanlang',
    agentLabel: 'Agent:',
    phoneLabel: '☎️',
    telegramLabel: '💬',
    contactMessage: 'Salom! Men {region} hududida joylashgan do`kondanman. Sizning katalogdan buyurtma bermoqchi edim.',
    sum: 'so\'m/',
    // Новые ключи для фильтра по брендам
    filterBrand: 'Brend',
    allBrands: 'Barcha brendlar',
    showPromoOnly: 'Faqat aksiyalar',
  },
  ru: {
    catalogTitle: 'VC',
    catalogSubtitle: 'Каталог товаров',
    orderBtn: '📍 Заказать',
    searchPlaceholder: 'Поиск по названию или категории…',
    allTab: 'Все',
    noResults: 'Ничего не найдено',
    selectRegion: 'Выберите ваш регион',
    agentLabel: 'Агент:',
    phoneLabel: '☎️',
    telegramLabel: '💬',
    contactMessage: 'Привет! Я из региона {region}. Хочу оформить заказ из вашего каталога.',
    sum: 'сум/',
    // Новые ключи для фильтра по брендам
    filterBrand: 'Бренд',
    allBrands: 'Все бренды',
    showPromoOnly: 'Только акции',
  }
};

var currentLang = localStorage.getItem('lang') || 'uz';

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.uz[key] || key;
}

function setLanguage(lang) {
  if (TRANSLATIONS[lang]) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    return true;
  }
  return false;
}

function getCurrentLang() {
  return currentLang;
}