import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Bike" size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MotoHub</span>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Кнопки действий */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="User" size={16} />
              Войти
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
            >
              Продать мотоцикл
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
