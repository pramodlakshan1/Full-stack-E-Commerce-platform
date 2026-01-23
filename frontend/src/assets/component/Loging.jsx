import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

function LoginUI() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-[calc(100vh-80px)] mt-4 sm:mt-6 md:mt-10 mx-4 sm:mx-8 md:mx-12 lg:mx-20 mb-4 sm:mb-6 md:mb-10 bg-slate-100 rounded-xl">
        
        {/* Left Side - Image (Visible on Large Screens) */}
        <div className="hidden rounded-l-lg lg:block lg:w-2/3">
          <div className="w-full h-full overflow-hidden rounded-l-[1rem]">
            <img
              src="/src/assets/signup2.jpg" 
              alt="Sign in"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 lg:w-1/3">
          <div className="w-full max-w-md">
            <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl sm:mb-8">
              Nice to see you again!
            </h1>

            {/* Form Container */}
            <form className="space-y-4 sm:space-y-5">
              
              {/* Email Field */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-sm font-medium text-gray-900">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block mb-1.5 sm:mb-2 text-sm font-medium text-gray-900">
                  Password <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />

                  {/* Eye Toggle (Static Icon) */}
                  <button
                    type="button"
                    className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700 focus:outline-none"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="ml-2 text-xs text-gray-700 sm:text-sm">Remember me</span>
                </label>
                <Link to="/forgot-password" size="sm" className="text-xs text-blue-500 sm:text-sm">
                  Forgot password?
                </Link>
              </div>

              {/* Sign Up Link */}
              <p className="text-xs text-gray-600 sm:text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium text-blue-500 hover:text-blue-600">
                  Sign up now
                </Link>
              </p>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="relative my-4 sm:my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-2 text-gray-500 bg-slate-100">Or continue with</span>
                </div>
              </div>

              {/* Google Sign-In */}
              <button
                type="button"
                className="flex items-center justify-center w-full gap-3 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUI;