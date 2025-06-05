'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export default function QRPage() {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const menuUrl = 'https://tas-mekan.vercel.app/#menu';

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
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            Tarihi Taş Mekan - Menü QR Kodu
          </h1>
          
          {qrCode ? (
            <div className="flex flex-col items-center">
              <img 
                src={qrCode} 
                alt="Menü QR Kodu"
                className="w-64 h-64 mb-4"
              />
              <p className="text-center text-stone-600 mb-4">
                Bu QR kodu telefonunuzla okutarak menümüze ulaşabilirsiniz.
              </p>
              <div className="text-center text-sm text-stone-500 mt-4">
                <p>QR kod bağlantısı:</p>
                <p className="font-mono break-all">{menuUrl}</p>
              </div>
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