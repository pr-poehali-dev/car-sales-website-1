import CarCard from "./CarCard";

const FeaturedCars = () => {
  const cars = [
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      brand: "Yamaha",
      model: "YZF-R1",
      year: 2023,
      price: "1 850 000 ₽",
      mileage: "2 500 км",
      fuelType: "Бензин",
      transmission: "6 передач",
      isNew: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
      brand: "BMW",
      model: "R 1250 GS",
      year: 2022,
      price: "2 200 000 ₽",
      mileage: "8 000 км",
      fuelType: "Бензин",
      transmission: "6 передач",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
      brand: "Honda",
      model: "CBR1000RR",
      year: 2024,
      price: "1 650 000 ₽",
      mileage: "500 км",
      fuelType: "Бензин",
      transmission: "6 передач",
      isNew: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Рекомендуемые мотоциклы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Тщательно отобранные мотоциклы от проверенных продавцов с гарантией
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
