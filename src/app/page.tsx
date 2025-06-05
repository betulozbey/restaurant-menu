import Menu from '../components/Menu';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gray-900 flex items-center justify-center text-white overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
          style={{ 
            filter: 'brightness(0.65) saturate(1.1)',
            transform: 'scale(1.1)',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))'
          }}
        />
        
        {/* New Opening Banner */}
        <div className="absolute top-8 left-0 right-0 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full border border-white/20 flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-lg font-medium tracking-wider text-white uppercase">
              Kaynarca'da Yeni Açıldık
            </span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-playfair mb-4 text-white drop-shadow-lg italic tracking-wider">
            Eşsiz Lezzetler
          </h2>
          <p className="text-2xl md:text-3xl text-gray-100 mb-12 font-light max-w-2xl mx-auto tracking-wider">
            Doğanın kalbinde, geleneksel tatların modern yorumu
          </p>
          <a 
            href="#menu" 
            className="inline-block px-10 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-full text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Menüyü Görüntüle
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="px-8 py-3 rounded-full text-lg font-medium bg-green-700 text-white shadow-lg">
              Menümüz
            </div>
          </div>
          <Menu />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair text-gray-800 text-center mb-16 relative">
            İletişim
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-stone-300"></span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                <h3 className="text-2xl font-playfair mb-6 text-gray-800">İletişim Bilgileri</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-center">
                    <span className="font-medium w-24">Telefon 1:</span>
                    <span>(0546) 772 76 11</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-24">Telefon 2:</span>
                    <span>(0541) 230 92 81</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-24">E-posta:</span>
                    <span>info@tarihitasmekan.com</span>
                  </p>
                  <p className="flex items-center mt-6 text-gray-700">
                    <span className="font-medium">Adres:</span>
                    <span className="ml-2">Dere Kenarı Mevkii, Tarihi Taş Sokak No:1, Merkez</span>
                  </p>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                <h3 className="text-2xl font-playfair mb-6 text-gray-800">Çalışma Saatleri</h3>
                <div className="space-y-4">
                  <p className="flex justify-between text-gray-600">
                    <span className="font-medium">Pazartesi - Cuma:</span>
                    <span>09:00 - 22:00</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span className="font-medium">Cumartesi:</span>
                    <span>10:00 - 23:00</span>
                  </p>
                  <p className="flex justify-between text-gray-600">
                    <span className="font-medium">Pazar:</span>
                    <span>10:00 - 23:00</span>
                  </p>
                  <div className="mt-6 p-4 bg-stone-50 rounded-lg">
                    <p className="text-gray-700 text-sm italic">
                      Dere kenarında huzurlu bir ortamda kahvaltı servisi yapılmaktadır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
