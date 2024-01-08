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
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1">No.</TableHead>
          <TableHead className="w-[200px]">name</TableHead>
          <TableHead className="w-[200px]">Dish</TableHead>
          <TableHead>Note</TableHead>
          <TableHead className="w-4">Price</TableHead>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableUserOrder;
