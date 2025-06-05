import bcrypt from 'bcryptjs';
import connectDB from '../utils/db';
import User from '../models/User';

async function createAdmin() {
  try {
    await connectDB();

    // Varsayılan admin bilgileri
    const adminData = {
      username: 'admin',
      password: 'admin123', // Bu şifreyi değiştirmeyi unutmayın!
      isAdmin: true,
    };

    // Kullanıcı var mı kontrol et
    const existingUser = await User.findOne({ username: adminData.username });
    
    if (existingUser) {
      console.log('Admin kullanıcısı zaten mevcut!');
      process.exit(0);
    }

    // Şifreyi hashle
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminData.password, salt);

    // Yeni admin kullanıcısı oluştur
    const newAdmin = await User.create({
      ...adminData,
      password: hashedPassword,
    });

    console.log('Admin kullanıcısı başarıyla oluşturuldu:');
    console.log(`Kullanıcı adı: ${adminData.username}`);
    console.log(`Şifre: ${adminData.password}`);
    console.log('Bu bilgileri güvenli bir yerde saklayın ve şifreyi değiştirmeyi unutmayın!');

  } catch (error) {
    console.error('Hata:', error);
  } finally {
    process.exit();
  }
}

createAdmin(); 