"use client"

import React, { useRef, useState } from 'react';
import { useParams } from 'next/navigation'; // 使用 useParams
import newsData from '../newsData.json'; // 引入新聞數據
import Image from 'next/image';
// import Layout from '../../layout'; // 引入佈局組件
// import Navbar from '../../../components/Navbar'; // 引入 Navbar

const NewsDetail = () => {
  const { id } = useParams(); // 獲取路由參數
  const scrollContainerRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  
  const handleNavbarHeight = (height: number) => {
    setNavbarHeight(height);
  };

  // 根據 id 獲取對應的新聞數據
  const newsItem = newsData.find((news) => news.id === parseInt(id as string));

  if (!newsItem) {
    return <div>新聞未找到</div>;
  }

  return (
    <div ref={scrollContainerRef} className="bg-white min-h-screen overflow-y-scroll snap-y snap-mandatory"
    style={{ scrollPaddingTop: `${navbarHeight}px` }}>
      
      {/* Full-screen Banner Section */}
      {/* <Navbar
        scrollContainerRef={scrollContainerRef}
        onHeightChange={handleNavbarHeight}
        fixedColor="#001f3f" // 設置固定的深藍色
      /> */}
      {/* <Navbar scrollContainerRef={scrollContainerRef} onHeightChange={handleNavbarHeight} /> */}
      <section
        className="bg-white min-h-screen snap-start flex flex-col justify-center items-center bg-cover bg-center"
      >
        <div 
          style={{ margin: '0 auto', textAlign: 'left', width: '75%', paddingTop: '3%' }}>
          <h1 className='text-gray-800 text-3xl font-bold' >{newsItem.title}</h1>
          <p className='text-gray-800 text-sm' 
            style={{ paddingTop: '2%'}}>{newsItem.date}</p>
        </div>
        
        <div className=" text-gray-800 mt-4" style={{ margin: '0 auto', textAlign: 'center', width: '75%', marginTop: '20px' }}>
          <Image style={{ margin: '0 auto', textAlign: 'center', width: '100%', marginTop: '20px'  }}
          src={newsItem.imageUrl} alt={newsItem.title} />
        </div>


        <div className='text-xl font-bold' 
          style={{ margin: '0 auto', textAlign: 'left', width: '75%' }}>
            {newsItem.description.map((desc, index) => (
            <div className="text-gray-800 text-md font-normal leading-relaxed mt-6" key={index}>
              {newsItem.description[index].split('\n').map((line, index) => (
                  <p key={index} className="mb-4">{line}</p>
              ))}
              {/* {newsItem.texts[index] && ( 
                <p className="text-gray-800 text-md font-normal leading-relaxed mt-4">
                  {newsItem.texts[index].split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < newsItem.texts[index].split('\n').length && <><br /><br /></>} 
                    </span>
                  ))}
                </p>
              )} */}
            </div>
            ))}
          {newsItem.subtitle.map((subtitle, index) => (
            <div key={index}>
            <h1 className='text-gray-800 text-2xl mt-6 font-bold'>{subtitle}</h1>
              {newsItem.texts[index] && ( // 確保有對應的描述
                <p className="text-gray-800 text-md font-normal leading-relaxed mt-6">
                  {newsItem.texts[index].split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < newsItem.texts[index].split('\n').length && <><br /><br /></>} {/* 添加換行 */}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* <section className='h-screen h-full snap-start flex flex-col mt-0'>
        
      </section> */}
      {/* Next Section */}
      {/* <section className="h-screen snap-start flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Next Section</h2>
        <p className="text-lg">Here is some additional content.</p>
      </section> */}
    </div>
    
  );
};

export default NewsDetail;