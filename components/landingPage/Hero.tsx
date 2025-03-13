import { Button } from '@/components/ui/button';
import AnimatedPhone from './AnimatedPhone';
import { ChevronRight } from 'lucide-react';


const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-brand-100 to-transparent rounded-bl-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-rose-50 to-transparent rounded-tr-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="inline-block text-sm font-semibold px-4 py-1 bg-brand-100 text-brand-700 rounded-full mb-6 animate-slide-up">
              Wedding & Sendoff Committees
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Simplify Pledge <span className="text-gradient">Collection</span> with Personalized SMS
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              MchangoApp helps wedding and sendoff committees track pledges, manage payments, and automatically send personalized reminders to supporters.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button className="rounded-full px-8 py-6 btn-gradient text-base">
                Start Your Free Trial
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 border-brand-300 text-brand-700 bg-white bg-opacity-80 hover:bg-brand-50 text-base cursor: pointer">
                <span>See How It Works</span>
                <ChevronRight className="ml-2 h-4 w-4" />
                <a href="#how-it-works"/>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              No credit card required. 14-day free trial.
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <AnimatedPhone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
