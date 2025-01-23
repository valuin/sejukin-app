"use client";

import Header from "@/components/ui/header";
import SearchBar from "@/components/ui/search-bar";
import { Button } from "@/components/ui/button";
import { Tracker } from "@/components/tracker-primitive";
import StorageCard from "@/components/storage-card";
import { overallTrackerData, storageUnitsData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const overallEfficiency = 98.3;

  return (
    <div className="container mx-auto py-10 px-12">
      <Header />

      <Card className="mb-6">
        <CardContent>
          <div className="flex justify-between items-center mb-4 mt-4">
            <h2 className="text-lg font-semibold font-sans">
              Overall Temperature Condition
            </h2>
            <div className="text-sm text-gray-600 font-sans">
              {overallEfficiency}% Stable
            </div>
          </div>
          <Tracker data={overallTrackerData} height="h-16" />
          <div className="mt-2 text-sm text-gray-500 flex justify-between font-sans  ">
            <span>Nov 14</span>
            <span>Dec 29</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mb-4">
        <SearchBar />
        <Button variant="default" className="px-4 bg-blue-600 font-sans ">
            Add Storage
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {storageUnitsData.map((storageUnit) => (
          <StorageCard key={storageUnit.id} {...storageUnit} />
        ))}
      </div>
    </div>
  );
}
