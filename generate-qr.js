const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const url = 'http://tas-mekan.vercel.app/#menu';
const desktopPath = path.join(process.env.USERPROFILE, 'Desktop', 'tas-mekan-qr.png');

// QR kodu oluştur ve PNG olarak kaydet
QRCode.toFile('menu-qr.png', url, {
  width: 500,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#ffffff'
  }
}, function(err) {
  if (err) {
    console.error('QR kod oluşturulurken hata:', err);
  } else {
    console.log('QR kod başarıyla oluşturuldu: menu-qr.png');
    console.log('QR kod şu adrese yönlendirecek:', url);
    console.log('Lütfen QR kodu telefonunuzla test edin.');
  }
}); 