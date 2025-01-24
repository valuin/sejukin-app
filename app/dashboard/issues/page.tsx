import { KanbanBoard } from "@/components/issues/kanban-board";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function Issues() {
    return (
      <div className="w-full gap-8">
        <h1 className="text-4xl col-span-2 mb-6">Storage A12I Issues</h1>
        
        <div className="pr-[10%]">
          <Card className="border border-red-500 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">
                Urgent Temperature Alert
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-2 text-red-800">
              <AlertTriangle className="w-5 h-5" />
              <span>
                Immediate action required. Storage Unit A12I  is above safe temperature
                range.
              </span>
            </CardContent>
          </Card>
        </div>
  
        <div className="pr-32 mt-8">
          <KanbanBoard />
        </div>
      </div>
    );
  }
