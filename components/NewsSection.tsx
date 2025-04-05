// NewsSection.jsx
import Link from 'next/link';
import newsData from '@/app/news/newsData.json'; // 引入新聞數據
import Image from 'next/image';

export default function NewsSection() {
  // 假設這裡的資料是靜態的
  // 如果您想要動態抓取，可以改成從 API 或 CMS 取得

  return (
    <section className="min-h-screen h-full snap-start flex flex-col mt-0 py-12 bg-gray-100">
      {/* className='h-screen h-full snap-start flex flex-col mt-0' */}
      <div className="container mx-auto px-4">
        {/* 主標、副標 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-black">新聞中心</h2>
          <p className="text-gray-600">News</p>
        </div>

        {/* 新聞列表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`}> {/* 使用 Link 組件包裹新聞項目 */}
            <div className="bg-white shadow rounded overflow-hidden cursor-pointer"> {/* 添加 cursor-pointer 以顯示可點擊 */}
              <Image
                src={news.imageUrl}
                alt={news.title}
                width={500}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-[#001f3f] mb-1">{news.date}</div>
                <h3 className="text-lg text-[#001f3f] font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-700"
                  style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%', // 確保最大寬度不超過父容器
                  }}>
                  {news.description}</p>
              </div>
            </div>
          </Link>
          ))}
        </div>

        {/* 檢視更多 */}
        {/* <div className="text-center mt-8">
          <a
            href="/news"
            className="inline-block text-blue-600 hover:underline"
          >
            檢視所有新聞中心
          </a>
        </div> */}
      </div>
    </section>
  );
}