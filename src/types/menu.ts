import { Types } from 'mongoose';

export interface MenuItem {
  _id?: string | Types.ObjectId;
  name: string;
  price: number;
  image: string;
  stock: number;
  description?: string;
  category: MenuCategory;
  isAvailable?: boolean;
}

export type MenuCategory = 
  | 'SICAK_ICECEKLER'
  | 'SOGUK_ICECEKLER'
  | 'GOZLEMELER'
  | 'TOSTLAR'
  | 'FAST_FOOD'
  | 'ATISTIRMALIKLAR'
  | 'KAHVALTI'
  | 'TATLILAR';

export interface CategoryInfo {
  id: MenuCategory;
  name: string;
  icon?: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'SICAK_ICECEKLER', name: 'Sıcak İçecekler' },
  { id: 'SOGUK_ICECEKLER', name: 'Soğuk İçecekler' },
  { id: 'GOZLEMELER', name: 'Gözlemeler' },
  { id: 'TOSTLAR', name: 'Tostlar' },
  { id: 'FAST_FOOD', name: 'Fast Food' },
  { id: 'ATISTIRMALIKLAR', name: 'Atıştırmalıklar' },
  { id: 'KAHVALTI', name: 'Kahvaltı' },
  { id: 'TATLILAR', name: 'Tatlılar' }
]; 