'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';
import { CommandDialog } from './command';
import { TDish } from '@/types';
import OrderForm from './order-form';

const ListDish = () => {
  const [isOpenFormOrder, setIsOpenFormOrder] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<TDish | null>(null);
  const dishes = [
    {
      id: '1',
      name: 'Mỳ Quảng Chay',
      description: 'Mắm chay làm từ tương bằng',
      image:
        'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023110911000162783/detail/menueditor_item_e89faf3da0064431b72fdb4403d6bdf1_1699527591809255309.webp',
      price: 30000,
    },
    {
      id: '2',
      name: 'Mỳ Quảng Chay',
      image:
        'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023110911000162783/detail/menueditor_item_e89faf3da0064431b72fdb4403d6bdf1_1699527591809255309.webp',
      price: 30000,
    },
    {
      id: '3',
      name: 'Mỳ Quảng Chay',
      image:
        'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023110911000162783/detail/menueditor_item_e89faf3da0064431b72fdb4403d6bdf1_1699527591809255309.webp',
      price: 30000,
    },
    {
      id: '4',
      name: 'Mỳ Quảng Chay',
      image:
        'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023110911000162783/detail/menueditor_item_e89faf3da0064431b72fdb4403d6bdf1_1699527591809255309.webp',
      price: 30000,
    },
    {
      id: '5',
      name: 'Mỳ Quảng Chay',
      image:
        'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023110911000162783/detail/menueditor_item_e89faf3da0064431b72fdb4403d6bdf1_1699527591809255309.webp',
      price: 30000,
    },
    {
      id: '6',
      name: 'Mỳ Quảng Chay',
      image:
        'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023110911000162783/detail/menueditor_item_e89faf3da0064431b72fdb4403d6bdf1_1699527591809255309.webp',
      price: 30000,
    },
    {
      id: '7',
      name: 'Mỳ Quảng Chay',
      image:
        'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023110911000162783/detail/menueditor_item_e89faf3da0064431b72fdb4403d6bdf1_1699527591809255309.webp',
      price: 30000,
    },
  ];

  const openPopUpOrder = (dish: TDish) => {
    onToggleOpenForm();
    setItemSelected(dish);
  };

  const onToggleOpenForm = () => {
    console.log('runnnnn');

    setIsOpenFormOrder((prev) => !prev);
  };

  return (
    <div className="flex justify-between flex-wrap gap-2 mt-8">
      {dishes.map((dish) => (
        <div
          key={dish.id}
          className="flex justify-between border shadow-sm shadow-stone-100 p-4 rounded-md  w-full lg:w-[32%] "
        >
          <Image
            src={dish.image}
            alt={dish.name}
            width={130}
            height={130}
            className="rounded"
          />
          <div className="w-3/5">
            <h3 className="font-bold">{dish.name}</h3>
            <div className="h-2/5 mt-5 text-stone-400  ">
              <p>{dish.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">{dish.price}</p>
              <Button
                variant="outline"
                className="rounded-full bg-teal-50 border-0"
                onClick={() => openPopUpOrder(dish as TDish)}
              >
                <Icons.add />
              </Button>
            </div>
          </div>
        </div>
      ))}

      <CommandDialog open={isOpenFormOrder} onOpenChange={onToggleOpenForm}>
        <OrderForm
          itemSelected={itemSelected as TDish}
          onCloseForm={onToggleOpenForm}
        />
      </CommandDialog>
    </div>
  );
};

export default ListDish;
