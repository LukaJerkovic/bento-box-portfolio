'use client';

import { useState } from 'react';

import { ChevronDownCircle, ChevronUpCircle } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex items-center justify-between p-6 mx-8 my-6 bg-white rounded-3xl border-4 border-[#AD343E]">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-[#0C1B33] pr-8 hover:first-letter:text-red-800 hover:scale-125 hover:pl-2 lg:text-lg"
          >
            .lukajerkovic
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-[#0C1B33] pr-8 hover:first-letter:text-red-800 lg:text-lg hover:scale-125"
          >
            .home
          </Link>
          <Link
            href="#projects"
            className="text-[#0C1B33] pr-8 hover:first-letter:text-red-800 lg:text-lg hover:scale-125"
          >
            .projects
          </Link>
          <Link
            href="#contact"
            className="text-[#0C1B33] pr-8 hover:first-letter:text-red-800 lg:text-lg  hover:scale-125"
          >
            .contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#0C1B33]">
            {isOpen ? (
              <ChevronUpCircle className="text-red-800" size={24} />
            ) : (
              <ChevronDownCircle className="text-[#0C1B33]" size={24} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute w-[85%] p-6 bg-white m-8 mt-0 rounded-3xl border-4 border-[#AD343E]">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-[#0C1B33] text-2xl pr-6 hover:first-letter:text-red-800 hover:scale-125 hover:pl-8"
            >
              .home
            </Link>
            <Link
              href="/#projects"
              className="text-[#0C1B33] text-2xl pr-6 hover:first-letter:text-red-800 hover:scale-125 hover:pl-8"
            >
              .projects
            </Link>
            <Link
              href="/#contact"
              className="text-[#0C1B33] text-2xl pr-6 hover:first-letter:text-red-800 hover:scale-125 hover:pl-8"
            >
              .contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
