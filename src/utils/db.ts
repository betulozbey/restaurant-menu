import mongoose from 'mongoose';

// MongoDB Atlas bağlantısı
const MONGODB_URI = process.env.MONGODB_URI || '';
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || '';

// Debug için log ekle
console.log('=> Environment variables:', {
  MONGODB_URI: MONGODB_URI ? 'set' : 'not set',
  MONGODB_PASSWORD: MONGODB_PASSWORD ? 'set' : 'not set'
});

// Bağlantı URL'inde şifreyi değiştir
const connectionString = MONGODB_URI.replace('<db_password>', MONGODB_PASSWORD);

// Debug için connection string'i log'a yaz (şifreyi gizleyerek)
console.log('=> Connection string (password hidden):', 
  connectionString.replace(MONGODB_PASSWORD, '****')
);

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    console.log('=> MongoDB zaten bağlı');
    return;
  }

  if (!MONGODB_URI || !MONGODB_PASSWORD) {
    throw new Error('MongoDB bağlantı bilgileri eksik. Lütfen .env dosyasını kontrol edin.');
  }

  try {
    const db = await mongoose.connect(connectionString);
    isConnected = true;
    console.log('=> MongoDB Atlas bağlantısı başarılı');
    console.log('=> Bağlı veritabanı:', db.connection.name);
    return db;
  } catch (error) {
    console.error('=> MongoDB bağlantı hatası:', error);
    process.exit(1);
  }
}

export default connectDB; 