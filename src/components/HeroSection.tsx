import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-violet-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Более 10,000 автомобилей
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Найдите идеальный
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  автомобиль
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-lg">
                Тысячи проверенных автомобилей от надежных продавцов. Быстрый
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
                  <Input placeholder="Выберите марку" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Модель
                  </label>
                  <Input placeholder="Выберите модель" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Цена до
                  </label>
                  <Input placeholder="3 000 000 ₽" />
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 h-12">
                <Icon name="Search" size={18} className="mr-2" />
                Найти автомобиль
              </Button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Автомобилей</div>
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
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop"
                alt="Современный автомобиль"
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
