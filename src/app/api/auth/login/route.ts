import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/utils/db';
import User from '@/models/User';

const JWT_SECRET = 'tarihi-tas-mekan-secret-2024';

export async function POST(request: Request) {
  console.log('=> Login endpoint başladı');
  
  try {
    // 1. Request body'i doğrula
    const body = await request.json();
    
    if (!body.username || !body.password) {
      console.log('=> Eksik bilgi:', { body });
      return NextResponse.json(
        { error: 'Kullanıcı adı ve şifre gerekli' },
        { status: 400 }
      );
    }

    // 2. Veritabanına bağlan
    await connectDB();

    // 3. Kullanıcıyı bul
    const user = await User.findOne({ username: body.username });
    console.log('=> Kullanıcı arama sonucu:', user ? 'Bulundu' : 'Bulunamadı');

    if (!user) {
      return NextResponse.json(
        { error: 'Kullanıcı adı veya şifre hatalı' },
        { status: 401 }
      );
    }

    // 4. Şifreyi kontrol et
    const isMatch = await bcrypt.compare(body.password, user.password);
    console.log('=> Şifre kontrolü:', isMatch ? 'Başarılı' : 'Başarısız');

    if (!isMatch) {
      return NextResponse.json(
        { error: 'Kullanıcı adı veya şifre hatalı' },
        { status: 401 }
      );
    }

    // 5. JWT token oluştur
    const token = jwt.sign(
      { 
        userId: user._id.toString(),
        username: user.username,
        isAdmin: user.isAdmin 
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 6. Response oluştur
    const response = NextResponse.json({ 
      success: true,
      message: 'Giriş başarılı',
      user: {
        id: user._id,
        username: user.username,
        isAdmin: user.isAdmin
      }
    });

    // 7. Token'ı cookie olarak ayarla
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400 // 1 gün
    });

    console.log('=> Giriş başarılı, response dönülüyor');
    return response;

  } catch (error) {
    console.error('=> Giriş hatası:', error);
    return NextResponse.json(
      { 
        error: 'Giriş yapılırken bir hata oluştu',
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      },
      { status: 500 }
    );
  }
} 