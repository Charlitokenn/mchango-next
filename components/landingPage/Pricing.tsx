'use client'

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small committees",
      monthlyPrice: 29,
      annualPrice: 290, // Save ~2 months
      features: [
        "Up to 100 SMS per month",
        "50 pledgers",
        "1 committee",
        "Basic pledge tracking",
        "WhatsApp list sharing",
        "Email support"
      ],
      highlight: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      description: "Ideal for medium-sized events",
      monthlyPrice: 59,
      annualPrice: 590, // Save ~2 months
      features: [
        "Up to 500 SMS per month",
        "200 pledgers",
        "3 committees",
        "Advanced pledge analytics",
        "Payment integrations",
        "Automated reminders",
        "Priority email support"
      ],
      highlight: true,
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      description: "For large events and multiple committees",
      monthlyPrice: 99,
      annualPrice: 990, // Save ~2 months
      features: [
        "Unlimited SMS",
        "Unlimited pledgers",
        "10 committees",
        "Advanced analytics & reporting",
        "All payment integrations",
        "Custom SMS templates",
        "24/7 priority support",
        "Dedicated account manager"
      ],
      highlight: false,
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold px-4 py-1 bg-brand-100 text-brand-700 rounded-full mb-4">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose the <span className="text-gradient">Perfect Plan</span> for Your Committee
          </h2>
          <p className="text-gray-600 mb-8">
            Affordable plans to help your wedding or sendoff committee manage pledges efficiently.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`font-medium ${annual ? 'text-gray-500' : 'text-gray-900'}`}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 bg-brand-200 rounded-full p-1 transition-colors"
            >
              <div 
                className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  annual ? 'translate-x-7' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={`font-medium ${annual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-xs text-brand-700">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`stagger-item rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight 
                ? 'bg-white shadow-xl ring-2 ring-brand-500 transform md:-translate-y-4' 
                : 'glass-card'
              }`}
            >
              {plan.highlight && (
                <div className="bg-brand-600 text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2 pb-1">
                      /{annual ? 'year' : 'month'}
                    </span>
                  </div>
                  {annual && (
                    <div className="text-sm text-brand-700 mt-1">
                      Save ${(plan.monthlyPrice * 12) - plan.annualPrice} per year
                    </div>
                  )}
                </div>
                
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full mb-8 ${
                    plan.highlight 
                    ? 'btn-gradient' 
                    : 'border-brand-300 text-brand-700 hover:bg-brand-50'
                  }`}
                >
                  Get Started
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-brand-700" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
