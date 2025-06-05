import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tarihi Taş Mekan - Menü",
  description: "Tarihi Taş Mekan'ın lezzetli menüsünü keşfedin. Sıcak içecekler, soğuk içecekler, gözlemeler, tostlar ve daha fazlası...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <header className="sticky top-0 z-20 bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-orange-500">Tarihi Taş Mekan</h1>
              <div className="flex gap-4">
                <a href="#menu" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Menü
                </a>
                <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                  İletişim
                </a>
              </div>
            </div>
          </nav>
        </header>
        
        {children}
        
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Tarihi Taş Mekan</h3>
                <p className="text-gray-400">
                  Geleneksel lezzetleri modern sunumla buluşturuyoruz.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">İletişim</h3>
                <p className="text-gray-400">
                  Tel 1: (0546) 772 76 11<br />
                  Tel 2: (0541) 230 92 81<br />
                  Email: info@tarihitasmekan.com
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Çalışma Saatleri</h3>
                <p className="text-gray-400">
                  Hafta içi: 09:00 - 22:00<br />
                  Hafta sonu: 10:00 - 23:00
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              © {new Date().getFullYear()} Tarihi Taş Mekan. Tüm hakları saklıdır.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
