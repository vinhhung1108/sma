"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold flex items-end space-x-2">
        <Link href="/">
          <div className="flex items-end space-x-2">
            <Image
              src="/images/logo-white.png"
              alt="SMA Vina Logo"
              className="h-14"
              width={56}
              height={56}
            ></Image>
            <Image
              src="/images/logo-text-white.png"
              alt="SMA Vina Logo"
              className="h-10"
              width={120}
              height={40}
            ></Image>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Menu */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent z-50 transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
          <li>
            <Link href="/" className="font-semibold hover:underline">
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Dịch Vụ
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Dự Án
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Liên Hệ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
