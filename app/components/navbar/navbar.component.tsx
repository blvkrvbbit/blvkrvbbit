'use client';

import Link from 'next/link';
import './navbar.styles.css';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Logo from '../../img/logo.svg';
const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menu]);
  return (
    <header className='navbar-header fixed left-0 right-0 top-0 border-b'>
      <nav className='container mx-auto flex justify-between p-4 items-center'>
        <div className='navbar-brand'>
          <a href='#' className='font-bold'>
            <Logo />
          </a>
        </div>
        <div className='hamburger lg:hidden' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='menu hidden lg:block'>
          <a href='#about' className='mr-2'>
            about
          </a>
          <a href='#works' className='mr-2'>
            works
          </a>
          <Link href='#contact' className=''>
            contact
          </Link>
        </div>
      </nav>
      <div
        className={`mobile-menu flex flex-col justify-center items-end px-4 right-0 w-full lg:hidden ${
          menu ? 'open' : ''
        }`}
      >
        <a
          href='#about'
          className='container mx-auto text-right text-3xl block mb-2'
          onClick={toggleMenu}
        >
          about
        </a>
        <a
          href='#works'
          className='container mx-auto text-right text-3xl block mb-2'
          onClick={toggleMenu}
        >
          works
        </a>
        <a
          href='#contact'
          className='container mx-auto text-right text-3xl block mb-2'
          onClick={toggleMenu}
        >
          contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
