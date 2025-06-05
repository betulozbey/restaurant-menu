import { NextResponse } from 'next/server';
import { menuItems } from '@/data/menuItems';

export async function GET() {
  try {
    return NextResponse.json(menuItems);
  } catch (error) {
    return NextResponse.json({ error: 'Menü yüklenirken bir hata oluştu' }, { status: 500 });
  }
}

// POST isteği artık gerekli değil çünkü statik veri kullanıyoruz 