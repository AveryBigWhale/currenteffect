
'use client';

import React, { useRef, useEffect  } from 'react';
import newsData from '@/app/news/newsData.json';
import Image from 'next/image';
import ImageLoader from './ImageLoader'; // Adjust the path as necessary
import news1 from '../public/news1.png';
import news2 from '../public/news2.png';
import news3 from '../public/news3.png';

const newsImages = [news1, news2, news3];

type Props = {
  id: string;
};



const NewsDetail = ({ id }: Props) => {
  const scrollContainerRef = useRef(null);
  const newsItem = newsData.find((news) => news.id === parseInt(id, 10));

  useEffect(() => {
    console.log('newsItem.imageUrl:', newsItem?.imageUrl);
  }, [newsItem]);


  if (!newsItem) {
    return <div>新聞未找到</div>;
  }

  return (
    <div
      ref={scrollContainerRef}
      className="bg-white min-h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <section className="bg-white min-h-screen snap-start flex flex-col justify-center items-center bg-cover bg-center">
        <div style={{ margin: '0 auto', textAlign: 'left', width: '75%', paddingTop: '3%' }}>
          <h1 className="text-gray-800 text-3xl font-bold">{newsItem.title}</h1>
          <p className="text-gray-800 text-sm" style={{ paddingTop: '2%' }}>
            {newsItem.date}
          </p>
        </div>

        <div
          className="text-gray-800 mt-4"
          style={{ margin: '0 auto', textAlign: 'center', width: '75%', marginTop: '20px',
            // backgroundImage: `url(${ImageLoader({ src: newsItem.imageUrl })})`,
          }}
          
        >
          <Image
            style={{ margin: '0 auto', width: '100%', marginTop: '20px' }}
            unoptimized
            src={newsImages[newsItem.id -1]}
            // src={newsItem.imageUrl}
            alt={newsItem.title}
            width={800}
            height={400}
            loader={({ src }) => ImageLoader({ src })}
            // loader={ImageLoader}
          />
        </div>

        <div
          className="text-xl font-bold"
          style={{ margin: '0 auto', textAlign: 'left', width: '75%' }}
        >
          {newsItem.description.map((desc, index) => (
            <div className="text-gray-800 text-md font-normal leading-relaxed mt-6" key={index}>
              {desc.split('\n').map((line, lineIndex) => (
                <p key={lineIndex} className="mb-4">
                  {line}
                </p>
              ))}
            </div>
          ))}

          {newsItem.subtitle.map((subtitle, index) => (
            <div key={index}>
              <h1 className="text-gray-800 text-2xl mt-6 font-bold">{subtitle}</h1>
              {newsItem.texts[index] && (
                <p className="text-gray-800 text-md font-normal leading-relaxed mt-6">
                  {newsItem.texts[index].split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      <br />
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
