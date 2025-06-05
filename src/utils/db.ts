import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

// Debug için log ekle
console.log('=> Environment variables:', {
  MONGODB_URI: MONGODB_URI ? 'set' : 'not set'
});

// Debug için connection string'i log'a yaz (şifreyi gizleyerek)
console.log('=> Connection string (password hidden):', 
  MONGODB_URI.replace(/:[^:]*@/, ':****@')
);

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    console.log('=> MongoDB zaten bağlı');
    return;
  }

  if (!MONGODB_URI) {
    throw new Error('MongoDB bağlantı bilgileri eksik. Lütfen .env dosyasını kontrol edin.');
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
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