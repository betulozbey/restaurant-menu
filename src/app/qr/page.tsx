'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export default function QRPage() {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const menuUrl = 'https://tas-mekan.vercel.app/menu';

  useEffect(() => {
    async function generateQR() {
      try {
        const qrDataUrl = await QRCode.toDataURL(menuUrl);
        setQrCode(qrDataUrl);
      } catch (err) {
        console.error('QR kod oluşturma hatası:', err);
        setQrCode(null);
      }
    }
    generateQR();
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-amber-800 mb-6 text-center">
            Tarihi Taş Mekan - Menü QR Kodu
          </h1>
          
          {qrCode ? (
            <div className="flex flex-col items-center">
              <img 
                src={qrCode} 
                alt="Menü QR Kodu"
                className="w-64 h-64 mb-4"
              />
              <p className="text-center text-gray-600 mb-4">
                Bu QR kodu telefonunuzla okutarak menümüze ulaşabilirsiniz.
              </p>
              <a 
                href={menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 underline"
              >
                Menüyü tarayıcıda aç
              </a>
            </div>
          ) : (
            <p className="text-red-600 text-center">
              QR kod oluşturulurken bir hata oluştu.
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 