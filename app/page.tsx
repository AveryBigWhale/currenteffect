"use client"

import React, { useRef, useState } from 'react';
import NewsSection from '../components/NewsSection';
import NavBar from '../components/Navbar';

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  const handleNavbarHeight = (height: number) => {
    setNavbarHeight(height);
  };


  return (
    <div ref={scrollContainerRef} className="min-h-screen overflow-y-scroll snap-y snap-mandatory"
    style={{ scrollPaddingTop: `${navbarHeight}px` }}>
      {/* Full-screen Banner Section */}
      {/* <NavBar scrollContainerRef={scrollContainerRef} onHeightChange={handleNavbarHeight} /> */}
      <section
        className="h-screen snap-start flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
        <div style={{ marginLeft: '65%', marginRight: 'auto', width: 'auto' }}>
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          嶄新人生
          </h1>
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          創造新時代
          </h1>
        </div>
       
        
      </section>
      <NewsSection />
      {/* // className="min-h-screen snap-start"/> */}
      {/* <section className='h-screen h-full snap-start flex flex-col mt-0'>
        
      </section> */}
      {/* Next Section */}
      {/* <section className="h-screen snap-start flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Next Section</h2>
        <p className="text-lg">Here is some additional content.</p>
      </section> */}
    </div>
  );
}