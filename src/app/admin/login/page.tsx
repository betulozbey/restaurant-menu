'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Form validasyonu
    if (!username || !password) {
      setError('Lütfen kullanıcı adı ve şifre giriniz');
      setLoading(false);
      return;
    }

    if (username.length < 3) {
      setError('Kullanıcı adı en az 3 karakter olmalıdır');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Şifre en az 6 karakter olmalıdır');
      setLoading(false);
      return;
    }

    try {
      console.log('=> Giriş denemesi başlatılıyor...');
      
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      });

      const data = await res.json();
      console.log('=> Sunucu yanıtı:', {
        status: res.status,
        ok: res.ok,
        data
      });

      if (!res.ok) {
        throw new Error(data.error || 'Giriş yapılırken bir hata oluştu');
      }

      setSuccess('Giriş başarılı! Yönlendiriliyorsunuz...');
      
      // Başarılı girişten sonra kısa bir gecikme ile yönlendir
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1500);

    } catch (err) {
      console.error('=> Giriş hatası:', err);
      setError(err instanceof Error ? err.message : 'Beklenmeyen bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

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
        setSuccess('Admin hesabı zaten mevcut. Giriş yapabilirsiniz.');
      } else {
        setSuccess('Admin hesabı oluşturuldu! Şimdi giriş yapabilirsiniz.');
        // Otomatik olarak form alanlarını doldur
        setUsername('betul');
        setPassword('01012025');
      }
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
            Admin Girişi
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Tarihi Taş Mekan Yönetim Paneli
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Kullanıcı Adı
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                minLength={3}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Şifre
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                minLength={6}
              />
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
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 transition-all duration-200"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Giriş yapılıyor...
                </span>
              ) : (
                'Giriş Yap'
              )}
            </button>
            
            <Link
              href="/admin/register"
              className="group relative w-full flex justify-center py-2 px-4 border border-primary-600 text-sm font-medium rounded-md text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 transition-all duration-200"
            >
              Admin Hesabı Oluştur
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
} 