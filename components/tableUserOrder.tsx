import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Icons } from './icons';

const TableUserOrder = () => {
  const invoices = [
    {
      no: '01',
      name: 'Paid',
      dish: 'Com ca',
      note: 'Credit Card',
      price: '45000',
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1">No.</TableHead>
          <TableHead className="w-1/5">name</TableHead>
          <TableHead className="w-1/5">Dish</TableHead>
          <TableHead>Note</TableHead>
          <TableHead className="w-4">Price</TableHead>
          <TableHead className="w-[80px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.no}>
            <TableCell className="font-medium">{invoice.no}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.dish}</TableCell>
            <TableCell>{invoice.note}</TableCell>
            <TableCell>{invoice.price}</TableCell>
            <TableCell>
              <div className="flex justify-between content-center">
                <Icons.edit
                  size={18}
                  className="cursor-pointer hover:text-sky-600"
                />
                <Icons.remove
                  size={18}
                  className="cursor-pointer hover:text-sky-600"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableUserOrder;
