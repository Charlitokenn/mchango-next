'use client'

import { useEffect, useState } from 'react';


const AnimatedPhone = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative ${isVisible ? 'animate-float' : 'opacity-0'} transition-all duration-1000`}>
      {/* Phone Frame */}
      <div className="w-[280px] h-[580px] bg-gray-900 rounded-[40px] p-3 shadow-xl relative overflow-hidden">
        {/* Phone Screen */}
        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
          {/* Status Bar */}
          <div className="h-12 bg-brand-600 px-5 flex items-center justify-between text-white">
            <div className="text-xs">9:41 AM</div>
            <div className="rounded-full h-4 w-40 bg-white bg-opacity-20"></div>
          </div>

          {/* App Content */}
          <div className="p-4">
            {/* App Header */}
            <div className="text-center mb-6">
              <div className="text-lg font-bold text-brand-700">MchangoApp</div>
              <div className="text-xs text-gray-500">Wedding Committee Dashboard</div>
            </div>

            {/* Pledgers List */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-800">Pledgers List</div>
              
              {/* Pledger Item 1 - Paid */}
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex justify-between items-center animate-pulse-light">
                <div>
                  <div className="text-sm font-medium">John & Family</div>
                  <div className="text-xs text-gray-500">Pledged: $500</div>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Paid</div>
              </div>
              
              {/* Pledger Item 2 - Unpaid */}
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium">Maria Smith</div>
                  <div className="text-xs text-gray-500">Pledged: $250</div>
                </div>
                <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Unpaid</div>
              </div>
              
              {/* Pledger Item 3 - Partially Paid */}
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium">David & Ruth</div>
                  <div className="text-xs text-gray-500">Pledged: $350</div>
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Partial</div>
              </div>
            </div>

            {/* SMS Button */}
            <div className="mt-6">
              <button className="w-full bg-brand-600 text-white text-sm py-2 rounded-lg font-medium">
                Send Reminder SMS
              </button>
            </div>

            {/* Message Preview */}
            <div className="mt-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div className="text-xs font-medium text-gray-800 mb-1">Message Preview:</div>
              <div className="text-xs text-gray-700">
                Hello Maria, this is a reminder for your wedding pledge of $250. Still unpaid. Thank you!
              </div>
            </div>
          </div>
        </div>
        
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl"></div>
      </div>
      
      {/* Floating Effects */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-300 rounded-full opacity-30 animate-pulse-light"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-rose-300 rounded-full opacity-30 animate-pulse-light" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};

export default AnimatedPhone;
