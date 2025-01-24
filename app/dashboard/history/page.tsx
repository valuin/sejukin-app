import { HistoryTable } from '@/components/history/history-table';
import TablePagination from '@/components/history/table-pagination';
import { Input } from '@/components/ui/input';

export default function HistoryPage() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <h1 className="text-4xl col-span-2">Storage A12I History</h1>
      <form className="col-span-2 w-1/2">
        <label className="sr-only" htmlFor="search">
          Search
        </label>
        <Input
          type="search"
          id="search"
          placeholder="Search storage history..."
        />
      </form>
      <div className="w-full col-span-2 space-y-4">
        <HistoryTable />
        <TablePagination />
      </div>
    </div>
  );
}
