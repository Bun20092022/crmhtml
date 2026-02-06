
import React from 'react';

const SocialLogin: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {/* Google */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 py-3 px-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-sm active:scale-[0.98]"
        title="Đăng nhập bằng Google"
      >
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span className="text-sm font-semibold text-gray-700 hidden sm:inline">Google</span>
      </button>

      {/* Microsoft */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 py-3 px-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-sm active:scale-[0.98]"
        title="Đăng nhập bằng Microsoft"
      >
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 23 23">
          <path fill="#f3f3f3" d="M0 0h23v23H0z" />
          <path fill="#f35325" d="M1 1h10v10H1z" />
          <path fill="#81bc06" d="M12 1h10v10H12z" />
          <path fill="#05a6f0" d="M1 12h10v10H1z" />
          <path fill="#ffba08" d="M12 12h10v10H12z" />
        </svg>
        <span className="text-sm font-semibold text-gray-700 hidden sm:inline">Microsoft</span>
      </button>

      {/* Apple */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 py-3 px-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-sm active:scale-[0.98]"
        title="Đăng nhập bằng Apple"
      >
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 384 512" fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
        <span className="text-sm font-semibold text-gray-700 hidden sm:inline">Apple</span>
      </button>
    </div>
  );
};

export default SocialLogin;
