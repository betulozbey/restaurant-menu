'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MenuItem, MenuCategory, CATEGORIES } from '../types/menu';

interface MenuProps {
  className?: string;
}

// Statik menü öğeleri
const MENU_ITEMS = [
  // SICAK İÇECEKLER
  {
    name: 'Çay',
    price: 20,
    image: '/images/menu/ÇAY.jpg',
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Türk Kahvesi',
    price: 50,
    image: '/images/menu/Turk-Kahvesi.jpg',
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Filtre Kahve',
    price: 100,
    image: '/images/menu/filtre-kahve.jpg',
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Latte',
    price: 80,
    image: '/images/menu/latte.jpg',
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Americano',
    price: 80,
    image: '/images/menu/americano.webp',
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Espresso',
    price: 80,
    image: '/images/menu/espresso.jpeg',
    category: 'SICAK_ICECEKLER'
  },
  {
    name: 'Caramel Macchiato',
    price: 120,
    image: '/images/menu/caramel-macchiato.webp',
    category: 'SICAK_ICECEKLER'
  },
  // SOĞUK İÇECEKLER
  {
    name: 'Su',
    price: 20,
    image: '/images/menu/su.jpg',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Sade Soda',
    price: 40,
    image: '/images/menu/sade_soda.webp',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Meyveli Soda',
    price: 50,
    image: '/images/menu/meyveli-soda.png',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Limonata',
    price: 100,
    image: '/images/menu/limonata.webp',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Ayran',
    price: 50,
    image: '/images/menu/ayran.png',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Kola & Fanta',
    price: 60,
    image: '/images/menu/kola-fanta.jpg',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Gazoz',
    price: 60,
    image: '/images/menu/gazoz.jpeg',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Churchill',
    price: 70,
    image: '/images/menu/Churchiil.jpeg',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Fuse Tea (Şeftali, Limon, Mango)',
    price: 60,
    image: '/images/menu/Fusetea.jpeg',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Meyve Suyu (Kayısı - Şeftali - Karışık)',
    price: 60,
    image: '/images/menu/Meyve_Suyu.jpeg',
    category: 'SOGUK_ICECEKLER'
  },
  // Soğuk Kahveler
  {
    name: 'Iced Latte',
    price: 120,
    image: '/images/menu/Iced_Latte.jpeg',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Iced Americano',
    price: 110,
    image: '/images/menu/Iced_Americano.jpg',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Iced Mocha',
    price: 140,
    image: '/images/menu/Iced-Mocha.webp',
    category: 'SOGUK_ICECEKLER'
  },
  {
    name: 'Iced Caramel Macchiato',
    price: 120,
    image: '/images/menu/IcedCaramelMacchiato.jpg',
    category: 'SOGUK_ICECEKLER'
  },
  // GÖZLEMELER
  {
    name: 'Kaşarlı Gözleme',
    price: 120,
    image: '/images/menu/kasarli-gozleme.jpg',
    category: 'GOZLEMELER'
  },
  {
    name: 'Patatesli Gözleme',
    price: 100,
    image: '/images/menu/patatesli-gozleme.webp',
    category: 'GOZLEMELER'
  },
  {
    name: 'Peynirli Gözleme',
    price: 100,
    image: '/images/menu/gozleme.jpg',
    category: 'GOZLEMELER'
  },
  {
    name: 'Patatesli-Kaşarlı Gözleme',
    price: 150,
    image: '/images/menu/patatesli-kasarligozleme.jpeg',
    category: 'GOZLEMELER'
  },
  // TOSTLAR
  {
    name: 'Karışık Tost',
    price: 130,
    image: '/images/menu/karisik-tost.webp',
    category: 'TOSTLAR'
  },
  {
    name: 'Kaşarlı & Sucuklu Tost',
    price: 100,
    image: '/images/menu/kasarli-tost.webp',
    category: 'TOSTLAR'
  },
  // FAST FOOD
  {
    name: 'Hamburger',
    price: 150,
    image: '/images/menu/hamburger.jpeg',
    category: 'FAST_FOOD'
  },
  {
    name: 'Cheeseburger',
    price: 170,
    image: '/images/menu/cheese-burger.jpg',
    category: 'FAST_FOOD'
  },
  // ATISTIRMALIKLAR
  {
    name: 'Patates Tabağı',
    price: 100,
    image: '/images/menu/patates_tabagi.png',
    category: 'ATISTIRMALIKLAR'
  },
  {
    name: 'Çıtır Sepet',
    price: 150,
    image: '/images/menu/citir-sepet.jpg',
    category: 'ATISTIRMALIKLAR'
  },
  // KAHVALTI
  {
    name: 'Kahvaltı Tabağı',
    price: 250,
    image: '/images/menu/kahvaltı.jpeg',
    category: 'KAHVALTI'
  },
  // TATLILAR
  {
    name: 'Tatlı Çeşitleri',
    price: 120,
    image: '/images/menu/tatlı.webp',
    category: 'TATLILAR'
  }
];

export default function Menu({ className = '' }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('SICAK_ICECEKLER');

  // Kategoriye göre menü öğelerini filtreleme
  const getFilteredItems = (category: MenuCategory) => {
    return MENU_ITEMS.filter(item => item.category === category);
  };

  // Seçili kategorideki öğeleri al
  const currentItems = getFilteredItems(selectedCategory);

  return (
    <div className={`w-full ${className}`}>
      {/* Kategori Seçimi */}
      <div className="sticky top-[72px] z-10 bg-white/80 backdrop-blur-md">
        <div className="flex overflow-x-auto gap-4 p-4 shadow-sm mb-6 scrollbar-hide">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-green-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menü Öğeleri */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map(item => (
          <div
            key={item.name}
            className="bg-white rounded-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority={selectedCategory === item.category}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative p-6 bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-playfair text-stone-800">{item.name}</h3>
                <div className="flex-grow border-t border-stone-200"></div>
                <div className="font-playfair">
                  <span className="text-2xl text-stone-800">{item.price}</span>
                  <span className="text-lg text-stone-600 ml-1">₺</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 