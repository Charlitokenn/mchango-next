'use client'

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

const ErrorPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-gray-50 p-3 mb-2">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: mounted ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xs font-medium text-gray-500 uppercase tracking-wide"
            >
              Error
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: mounted ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl"
            >
              Sorry, something went wrong
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: mounted ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-base text-gray-500 max-w-md mx-auto"
            >
              We&apos;ve encountered an unexpected issue. Our team has been notified and we&apos;re working to fix it.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-xs mx-auto"
          >
            <Link 
              href="/home"
              className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Go back home
            </Link>
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Try again
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
