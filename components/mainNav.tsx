'use client';

import React, { useState } from 'react';
import { Menu } from './menu';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { CommandDialog } from './command';
import { UserAuthForm } from './userAuthForm';

const MainNav = () => {
  const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false);
  const mainNav = [
    { title: 'Home', href: '/' },
    { title: 'History', href: '/history' },
  ];

  const handleClickLogin = () => {
    setIsOpenLogin(true);
  };
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <Menu items={mainNav} />
        <nav>
          <Button
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-4',
            )}
            onClick={handleClickLogin}
          >
            Login
          </Button>
        </nav>
      </div>
      <CommandDialog
        open={isOpenLogin}
        onOpenChange={() => setIsOpenLogin(false)}
      >
        <UserAuthForm />
      </CommandDialog>
    </header>
  );
};

export default MainNav;
