'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';

export default function RegisterPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      console.log('=> Admin hesabı oluşturuluyor...');
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await res.json();
      console.log('=> Kayıt yanıtı:', data);

      if (!res.ok) {
        throw new Error(data.error || 'Kayıt işlemi sırasında bir hata oluştu');
      }

      if (data.message === 'Bu kullanıcı zaten var') {
        setSuccess('Admin hesabı zaten mevcut. Giriş sayfasına yönlendiriliyorsunuz...');
      } else {
        setSuccess('Admin hesabı oluşturuldu! Giriş sayfasına yönlendiriliyorsunuz...');
      }

      // 2 saniye sonra login sayfasına yönlendir
      setTimeout(() => {
        router.push('/admin/login');
      }, 2000);

    } catch (err) {
      console.error('=> Kayıt hatası:', err);
      setError(err instanceof Error ? err.message : 'Beklenmeyen bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Logo size={100} className="animate-fade-in" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-primary-800">
            Admin Hesabı Oluştur
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Tarihi Taş Mekan Yönetim Paneli
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-md bg-white shadow-sm p-4">
            <p className="text-sm text-gray-600 mb-4">
              Admin hesabı oluşturmak için aşağıdaki bilgiler kullanılacak:
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Kullanıcı Adı:</span>
                <span className="text-sm text-gray-900">betul</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Şifre:</span>
                <span className="text-sm text-gray-900">01012025</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded animate-shake">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-500 text-sm text-center bg-green-50 p-2 rounded animate-fade-in">
              {success}
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={handleRegister}
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 transition-all duration-200"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  İşlem yapılıyor...
                </span>
              ) : (
                'Admin Hesabı Oluştur'
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 