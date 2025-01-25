"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const batteryData = [
  { day: "Monday", battery: 70 },
  { day: "Tuesday", battery: 65 },
  { day: "Wednesday", battery: 80 },
  { day: "Thursday", battery: 90 },
  { day: "Friday", battery: 85 },
  { day: "Saturday", battery: 92 },
  { day: "Sunday", battery: 88 },
];

const batteryConfig = {
  battery: {
    label: "Battery Rate",
    color: "#16a34a",
  },
} satisfies ChartConfig;

export function BatteryChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Battery Rate Chart</CardTitle>
        <CardDescription>
          Monitoring solar power machine battery levels over the past week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full max-h-[300px]" config={batteryConfig}>
          <AreaChart
            accessibilityLayer
            data={batteryData}
            margin={{ left: 24, right: 24 }}
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
              dataKey="battery"
              type="linear"
              fill="var(--color-battery)"
              fillOpacity={0.4}
              stroke="var(--color-battery)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}