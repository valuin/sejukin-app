import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, MapPin, Sun } from "lucide-react";
import { Tracker } from "./tracker-primitive";

interface StorageCardProps {
  id: string;
  location: string;
  temperature: string;
  efficiency: number;
  trackerData: {
    color: string;
    tooltip: string;
  }[];
}

const StorageCard: React.FC<StorageCardProps> = ({
  id,
  location,
  temperature,
  efficiency,
  trackerData,
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold font-sans">{id}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Thermometer className="h-4 w-4" />
          <span>{temperature}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Sun className="h-4 w-4" />
          <span>{efficiency}% Efficiency</span>
        </div>
        <div>
          <Tracker
            data={trackerData.map((value) => ({
              color: value.color,
              tooltip: `Value: ${value.tooltip}`,
            }))}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default StorageCard;
