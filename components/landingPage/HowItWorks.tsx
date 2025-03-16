'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Create Your Committee",
      description: "Set up your wedding or sendoff committee and invite members to collaborate.",
      image: "/placeholder.svg" // Using placeholder for now
    },
    {
      number: 2,
      title: "Add Pledgers",
      description: "Record pledges with contact details, pledge amounts, and payment status.",
      image: "/placeholder.svg"
    },
    {
      number: 3,
      title: "Personalize Messages",
      description: "Customize SMS templates with names, amounts, and specific instructions.",
      image: "/placeholder.svg"
    },
    {
      number: 4,
      title: "Send & Track",
      description: "Send reminders and track payments with real-time reporting and updates.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold px-4 py-1 bg-brand-100 text-brand-700 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="text-gradient">MchangoApp</span> Works
          </h2>
          <p className="text-gray-600">
            Our intuitive platform makes pledge management simple and effective in just a few steps.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-8 shadow-lg">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-5 p-4 rounded-xl transition-all duration-500 mb-4 ${
                    activeStep === index ? 'bg-brand-50 shadow-sm scale-105' : 'opacity-70'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    activeStep === index ? 'bg-brand-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                    activeStep === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95 absolute top-0 left-0'
                  }`}
                  style={{ zIndex: activeStep === index ? 10 : 0 }}
                >
                  <div className="bg-gradient-to-br from-brand-500 to-brand-700 p-1">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full rounded-xl bg-white"
                      style={{ height: '320px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-bold text-brand-700">Step {step.number}</h4>
                    <p className="text-sm">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
