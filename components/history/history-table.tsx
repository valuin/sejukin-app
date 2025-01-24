import { EyeIcon, PencilIcon, Trash2Icon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const items = [
  {
    id: '1224',
    type: 'Vegetables',
    weight: '1.2 kg',
    lastEntry: '26 Aug 2024',
    expire: '29 Aug 2024',
    retrieval: '27 Aug 2024',
  },
  {
    id: '1225',
    type: 'Fruits',
    weight: '2.4 kg',
    lastEntry: '26 Aug 2024',
    expire: '29 Aug 2024',
    retrieval: '27 Aug 2024',
  },
  {
    id: '1226',
    type: 'Meat',
    weight: '1.0 kg',
    lastEntry: '26 Aug 2024',
    expire: '29 Aug 2024',
    retrieval: '27 Aug 2024',
  },
  {
    id: '1227',
    type: 'Dairy',
    weight: '0.5 kg',
    lastEntry: '26 Aug 2024',
    expire: '29 Aug 2024',
    retrieval: '27 Aug 2024',
  },
  {
    id: '1228',
    type: 'Grains',
    weight: '1.8 kg',
    lastEntry: '26 Aug 2024',
    expire: '29 Aug 2024',
    retrieval: '27 Aug 2024',
  },
  {
    id: '1229',
    type: 'Seafood',
    weight: '0.3 kg',
    lastEntry: '26 Aug 2024',
    expire: '29 Aug 2024',
    retrieval: '27 Aug 2024',
  },
];

export function HistoryTable() {
  return (
    <Table className="bg-zinc-50 rounded-xl">
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-[150px] px-12 py-4 font-semibold text-black">
            ID
          </TableHead>
          <TableHead className="px-12 py-4 font-semibold text-black">
            Type
          </TableHead>
          <TableHead className="px-12 py-4 font-semibold text-black">
            Weight
          </TableHead>
          <TableHead className="px-12 py-4 font-semibold text-black">
            Last Entry
          </TableHead>
          <TableHead className="px-12 py-4 font-semibold text-black">
            Expire
          </TableHead>
          <TableHead className="px-12 py-4 font-semibold text-black">
            Retrieval
          </TableHead>
          <TableHead className="px-12 py-4"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="px-12 py-2">{item.id}</TableCell>
            <TableCell className="px-12 py-2">{item.type}</TableCell>
            <TableCell className="px-12 py-2">{item.weight}</TableCell>
            <TableCell className="px-12 py-2">{item.lastEntry}</TableCell>
            <TableCell className="px-12 py-2">{item.expire}</TableCell>
            <TableCell className="px-12 py-2">{item.retrieval}</TableCell>
            <TableActions />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function TableActions() {
  return (
    <TableCell className="space-x-2 text-right py-6">
      <Button variant="outline" size="icon">
        <EyeIcon />
      </Button>
      <Button variant="outline" size="icon">
        <PencilIcon />
      </Button>
      <Button variant="outline" size="icon">
        <Trash2Icon />
      </Button>
    </TableCell>
  );
}
