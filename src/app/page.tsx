import Menu from '../components/Menu';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gray-900 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tarihi Taş Mekan
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Geleneksel Lezzetler, Modern Sunum
          </p>
          <a
            href="#menu"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Menüyü İncele
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Menümüz
          </h2>
          <Menu />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            İletişim
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">İletişim Bilgileri</h3>
                <p className="text-gray-600 space-y-2">
                  <span className="block">
                    <strong>Telefon 1:</strong> (0546) 772 76 11
                  </span>
                  <span className="block">
                    <strong>Telefon 2:</strong> (0541) 230 92 81
                  </span>
                  <span className="block">
                    <strong>E-posta:</strong> info@tarihitasmekan.com
                  </span>
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2">
                  <p className="flex justify-between text-gray-600">
                    <span>Pazartesi - Cuma:</span>
                    <span>09:00 - 22:00</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span>Cumartesi:</span>
                    <span>10:00 - 23:00</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span>Pazar:</span>
                    <span>10:00 - 23:00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
