
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import BrandSection from './components/BrandSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Brand Section - Visible on desktop, hidden on very small mobile if preferred, but usually 50/50 or similar */}
      <BrandSection />

      {/* Login Section */}
      <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3 bg-white flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo Only */}
          <div className="md:hidden flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Nexus CRM</span>
          </div>

          <header className="mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Chào mừng trở lại!</h1>
            <p className="text-gray-500">Vui lòng nhập thông tin để truy cập hệ thống quản trị khách hàng của bạn.</p>
          </header>

          <LoginForm />

          <footer className="mt-12 text-center text-sm text-gray-500">
            <p>&copy; 2024 Nexus Solutions. Bảo lưu mọi quyền.</p>
            <div className="mt-4 flex justify-center gap-4">
              <a href="#" className="hover:text-indigo-600 transition-colors">Điều khoản</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Bảo mật</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Hỗ trợ</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
