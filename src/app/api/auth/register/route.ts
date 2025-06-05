import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/utils/db';
import User from '@/models/User';

export async function POST(request: Request) {
  console.log('=> Register endpoint başladı');

  try {
    // 1. Request body'i al (eğer varsa)
    let username = 'betul';
    let password = '01012025';

    try {
      const body = await request.json();
      if (body.username) username = body.username;
      if (body.password) password = body.password;
    } catch (e) {
      console.log('=> Body boş, varsayılan değerler kullanılacak');
    }

    console.log('=> Kullanıcı bilgileri:', { username });

    // 2. MongoDB'ye bağlan
    await connectDB();
    console.log('=> MongoDB bağlantısı başarılı');

    // 3. Mevcut kullanıcıyı kontrol et
    console.log('=> Mevcut kullanıcı kontrol ediliyor...');
    const existingUser = await User.findOne({ username });
    
    if (existingUser) {
      console.log('=> Kullanıcı zaten var');
      return NextResponse.json({ 
        message: 'Bu kullanıcı zaten var',
        username 
      });
    }

    // 4. Şifre validasyonu
    if (password.length < 6) {
      return NextResponse.json({ 
        error: 'Şifre en az 6 karakter olmalıdır'
      }, { status: 400 });
    }

    // 5. Şifreyi hashleme
    console.log('=> Şifre hashlenecek...');
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('=> Şifre hashlendi');

    // 6. Kullanıcıyı oluşturma
    console.log('=> Kullanıcı oluşturuluyor...');
    const user = await User.create({
      username,
      password: hashedPassword,
      isAdmin: true
    });

    console.log('=> Kullanıcı başarıyla oluşturuldu:', user._id);

    return NextResponse.json({ 
      success: true,
      message: 'Admin kullanıcısı başarıyla oluşturuldu',
      user: {
        id: user._id,
        username: user.username,
        isAdmin: user.isAdmin
      }
    });

  } catch (error) {
    console.error('=> Register hatası:', error);
    return NextResponse.json(
      { 
        error: 'Kullanıcı oluşturulurken bir hata oluştu',
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      },
      { status: 500 }
    );
  }
} 