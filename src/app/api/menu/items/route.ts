import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import MenuItem from '@/models/MenuItem';

// Örnek menü öğeleri
const sampleMenuItems = [
  // Kahvaltı
  {
    name: 'Serpme Kahvaltı',
    description: 'Zengin içerikli serpme kahvaltı tabağı (2 kişilik)',
    price: 350,
    category: 'Kahvaltı',
    isAvailable: true
  },
  {
    name: 'Menemen',
    description: 'Taze domates, biber ve yumurta ile hazırlanan klasik menemen',
    price: 75,
    category: 'Kahvaltı',
    isAvailable: true
  },
  {
    name: 'Sucuklu Yumurta',
    description: 'Özel baharat karışımlı sucuk ile hazırlanan yumurta',
    price: 85,
    category: 'Kahvaltı',
    isAvailable: true
  },

  // Ana Yemekler
  {
    name: 'Kuzu Tandır',
    description: 'Özel baharatlarla marine edilmiş, 6 saat fırında pişirilmiş kuzu eti',
    price: 220,
    category: 'Ana Yemekler',
    isAvailable: true
  },
  {
    name: 'Kuru Fasulye',
    description: 'Geleneksel taş fırında pişirilmiş kuru fasulye',
    price: 90,
    category: 'Ana Yemekler',
    isAvailable: true
  },
  {
    name: 'İskender',
    description: 'Özel domates sosu ve tereyağı ile servis edilen döner',
    price: 160,
    category: 'Ana Yemekler',
    isAvailable: true
  },

  // Tatlılar
  {
    name: 'Künefe',
    description: 'Antep fıstığı ile servis edilen özel yapım künefe',
    price: 120,
    category: 'Tatlılar',
    isAvailable: true
  },
  {
    name: 'Sütlaç',
    description: 'Taş fırında pişirilmiş geleneksel sütlaç',
    price: 65,
    category: 'Tatlılar',
    isAvailable: true
  },
  {
    name: 'Baklava',
    description: 'Antep fıstıklı ev yapımı baklava (4 dilim)',
    price: 140,
    category: 'Tatlılar',
    isAvailable: true
  },

  // İçecekler
  {
    name: 'Türk Kahvesi',
    description: 'Özel değirmende çekilmiş Türk kahvesi',
    price: 30,
    category: 'İçecekler',
    isAvailable: true
  },
  {
    name: 'Çay',
    description: 'Demlik çay',
    price: 15,
    category: 'İçecekler',
    isAvailable: true
  },
  {
    name: 'Ayran',
    description: 'Ev yapımı yayık ayran',
    price: 20,
    category: 'İçecekler',
    isAvailable: true
  },

  // Aperatifler
  {
    name: 'Patates Kızartması',
    description: 'Taze patates ile hazırlanan kızartma',
    price: 55,
    category: 'Aperatifler',
    isAvailable: true
  },
  {
    name: 'Sigara Böreği',
    description: 'El açması yufka ile hazırlanan peynirli sigara böreği (6 adet)',
    price: 70,
    category: 'Aperatifler',
    isAvailable: true
  },
  {
    name: 'Mercimek Çorbası',
    description: 'Günlük hazırlanan mercimek çorbası',
    price: 45,
    category: 'Aperatifler',
    isAvailable: true
  }
];

export async function GET() {
  try {
    await connectDB();
    const menuItems = await MenuItem.find({ isAvailable: true }).sort({ category: 1 });
    return NextResponse.json(menuItems);
  } catch (error) {
    return NextResponse.json(
      { error: 'Menü yüklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    await connectDB();

    // Önce tüm mevcut menü öğelerini silelim
    await MenuItem.deleteMany({});

    // Örnek menü öğelerini ekleyelim
    const items = await MenuItem.insertMany(sampleMenuItems);

    return NextResponse.json({
      message: 'Örnek menü öğeleri başarıyla eklendi',
      count: items.length
    });
  } catch (error) {
    console.error('Menü öğeleri eklenirken hata:', error);
    return NextResponse.json(
      { error: 'Menü öğeleri eklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 