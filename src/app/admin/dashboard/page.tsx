'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MenuItem } from '@/types/menu';
import AdminNav from '@/components/AdminNav';
import connectDB from '@/utils/db';
import MenuItemModel from '@/models/MenuItem';

export default function AdminDashboard() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Kahvaltı',
    image: '',
  });

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const res = await fetch('/api/menu');
      const data = await res.json();
      
      if (res.ok) {
        setMenuItems(data.map((item: any) => ({
          ...item,
          _id: item._id?.toString()
        })));
      } else {
        setError('Menü öğeleri yüklenirken bir hata oluştu');
      }
    } catch (error) {
      setError('Menü öğeleri yüklenirken bir hata oluştu');
      console.error('Hata:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (res.ok) {
        setNewItem({
          name: '',
          description: '',
          price: '',
          category: 'Kahvaltı',
          image: '',
        });
        fetchMenuItems();
      } else {
        setError('Ürün eklenirken bir hata oluştu');
      }
    } catch (err) {
      setError('Sunucu hatası');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Bu ürünü silmek istediğinizden emin misiniz?')) return;

    try {
      const res = await fetch(`/api/menu/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        fetchMenuItems();
      } else {
        setError('Ürün silinirken bir hata oluştu');
      }
    } catch (err) {
      setError('Sunucu hatası');
    }
  };

  if (loading) return <div className="text-center py-12">Yükleniyor...</div>;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-800 mb-8">Menü Yönetimi</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Yeni Ürün Ekle</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Ürün Adı</label>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Açıklama</label>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Fiyat</label>
              <input
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Kategori</label>
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                <option value="Kahvaltı">Kahvaltı</option>
                <option value="İçecekler">İçecekler</option>
                <option value="Ana Yemekler">Ana Yemekler</option>
                <option value="Tatlılar">Tatlılar</option>
                <option value="Aperatifler">Aperatifler</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Görsel URL</label>
              <input
                type="text"
                value={newItem.image}
                onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700"
            >
              Ürün Ekle
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Mevcut Ürünler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div key={item._id?.toString()} className="border rounded-lg p-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-amber-600 font-bold mb-2">{item.price} ₺</p>
                <p className="text-gray-500 text-sm mb-4">{item.category}</p>
                <button
                  onClick={() => handleDelete(item._id?.toString() || '')}
                  className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 text-sm"
                >
                  Sil
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 