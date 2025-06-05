import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Kullanıcı adı gerekli'],
    unique: true,
    trim: true,
    minlength: [3, 'Kullanıcı adı en az 3 karakter olmalıdır'],
    maxlength: [50, 'Kullanıcı adı en fazla 50 karakter olabilir']
  },
  password: {
    type: String,
    required: [true, 'Şifre gerekli'],
    minlength: [6, 'Şifre en az 6 karakter olmalıdır']
  },
  isAdmin: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Eğer model zaten tanımlıysa onu kullan, değilse yeni model oluştur
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User; 