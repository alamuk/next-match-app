'use client';

import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { GiMatchTip } from 'react-icons/gi';
import Link from 'next/link';
import NavLink from '@/components/navbar/NavLink';

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-200 to-purple-700"
      classNames={{
        item: [
          'text-xl',
          'text-white',
          'uppercase',
          'data-[active=true]:text-yellow-200',
        ],
      }}
    >
      <NavbarBrand as={Link} href={'/'}>
        <GiMatchTip size={40} className="text-gray-200" />
        <div className="font-bold text-3xl flex">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-200">Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent className="justify-center">
        <NavLink href="/members" label="Maches" />
        <NavLink href="/lists" label="Maches" />
        <NavLink href="/massages" label="Massages" />
      </NavbarContent>
      <NavbarContent className="justify-end">
        <Button
          as={Link}
          href="/login"
          variant="bordered"
          className="text-white"
        >
          Login
        </Button>
        <Button
          as={Link}
          href="/register"
          variant="bordered"
          className="text-white"
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
