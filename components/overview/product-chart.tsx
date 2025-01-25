'use client';

import { Bar, BarChart, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { type: 'chili', quantity: 275, fill: 'var(--color-chili)' },
  { type: 'potato', quantity: 200, fill: 'var(--color-potato)' },
  { type: 'wheat', quantity: 187, fill: 'var(--color-wheat)' },
  { type: 'eggplants', quantity: 173, fill: 'var(--color-eggplants)' },
  { type: 'others', quantity: 90, fill: 'var(--color-others)' },
];

const chartConfig = {
  quantity: {
    label: 'Quantity',
  },
  chili: {
    label: 'Chili',
    color: 'hsl(var(--chart-1))',
  },
  potato: {
    label: 'Potato',
    color: 'hsl(var(--chart-2))',
  },
  wheat: {
    label: 'Wheat',
    color: 'hsl(var(--chart-3))',
  },
  eggplants: {
    label: 'Vegetables',
    color: 'hsl(var(--chart-4))',
  },
  others: {
    label: 'Others',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function ProductChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Type</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 20,
            }}
          >
            <YAxis
              dataKey="type"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="quantity" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="quantity" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
