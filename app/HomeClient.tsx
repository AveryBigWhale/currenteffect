// app/HomeClient.tsx
"use client";

import React, { useRef, useState } from 'react';
import NewsSection from '../components/NewsSection';
import Navbar from '../components/Navbar';

export default function HomeClient({ children }: { children: React.ReactNode }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleNavbarHeight = (height: number) => {
    setNavbarHeight(height);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollPaddingTop: `${navbarHeight}px` }}
    >
      <Navbar
        scrollContainerRef={scrollContainerRef}
        onHeightChange={handleNavbarHeight}
      />
      {children}
    </div>
  );
}