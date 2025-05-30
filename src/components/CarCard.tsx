import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CarCardProps {
  image: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  isNew?: boolean;
}

const CarCard = ({
  image,
  brand,
  model,
  year,
  price,
  mileage,
  fuelType,
  transmission,
  isNew = false,
}: CarCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg bg-white">
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={`${brand} ${model}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isNew && (
            <Badge className="absolute top-3 left-3 bg-green-500 hover:bg-green-600">
              Новый
            </Badge>
          )}
          <div className="absolute top-3 right-3">
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/80 hover:bg-white"
            >
              <Icon name="Heart" size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {brand} {model}
          </h3>
          <p className="text-sm text-gray-600">{year} год</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Icon name="Gauge" size={14} />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Fuel" size={14} />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Settings" size={14} />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={14} />
            <span>Москва</span>
          </div>
        </div>

        <div className="border-t pt-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">{price}</div>
          </div>
          <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
