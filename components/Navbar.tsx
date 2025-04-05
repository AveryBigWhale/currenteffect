"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../assets/logo.svg"; // 使用 SVGR 轉換後的 Logo 元件

// 定義傳入的 prop 型別，包含 scrollContainerRef 與 onHeightChange callback
interface NavbarProps {
  // scrollContainerRef: React.RefObject<HTMLElement>;
  // scrollContainerRef: React.RefObject<HTMLDivElement>;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  onHeightChange: (height: number) => void;
  fixedColor?: string; // 新增的 prop
}

export default function Navbar({ scrollContainerRef, onHeightChange, fixedColor }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) return;
    const handleScroll = () => {
      console.log('scrollTop:', container.scrollTop);
      setScrolled(container.scrollTop > 50);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  useEffect(() => {
    // 當 Navbar mount 後，讀取高度並透過 onHeightChange 傳出
    if (navbarRef.current) {
      const height = navbarRef.current.offsetHeight;
      onHeightChange(height);
      console.log('Navbar height:', height);
    }
  }, [onHeightChange]);

  return (
    <nav
      ref={navbarRef}
      className={`relative fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#001f3f]' : 'bg-transparent'
      }`}
      style={{ backgroundColor: fixedColor || (scrolled ? '#001f3f' : 'transparent') }} // 使用 fixedColor
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={Logo} alt="Newspaper Icon" width={240} height={100} />
            </Link>
          </div>
          {/* 桌機選單：在 md 以上顯示 */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="block text-white hover:underline">
              首頁
            </Link>
            <Link href="/about" className="text-white hover:underline">
              關於我們
            </Link>
            <Link href="/news" className="text-white hover:underline">
              新聞
            </Link>
            {/* <Link href="/services" className="text-white hover:underline">
              服務項目
            </Link> */}
            
          </div>
          {/* 行動版選單按鈕：在 md 以下顯示 */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? '✖️' : '☰'}
            </button>
          </div>
        </div>
      </div>
      {/* 行動版選單內容：僅在 isOpen 為 true 時顯示 */}
      {isOpen && (
        <div className="md:hidden bg-[#001f3f]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-white hover:underline">
              首頁
            </Link>
            <Link href="/about" className="block text-white hover:underline">
              關於我們
            </Link>
            {/* <Link href="/services" className="block text-white hover:underline">
              服務項目
            </Link> */}
            <Link href="/contact" className="block text-white hover:underline">
              聯絡我們
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}