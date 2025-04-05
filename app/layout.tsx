// app/// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import HomeClient from './HomeClient';
import type { Metadata } from 'next';
// import icon from '../public/web-logo.png';

// export const metadata: Metadata = {
//   title: 'Current Effect',
//   // description: '探索前所未有的視覺體驗，打造屬於你的新時代。',
//   icons: {
//     icon: icon,  // 這邊對應 public 資料夾的 favicon
//   },
// }
export const metadata: Metadata = {
  title: 'Current Effect',
  icons: {
    icon: '../public/web-logo.png', // ✅ 不要 import，直接寫字串路徑
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-TW">
      <body>
        <HomeClient>{children}</HomeClient>
        <footer className="bg-gray-800 text-intertidalLightMain py-6 text-center mt-0">
          <div className="container mx-auto">
            <h3 className="text-normal font-normal">© Current Effect 2130, all rights reserved.</h3>
          </div>
        </footer>
      </body>
    </html>
  );
}
  // const scrollContainerRef = useRef(null);

  // return (
    
  //   <html lang="zh-TW">
  //     <body>
     
  //       <main>{children}</main>
  //       <footer className="bg-gray-800 text-intertidalLightMain py-6 text-center mt-0">
  //           <div className="container mx-auto">
  //             <h3 className="text-lg font-semibold">Current Effect</h3>
  //             {/* <p>地址 | 105 台北市松山區南京東路三段261號3樓</p> */}
  //             {/* <p>電話 | 02-27520806</p> */}
  //             {/* <p>信箱 | chairperson@dpp.org.tw</p> */}
  //           </div>
  //         </footer>
  //     </body>
  //   </html>
  // );
// }