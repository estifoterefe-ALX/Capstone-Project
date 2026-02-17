import React, { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import TopBar from "../content/TopBar";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white font-sans flex flex-col relative overflow-hidden selection:bg-yellow-500 selection:text-black transition-colors duration-300">
      {/* Background Glow Effect (Radial Gradient) - Only visible in dark mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 dark:bg-yellow-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* --- Header --- */}
      <TopBar />

      {/* --- Main Content --- */}
      <main className="flex-1 flex items-center justify-center p-4 z-10">
        <div className="w-full max-w-[420px] bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-xl dark:shadow-2xl backdrop-blur-sm transition-colors duration-300">
          {/* Top Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20">
              <Lock className="text-yellow-500" size={20} />
            </div>
          </div>

          {/* Titles */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Access your premium cinematic experience
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest ml-1">
                Account
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-yellow-500 transition">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Email or Username"
                  className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">
                  Security
                </label>
                <a
                  href="#"
                  className="text-[10px] text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-white transition"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-yellow-500 transition">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-white/10 rounded-lg py-3 pl-10 pr-10 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-white transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] text-yellow-500 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-yellow-500 accent-yellow-500 cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-xs text-gray-600 dark:text-gray-400 cursor-pointer select-none"
              >
                Stay signed in for 30 days
              </label>
            </div>

            {/* Login Button */}
            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3.5 rounded-lg uppercase tracking-wider text-xs transition duration-200 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] mt-2">
              Login to Premiere
            </button>
          </form>

          {/* Divider */}
          <div className="relative py-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-50 dark:bg-[#121212] px-2 text-gray-500 dark:text-gray-600 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#1A1A1A] hover:bg-gray-200 dark:hover:bg-[#252525] border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20 text-gray-700 dark:text-white py-2.5 rounded-lg text-xs font-medium transition group">
              {/* Google SVG */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#1A1A1A] hover:bg-gray-200 dark:hover:bg-[#252525] border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20 text-gray-700 dark:text-white py-2.5 rounded-lg text-xs font-medium transition">
              {/* Apple SVG */}
              <svg
                className="w-4 h-4 text-gray-700 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.71 1.57.18 2.76.79 3.54 1.92-3.18 1.88-2.65 6.09.65 7.42-.69 1.69-1.57 3.33-2.96 3.6zM12.03 7.25c-.25-2.19 1.62-4.04 3.63-4.25.32 2.37-2.24 4.35-3.63 4.25z" />
              </svg>
              Apple
            </button>
          </div>

          {/* Create Account Link */}
          <div className="text-center mt-8 text-xs text-gray-500 dark:text-gray-500">
            New to Movie Database?{" "}
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-400 font-bold ml-1 transition"
            >
              Create an Account
            </a>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="w-full text-center py-6 text-[10px] text-gray-400 dark:text-gray-700 font-bold tracking-widest uppercase z-10">
        © 2026 All Rights Reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
