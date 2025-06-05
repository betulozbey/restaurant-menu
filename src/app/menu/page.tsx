import { menuItems } from '@/data/menuItems';
import Logo from '@/components/Logo';

type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  _id?: string;
};

export default function MenuPage() {
  // Menü öğelerini kategorilere göre grupla
  const categorizedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <main className="min-h-screen bg-stone-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Logo size={120} />
          </div>
          <h1 className="text-4xl font-bold text-stone-800 mb-2">
            Tarihi Taş Mekan
          </h1>
          <p className="text-stone-600">
            Geleneksel lezzetler, modern sunum
          </p>
        </div>

        {Object.entries(categorizedItems).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-stone-800 mb-6 text-center">
              {category}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-stone-900">
                        {item.name}
                      </h3>
                      <span className="text-stone-800 font-medium">
                        {item.price} ₺
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <footer className="text-center mt-16 text-stone-600 text-sm">
          <p>© {new Date().getFullYear()} Tarihi Taş Mekan - Tüm hakları saklıdır</p>
        </footer>
      </div>
    </main>
  );
} 