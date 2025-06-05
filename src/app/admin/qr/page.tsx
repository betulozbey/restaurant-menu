'use client';

import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import AdminNav from '@/components/AdminNav';

export default function QRCodePage() {
  const [qrDataURL, setQrDataURL] = useState('');
  const [error, setError] = useState('');
  const menuUrl = typeof window !== 'undefined' ? `${window.location.origin}/menu` : '';

  useEffect(() => {
    generateQR();
  }, [menuUrl]);

  const generateQR = async () => {
    try {
      if (!menuUrl) return;
      const dataURL = await QRCode.toDataURL(menuUrl, {
        width: 400,
        margin: 2,
        color: {
          dark: '#166534', // primary-800
          light: '#FFFFFF',
        },
      });
      setQrDataURL(dataURL);
    } catch (err) {
      setError('QR kod oluşturulurken bir hata oluştu');
      console.error(err);
    }
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = 'tarihi-tas-mekan-menu-qr.png';
    link.href = qrDataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-8">QR Kod Oluştur</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Bu QR kodu menünüzü görüntülemek için kullanabilirsiniz.
              Müşterileriniz QR kodu okutarak dijital menünüze erişebilirler.
            </p>

            {qrDataURL && (
              <div className="mb-6">
                <img
                  src={qrDataURL}
                  alt="Menü QR Kodu"
                  className="mx-auto max-w-xs"
                />
              </div>
            )}

            <button
              onClick={downloadQR}
              className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700"
              disabled={!qrDataURL}
            >
              QR Kodu İndir
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 