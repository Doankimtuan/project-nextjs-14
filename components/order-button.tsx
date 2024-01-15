'use client';

import React, { useRef } from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';
import { useRouter } from 'next/navigation';

const OrderButton = () => {
  const router = useRouter();

  const handleClickOrder = () => {
    router.push('/order/1');
  };

  return (
    <div className="flex justify-end mb-6 mr-3">
      <Button onClick={handleClickOrder}>
        <Icons.pizza className="mr-2 h-4 w-4" />
        Order
      </Button>
    </div>
  );
};

export default OrderButton;
