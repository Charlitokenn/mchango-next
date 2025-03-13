'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah & John",
      role: "Wedding Committee",
      content: "MchangoApp transformed how we managed our wedding pledges. The personalized SMS reminders increased our collection rate by 85%, and the WhatsApp sharing feature kept everyone in the loop.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Omondi",
      role: "Sendoff Committee Chair",
      content: "The bulk messaging feature saved us countless hours of individual follow-ups. Our committee was able to focus on planning the perfect sendoff instead of chasing pledgers.",
      image: "/placeholder.svg"
    },
    {
      name: "Janet Wambui",
      role: "Wedding Coordinator",
      content: "I've coordinated over 50 weddings, and committees that use MchangoApp always have better pledge fulfillment rates. The transparent tracking keeps everyone accountable.",
      image: "/placeholder.svg"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold px-4 py-1 bg-brand-100 text-brand-700 rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Loved by <span className="text-gradient">Committees</span> Everywhere
          </h2>
          <p className="text-gray-600">
            See how MchangoApp has helped wedding and sendoff committees streamline their pledge collection process.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                <Image 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                  width={160}
                  height={160}
                />
              </div>
              
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-400 text-brand-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
                  &quot;{testimonials[activeIndex].content}&quot;
                </blockquote>
                
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-500">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-50 hover:text-brand-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-brand-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-50 hover:text-brand-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-64 h-64 bg-brand-100 rounded-full opacity-50 z-0"></div>
          <div className="absolute bottom-0 left-0 transform -translate-x-4 translate-y-4 w-64 h-64 bg-rose-100 rounded-full opacity-50 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
