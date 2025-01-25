import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, MapPin, Sun } from 'lucide-react';
import { Tracker } from './tracker-primitive';
import Link from 'next/link';

interface StorageCardProps {
  href?: string;
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
  href,
  id,
  location,
  temperature,
  efficiency,
  trackerData,
}) => {
  return (
    <Link href={'/dashboard'}>
      <Card className="w-full hover:shadow-lg duration-150">
        <CardHeader className="space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold font-sans">
            {href ? <Link href={href}>{id}</Link> : id}
          </CardTitle>
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
                tooltip: `${value.tooltip}`,
              }))}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default StorageCard;
