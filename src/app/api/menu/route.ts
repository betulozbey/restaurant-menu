import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import MenuItem from '@/models/MenuItem';

export async function GET() {
  try {
    await connectDB();
    const menuItems = await MenuItem.find({ isAvailable: true }).sort({ category: 1 });
    return NextResponse.json(menuItems);
  } catch (error) {
    return NextResponse.json({ error: 'Menü yüklenirken bir hata oluştu' }, { status: 500 });
  }
}

export async function POST() {
  try {
    await connectDB();
    
    // Örnek menü öğeleri
    const menuItems = [
      // Kahveler
      { name: 'Türk Kahvesi', description: 'Geleneksel Türk Kahvesi', price: 35, category: 'Kahveler', isAvailable: true },
      { name: 'Espresso', description: 'Sade Espresso', price: 35, category: 'Kahveler', isAvailable: true },
      { name: 'Americano', description: 'Espresso ve Su', price: 45, category: 'Kahveler', isAvailable: true },
      { name: 'Latte', description: 'Espresso ve Buharlanmış Süt', price: 50, category: 'Kahveler', isAvailable: true },
      { name: 'Cappuccino', description: 'Espresso, Buharlanmış Süt ve Süt Köpüğü', price: 50, category: 'Kahveler', isAvailable: true },
      { name: 'Mocha', description: 'Espresso, Çikolata ve Buharlanmış Süt', price: 55, category: 'Kahveler', isAvailable: true },

      // Çaylar
      { name: 'Çay', description: 'Demlik Çay', price: 15, category: 'Çaylar', isAvailable: true },
      { name: 'Yeşil Çay', description: 'Taze Demlenen Yeşil Çay', price: 30, category: 'Çaylar', isAvailable: true },
      { name: 'Ihlamur', description: 'Taze Demlenen Ihlamur', price: 35, category: 'Çaylar', isAvailable: true },
      { name: 'Ada Çayı', description: 'Taze Demlenen Ada Çayı', price: 35, category: 'Çaylar', isAvailable: true },
      { name: 'Papatya Çayı', description: 'Taze Demlenen Papatya Çayı', price: 35, category: 'Çaylar', isAvailable: true },
      { name: 'Kış Çayı', description: 'Karışık Bitki Çayı', price: 40, category: 'Çaylar', isAvailable: true },

      // Soğuk İçecekler
      { name: 'Ice Americano', description: 'Soğuk Demlenen Kahve', price: 45, category: 'Soğuk İçecekler', isAvailable: true },
      { name: 'Ice Latte', description: 'Soğuk Süt ve Espresso', price: 50, category: 'Soğuk İçecekler', isAvailable: true },
      { name: 'Limonata', description: 'Ev Yapımı Limonata', price: 40, category: 'Soğuk İçecekler', isAvailable: true },
      { name: 'Ice Tea', description: 'Şeftali / Limon', price: 35, category: 'Soğuk İçecekler', isAvailable: true },
      { name: 'Ayran', description: 'Ev Yapımı Ayran', price: 25, category: 'Soğuk İçecekler', isAvailable: true },
      { name: 'Maden Suyu', description: 'Sade / Meyveli', price: 20, category: 'Soğuk İçecekler', isAvailable: true },

      // Kahvaltı
      { name: 'Serpme Kahvaltı', description: 'Zengin İçerikli Kahvaltı Tabağı (2 Kişilik)', price: 350, category: 'Kahvaltı', isAvailable: true },
      { name: 'Tek Kişilik Kahvaltı', description: 'Kahvaltı Tabağı (1 Kişilik)', price: 200, category: 'Kahvaltı', isAvailable: true },
      { name: 'Omlet', description: 'Sade / Peynirli / Mantarlı / Karışık', price: 75, category: 'Kahvaltı', isAvailable: true },
      { name: 'Menemen', description: 'Geleneksel Menemen', price: 85, category: 'Kahvaltı', isAvailable: true },
      { name: 'Sucuklu Yumurta', description: 'Tereyağında Sucuklu Yumurta', price: 90, category: 'Kahvaltı', isAvailable: true },
      { name: 'Sahanda Yumurta', description: 'Tereyağında Sahanda Yumurta', price: 60, category: 'Kahvaltı', isAvailable: true },

      // Tatlılar
      { name: 'Fırın Sütlaç', description: 'Ev Yapımı Fırın Sütlaç', price: 55, category: 'Tatlılar', isAvailable: true },
      { name: 'Tiramisu', description: 'Ev Yapımı Tiramisu', price: 65, category: 'Tatlılar', isAvailable: true },
      { name: 'Cheesecake', description: 'Günün Cheesecake\'i', price: 70, category: 'Tatlılar', isAvailable: true },
      { name: 'Brownie', description: 'Sıcak Çikolatalı Brownie', price: 65, category: 'Tatlılar', isAvailable: true },
      { name: 'Dondurma', description: 'Çeşitli Dondurma (Top)', price: 25, category: 'Tatlılar', isAvailable: true },
      { name: 'Waffle', description: 'Meyveli ve Çikolatalı Waffle', price: 85, category: 'Tatlılar', isAvailable: true }
    ];

    // Mevcut menüyü temizle
    await MenuItem.deleteMany({});
    
    // Yeni menü öğelerini ekle
    await MenuItem.insertMany(menuItems);

    return NextResponse.json({ message: 'Menü başarıyla güncellendi' });
  } catch (error) {
    return NextResponse.json({ error: 'Menü güncellenirken bir hata oluştu' }, { status: 500 });
  }
} 