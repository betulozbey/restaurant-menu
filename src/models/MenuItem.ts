import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Kahvaltı', 'İçecekler', 'Tatlılar', 'Ana Yemekler', 'Aperatifler']
  },
  image: {
    type: String,
    required: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true
});

export default mongoose.models.MenuItem || mongoose.model('MenuItem', menuItemSchema); 