
import React from 'react';

const BrandSection: React.FC = () => {
  return (
    <div className="hidden md:flex flex-1 bg-indigo-950 relative overflow-hidden items-center justify-center p-12">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="h-full w-full" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-white max-w-lg">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-3xl font-bold tracking-tight">Nexus CRM</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
          Giải pháp quản trị <span className="text-indigo-400">thông minh</span> cho doanh nghiệp hiện đại.
        </h2>

        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="bg-indigo-800/50 p-3 rounded-lg border border-white/10">
              <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Báo cáo thời gian thực</h3>
              <p className="text-indigo-200/80 leading-relaxed">Theo dõi hiệu suất kinh doanh với các biểu đồ trực quan và cập nhật liên tục.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-indigo-800/50 p-3 rounded-lg border border-white/10">
              <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Quản lý khách hàng tập trung</h3>
              <p className="text-indigo-200/80 leading-relaxed">Toàn bộ dữ liệu khách hàng được lưu trữ an toàn và dễ dàng truy xuất tại một nơi.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/${i + 10}/40/40`} 
                alt="User" 
                className="w-10 h-10 rounded-full border-2 border-indigo-950"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-indigo-950 flex items-center justify-center text-xs font-bold">
              +1k
            </div>
          </div>
          <p className="text-sm text-indigo-200/60 font-medium italic">"Nexus đã thay đổi cách chúng tôi vận hành doanh nghiệp"</p>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
