import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import mongoose from 'mongoose';

export async function GET() {
  try {
    console.log('Test endpoint başladı');
    console.log('Bağlantı durumu:', mongoose.connection.readyState);

    await connectDB();
    
    if (mongoose.connection.readyState === 1) {
      const dbName = mongoose.connection.db?.databaseName || 'bilinmiyor';
      return NextResponse.json({ 
        status: 'success',
        message: 'MongoDB bağlantısı başarılı',
        database: dbName
      });
    } else {
      throw new Error('MongoDB bağlantısı kurulamadı');
    }

  } catch (error) {
    console.error('Test hatası:', error);
    return NextResponse.json(
      { 
        error: 'MongoDB bağlantı testi başarısız',
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      },
      { status: 500 }
    );
  }
} 