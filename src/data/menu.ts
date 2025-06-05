import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  // SICAK İÇECEKLER
  {
    id: 'cay',
    name: 'Çay',
    price: 20,
    image: '/images/menu/ÇAY.jpg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    id: 'turk-kahvesi',
    name: 'Türk Kahvesi',
    price: 50,
    image: '/images/menu/Turk-Kahvesi.jpg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    id: 'filtre-kahve',
    name: 'Filtre Kahve',
    price: 100,
    image: '/images/menu/filtre-kahve.jpg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    id: 'latte',
    name: 'Latte',
    price: 80,
    image: '/images/menu/latte.jpg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    id: 'americano',
    name: 'Americano',
    price: 80,
    image: '/images/menu/americano.webp',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    price: 80,
    image: '/images/menu/espresso.jpeg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    price: 120,
    image: '/images/menu/caramel-macchiato.webp',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  // SOĞUK İÇECEKLER
  {
    id: 'su',
    name: 'Su',
    price: 20,
    image: '/images/menu/su.jpg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'sade-soda',
    name: 'Sade Soda',
    price: 40,
    image: '/images/menu/sade_soda.webp',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'meyveli-soda',
    name: 'Meyveli Soda',
    price: 50,
    image: '/images/menu/meyveli-soda.png',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'limonata',
    name: 'Limonata',
    price: 100,
    image: '/images/menu/limonata.webp',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'ayran',
    name: 'Ayran',
    price: 50,
    image: '/images/menu/ayran.png',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'kola-fanta',
    name: 'Kola & Fanta',
    price: 60,
    image: '/images/menu/kola-fanta.jpg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'gazoz',
    name: 'Gazoz',
    price: 60,
    image: '/images/menu/gazoz.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'churchill',
    name: 'Churchill',
    price: 70,
    image: '/images/menu/Churchiil.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'fuse-tea',
    name: 'Fuse Tea (Şeftali, Limon, Mango)',
    price: 60,
    image: '/images/menu/Fusetea.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'meyve-suyu',
    name: 'Meyve Suyu (Kayısı - Şeftali - Karışık)',
    price: 60,
    image: '/images/menu/Meyve_Suyu.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  // Soğuk Kahveler
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    price: 120,
    image: '/images/menu/Iced_Latte.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    price: 110,
    image: '/images/menu/Iced_Americano.jpg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    price: 140,
    image: '/images/menu/Iced-Mocha.webp',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    id: 'iced-caramel-macchiato',
    name: 'Iced Caramel Macchiato',
    price: 120,
    image: '/images/menu/IcedCaramelMacchiato.jpg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  // GÖZLEMELER
  {
    id: 'kasarli-gozleme',
    name: 'Kaşarlı Gözleme',
    price: 120,
    image: '/images/menu/kasarli-gozleme.jpg',
    stock: 100,
    category: 'GOZLEMELER'
  },
  {
    id: 'patatesli-gozleme',
    name: 'Patatesli Gözleme',
    price: 100,
    image: '/images/menu/patatesli-gozleme.webp',
    stock: 100,
    category: 'GOZLEMELER'
  },
  {
    id: 'peynirli-gozleme',
    name: 'Peynirli Gözleme',
    price: 100,
    image: '/images/menu/gozleme.jpg',
    stock: 100,
    category: 'GOZLEMELER'
  },
  {
    id: 'patatesli-kasarli-gozleme',
    name: 'Patatesli-Kaşarlı Gözleme',
    price: 150,
    image: '/images/menu/patatesli-kasarligozleme.jpeg',
    stock: 100,
    category: 'GOZLEMELER'
  },
  // TOSTLAR
  {
    id: 'karisik-tost',
    name: 'Karışık Tost',
    price: 130,
    image: '/images/menu/karisik-tost.webp',
    stock: 100,
    category: 'TOSTLAR'
  },
  {
    id: 'kasarli-sucuklu-tost',
    name: 'Kaşarlı & Sucuklu Tost',
    price: 100,
    image: '/images/menu/kasarli-tost.webp',
    stock: 100,
    category: 'TOSTLAR'
  },
  // FAST FOOD
  {
    id: 'hamburger',
    name: 'Hamburger',
    price: 150,
    image: '/images/menu/hamburger.jpeg',
    stock: 100,
    category: 'FAST_FOOD'
  },
  {
    id: 'cheeseburger',
    name: 'Cheeseburger',
    price: 170,
    image: '/images/menu/cheese-burger.jpg',
    stock: 100,
    category: 'FAST_FOOD'
  },
  // ATISTIRMALIKLAR
  {
    id: 'patates-tabagi',
    name: 'Patates Tabağı',
    price: 100,
    image: '/images/menu/patates_tabagi.png',
    stock: 100,
    category: 'ATISTIRMALIKLAR'
  },
  {
    id: 'citir-sepet',
    name: 'Çıtır Sepet',
    price: 150,
    image: '/images/menu/citir-sepet.jpg',
    stock: 100,
    category: 'ATISTIRMALIKLAR'
  },
  // KAHVALTI
  {
    id: 'kahvalti-tabagi',
    name: 'Kahvaltı Tabağı',
    price: 250,
    image: '/images/menu/kahvaltı.jpeg',
    stock: 100,
    category: 'KAHVALTI'
  },
  // TATLILAR
  {
    id: 'tatli-cesitleri',
    name: 'Tatlı Çeşitleri',
    price: 120,
    image: '/images/menu/tatlı.webp',
    stock: 100,
    category: 'TATLILAR'
  }
]; 