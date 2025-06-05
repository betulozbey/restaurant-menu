'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-stone-700' : 'hover:bg-stone-700';
  };

  return (
    <nav className="bg-stone-800 text-white p-4 mb-8">
      <div className="container mx-auto flex flex-wrap gap-4">
        <Link
          href="/admin/dashboard"
          className={`px-4 py-2 rounded-md transition-colors ${isActive('/admin/dashboard')}`}
        >
          Menü Yönetimi
        </Link>
        <Link
          href="/admin/qr"
          className={`px-4 py-2 rounded-md transition-colors ${isActive('/admin/qr')}`}
        >
          QR Kod Oluştur
        </Link>
        <button
          onClick={() => {
            // Çıkış işlemi burada yapılacak
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            window.location.href = '/admin';
          }}
          className="px-4 py-2 rounded-md hover:bg-stone-700 transition-colors ml-auto"
        >
          Çıkış Yap
        </button>
      </div>
    </nav>
  );
} 