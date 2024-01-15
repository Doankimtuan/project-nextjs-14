import HeaderOrderPage from '@/components/header-order-page';
import ListDish from '@/components/list-dish';
import Link from 'next/link';
import React from 'react';

const OrderPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <HeaderOrderPage />
      <ListDish />
    </div>
  );
};

export default OrderPage;
