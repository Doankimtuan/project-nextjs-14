import Link from 'next/link';
import React from 'react';
import { Icons } from './icons';

function HeaderOrderPage() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-bold text-3xl">
          Quán Chay Dì Hoa - 344 Trưng Nữ Vương
        </h2>

        <p className="text-stone-400 mt-3">
          See menu details{' '}
          <Link
            href="https://food.grab.com/vn/vi/restaurant/qu%C3%A1n-chay-d%C3%AC-hoa-344-tr%C6%B0ng-n%E1%BB%AF-v%C6%B0%C6%A1ng-delivery/5-C4E1GENKNTNKTE?"
            target="_blank"
            className="text-sky-400 font-bold"
          >
            here
          </Link>
        </p>
      </div>

      <div className="mr-5 relative cursor-pointer">
        <Icons.shoppingBag></Icons.shoppingBag>
        <div className="w-5 h-5 rounded-full flex justify-center items-center bg-cyan-500 absolute top-[-8px] right-[-8px]">
          <p className="text-xs text-white ">3</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderOrderPage;
