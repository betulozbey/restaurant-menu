'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MenuItem, MenuCategory, CATEGORIES } from '../types/menu';
import { menuItems } from '../data/menu';

interface MenuProps {
  className?: string;
}

export default function Menu({ className = '' }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('SICAK_ICECEKLER');

  // Kategoriye göre menü öğelerini filtreleme
  const getFilteredItems = (category: MenuCategory) => {
    return menuItems.filter(item => item.category === category);
  };

  // Seçili kategorideki öğeleri al
  const currentItems = getFilteredItems(selectedCategory);

  return (
    <div className={`w-full ${className}`}>
      {/* Kategori Seçimi */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md">
        <div className="flex overflow-x-auto gap-4 p-4 shadow-sm mb-6 scrollbar-hide">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menü Öğeleri */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {currentItems.map(item => (
          <div
            key={item.name}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02] group"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                priority={selectedCategory === item.category}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-500">{item.price} ₺</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 