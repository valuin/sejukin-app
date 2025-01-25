import { ProductChart } from '@/components/overview/product-chart';
import { RadialChartsCard } from '@/components/overview/radial-charts';
import { TemperatureChart } from '@/components/overview/temperature-chart';
import { BatteryChart } from '@/components/overview/battery-chart';

export default function OverviewPage() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <h1 className="text-4xl col-span-2">Storage A12I</h1>
      <TemperatureChart />
      <RadialChartsCard />
      <ProductChart />
      <BatteryChart />
    </div>
  );
}
