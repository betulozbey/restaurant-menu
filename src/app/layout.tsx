import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tarihi Taş Mekan',
  description: 'Dere kenarında eşsiz lezzetler',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-stone-100">
          <nav className="container mx-auto px-4 py-5">
            <div className="flex items-center justify-center">
              <img src="/images/logo.png" alt="Logo" className="h-14 w-auto mr-5" />
              <h1 className="text-4xl font-playfair text-stone-800">Tarihi Taş Mekan</h1>
            </div>
          </nav>
        </header>
        
        {children}
        
        <footer className="bg-stone-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Tarihi Taş Mekan</h3>
                <p className="text-stone-400">
                  Geleneksel lezzetleri modern sunumla buluşturuyoruz.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">İletişim</h3>
                <p className="text-stone-400">
                  Tel 1: (0546) 772 76 11<br />
                  Tel 2: (0541) 230 92 81<br />
                  Email: info@tarihitasmekan.com
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Çalışma Saatleri</h3>
                <p className="text-stone-400">
                  Hafta içi: 09:00 - 22:00<br />
                  Hafta sonu: 10:00 - 23:00
                </p>
              </div>
            </div>
            <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
              © {new Date().getFullYear()} Tarihi Taş Mekan. Tüm hakları saklıdır.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
