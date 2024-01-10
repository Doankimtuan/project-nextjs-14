'use client';

import React, { useRef } from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';
import { cn } from '@/lib/utils';

const OrderButton = () => {
  return (
    <div className="flex justify-end mb-6 mr-3">
      <Button>
        <Icons.pizza className="mr-2 h-4 w-4" />
        Order
      </Button>
    </div>
  );
};

export default OrderButton;
