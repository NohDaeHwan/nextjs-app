'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NavItem } from '@/components';

interface NavbarProps {
  currentUser?: 'User' | null;
}

export const Navbar = ({ currentUser }: NavbarProps) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="relative z-10 w-full text-white bg-orange-500">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        {/* logo */}
        <div className="flex items-center text-2xl h-14">
          <Link href="/">Logo</Link>
        </div>

        {/* menu */}
        <div className="text-2xl sm:hidden">
          {menu === false ? <button onClick={handleMenu}>+</button> : <button onClick={handleMenu}>-</button>}
        </div>

        {/* nav-items large screen*/}
        <div className="hidden sm:block">
          <NavItem currentUser={currentUser} />
        </div>
      </div>

      {/* nav-items mobile*/}
      <div className="block sm:hidden">{menu === false ? null : <NavItem mobile currentUser={currentUser} />}</div>
    </nav>
  );
};
