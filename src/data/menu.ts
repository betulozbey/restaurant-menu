import { MenuItem } from '../types/menu';

export const menuItems: Omit<MenuItem, '_id'>[] = [
  // SICAK İÇECEKLER
  {
    name: 'Çay',
    price: 20,
    image: '/images/menu/ÇAY.jpg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Türk Kahvesi',
    price: 50,
    image: '/images/menu/Turk-Kahvesi.jpg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Filtre Kahve',
    price: 100,
    image: '/images/menu/filtre-kahve.jpg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Latte',
    price: 80,
    image: '/images/menu/latte.jpg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Americano',
    price: 80,
    image: '/images/menu/americano.webp',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Espresso',
    price: 80,
    image: '/images/menu/espresso.jpeg',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Caramel Macchiato',
    price: 120,
    image: '/images/menu/caramel-macchiato.webp',
    stock: 100,
    category: 'SICAK_ICECEKLER'
  },
  // SOĞUK İÇECEKLER
  {
    name: 'Su',
    price: 20,
    image: '/images/menu/su.jpg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Sade Soda',
    price: 40,
    image: '/images/menu/sade_soda.webp',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Meyveli Soda',
    price: 50,
    image: '/images/menu/meyveli-soda.png',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Limonata',
    price: 100,
    image: '/images/menu/limonata.webp',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Ayran',
    price: 50,
    image: '/images/menu/ayran.png',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Kola & Fanta',
    price: 60,
    image: '/images/menu/kola-fanta.jpg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Gazoz',
    price: 60,
    image: '/images/menu/gazoz.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Churchill',
    price: 70,
    image: '/images/menu/Churchiil.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Fuse Tea (Şeftali, Limon, Mango)',
    price: 60,
    image: '/images/menu/Fusetea.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Meyve Suyu (Kayısı - Şeftali - Karışık)',
    price: 60,
    image: '/images/menu/Meyve_Suyu.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  // Soğuk Kahveler
  {
    name: 'Iced Latte',
    price: 120,
    image: '/images/menu/Iced_Latte.jpeg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Iced Americano',
    price: 110,
    image: '/images/menu/Iced_Americano.jpg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Iced Mocha',
    price: 140,
    image: '/images/menu/Iced-Mocha.webp',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Iced Caramel Macchiato',
    price: 120,
    image: '/images/menu/IcedCaramelMacchiato.jpg',
    stock: 100,
    category: 'SOGUK_ICECEKLER'
  },
  // GÖZLEMELER
  {
    name: 'Kaşarlı Gözleme',
    price: 120,
    image: '/images/menu/kasarli-gozleme.jpg',
    stock: 100,
    category: 'GOZLEMELER'
  },
  {
    name: 'Patatesli Gözleme',
    price: 100,
    image: '/images/menu/patatesli-gozleme.webp',
    stock: 100,
    category: 'GOZLEMELER'
  },
  {
    name: 'Peynirli Gözleme',
    price: 100,
    image: '/images/menu/gozleme.jpg',
    stock: 100,
    category: 'GOZLEMELER'
  },
  {
    name: 'Patatesli-Kaşarlı Gözleme',
    price: 150,
    image: '/images/menu/patatesli-kasarligozleme.jpeg',
    stock: 100,
    category: 'GOZLEMELER'
  },
  // TOSTLAR
  {
    name: 'Karışık Tost',
    price: 130,
    image: '/images/menu/karisik-tost.webp',
    stock: 100,
    category: 'TOSTLAR'
  },
  {
    name: 'Kaşarlı & Sucuklu Tost',
    price: 100,
    image: '/images/menu/kasarli-tost.webp',
    stock: 100,
    category: 'TOSTLAR'
  },
  // FAST FOOD
  {
    name: 'Hamburger',
    price: 150,
    image: '/images/menu/hamburger.jpeg',
    stock: 100,
    category: 'FAST_FOOD'
  },
  {
    name: 'Cheeseburger',
    price: 170,
    image: '/images/menu/cheese-burger.jpg',
    stock: 100,
    category: 'FAST_FOOD'
  },
  // ATISTIRMALIKLAR
  {
    name: 'Patates Tabağı',
    price: 100,
    image: '/images/menu/patates_tabagi.png',
    stock: 100,
    category: 'ATISTIRMALIKLAR'
  },
  {
    name: 'Çıtır Sepet',
    price: 150,
    image: '/images/menu/citir-sepet.jpg',
    stock: 100,
    category: 'ATISTIRMALIKLAR'
  },
  // KAHVALTI
  {
    name: 'Kahvaltı Tabağı',
    price: 250,
    image: '/images/menu/kahvaltı.jpeg',
    stock: 100,
    category: 'KAHVALTI'
  },
  // TATLILAR
  {
    name: 'Tatlı Çeşitleri',
    price: 120,
    image: '/images/menu/tatlı.webp',
    stock: 100,
    category: 'TATLILAR'
  }
]; 