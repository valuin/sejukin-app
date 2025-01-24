'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { day: 'Monday', temperature: 6 },
  { day: 'Tuesday', temperature: 8 },
  { day: 'Wednesday', temperature: 7 },
  { day: 'Thursday', temperature: 2 },
  { day: 'Friday', temperature: 5 },
  { day: 'Saturday', temperature: 5 },
  { day: 'Sunday', temperature: 6 },
];

const chartConfig = {
  temperature: {
    label: 'Temperature',
    color: '#2563EB',
  },
} satisfies ChartConfig;

export function TemperatureChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Temperature Chart</CardTitle>
        <CardDescription>
          Showing average temperature for the last 1 week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full max-h-[300px]" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="temperature"
              type="linear"
              fill="var(--color-temperature)"
              fillOpacity={0.4}
              stroke="var(--color-temperature)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
