import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Более 5,000 мотоциклов
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Найдите идеальный
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {" "}
                  мотоцикл
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-lg">
                Тысячи проверенных мотоциклов от надежных продавцов. Быстрый
                поиск, честные цены, безопасные сделки.
              </p>
            </div>

            {/* Поиск */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Марка
                  </label>
                  <Input placeholder="Yamaha, Honda, BMW..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Тип
                  </label>
                  <Input placeholder="Спорт, круизер, эндуро..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Объем, см³
                  </label>
                  <Input placeholder="600-1000" />
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 h-12">
                <Icon name="Search" size={18} className="mr-2" />
                Найти мотоцикл
              </Button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5K+</div>
                <div className="text-sm text-gray-600">Мотоциклов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Дилеров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>

          {/* Правая колонка с изображением */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Спортивный мотоцикл"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>

            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
