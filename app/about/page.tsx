"use client"

import React, { useRef, useState } from 'react';
// import NewsSection from '../../components/NewsSection';
// import NavBar from '../../components/Navbar';
// import Image from 'next/image';

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  const handleNavbarHeight = (height: number) => {
    setNavbarHeight(height);
  };

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory"
    style={{ scrollPaddingTop: `${navbarHeight}px` }}>
      {/* Full-screen Banner Section */}
      {/* <NavBar scrollContainerRef={scrollContainerRef} onHeightChange={handleNavbarHeight} /> */}
      <section
        className="relative h-screen snap-start flex flex-col justify-center items-center bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/banner-about.png')",
          // backgroundColor: "rgba(255, 0, 0, 0.5)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)" // 自定義陰影效果
         }}
      >
        <div style={{ marginLeft: '15%', marginRight: 'auto', width: '75%', zIndex: 1 }}>
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Current Effect 
          </h1>
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          新浪潮
          </h1>
          <div style={{ marginLeft: '0%', marginRight: 'auto', width: '75%', zIndex: 1 }} 
            className="text-white font-medium mb-4">
            <p className='leading-7'>Current Effect 成立於 2030 年，Current Effect 為全球領先的人類延展與生態科技公司。
            <br />從潮間帶的神秘世界中，我們發現了生命的永恆密鑰。
            <br />憑藉著我們在 exhibit O 牡蠣上的突破性研究，我們開啟了人類生存的新篇章。</p>
            關於 Current Effect
            專精於生物自我修復、意識神經網絡、與自然共感型智慧應用。公司總部設於太平洋科學自由區，並於全球 70 餘國設有研究基地與實驗場域，持續以「科技創造持續幸福」為核心理念，引領人類生活與地球未來的深度融合。


          </div>
        </div>
        
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" /> {/* 使用 Tailwind CSS 的類來設置黑色和透明度 */}

      </section>
      {/* <NewsSection className="snap-start"/> */}
      {/* <section className='h-screen h-full snap-start flex flex-col mt-0'>
        
      </section> */}
      {/* Next Section */}
      <section style={{
        backgroundImage: "url('/happyLife.png')",
        }} 
        className="h-screen snap-start flex flex-col justify-center items-center bg-gray-100">
        <div style={{ marginLeft: '5%', marginRight: '20%', marginTop: '25%', width: '75%',  zIndex: 1 }}
          className='max-w-2xl mx-auto md:max-w-xl'>
          <h2 className="text-3xl font-bold mb-1">我們的使命</h2>
          <p className="text-xl font-bold ">突破生命疆界，創造無限幸福</p>
          <br />


          <p className='leading-7'>我們致力於探索生命本質，延展生命長度。
          <br />我們提供全球最尖端的生化科技產品，致力於突破生命的極限，讓人類享受更豐富、更長久的幸福人生。
          {/* <br />從潮間帶的神秘世界中，我們發現了生命的永恆密鑰。
          <br />憑藉著我們在 exhibit O 牡蠣上的突破性研究，我們開啟了人類生存的新篇章。 */}
          </p> 
        </div>
       
        
      </section>
    </div>
  );
}