import CarCard from "./CarCard";

const FeaturedCars = () => {
  const cars = [
    {
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop",
      brand: "BMW",
      model: "X5",
      year: 2022,
      price: "4 500 000 ₽",
      mileage: "15 000 км",
      fuelType: "Бензин",
      transmission: "Автомат",
      isNew: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
      brand: "Mercedes-Benz",
      model: "E-Class",
      year: 2021,
      price: "3 200 000 ₽",
      mileage: "25 000 км",
      fuelType: "Дизель",
      transmission: "Автомат",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      brand: "Audi",
      model: "Q7",
      year: 2023,
      price: "5 100 000 ₽",
      mileage: "5 000 км",
      fuelType: "Бензин",
      transmission: "Автомат",
      isNew: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Рекомендуемые автомобили
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Тщательно отобранные автомобили от проверенных продавцов с гарантией
            качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
