import { Button } from '@/components/ui/button';
import { Heart, Mail, Check } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-50 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-rose-50 to-transparent opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card rounded-3xl overflow-hidden max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-brand-600 to-brand-500 p-1">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                      <Heart className="h-5 w-5 text-brand-600" />
                    </div>
                    <span className="text-sm font-semibold text-brand-700">Perfect for Your Special Event</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to <span className="text-gradient">Simplify</span> Your Pledge Collection?
                  </h2>
                  
                  <p className="text-gray-600 mb-8">
                    Start your 14-day free trial today and see how MchangoApp can help your committee manage pledges more effectively.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "No credit card required",
                      "Full access to all features during trial",
                      "Simple setup in minutes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-700" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="rounded-full px-8 py-6 btn-gradient text-base">
                      Start Free Trial
                    </Button>
                    <Button variant="outline" className="rounded-full px-8 py-6 border-brand-300 text-brand-700 hover:bg-brand-50 text-base flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Contact Sales</span>
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border-8 border-white shadow-xl">
                    <img 
                      src="/placeholder.svg" 
                      alt="MchangoApp in action" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="font-medium">See MchangoApp in action</p>
                        <p className="text-sm opacity-80">Watch a quick demo</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-5 -right-5 bg-white rounded-full p-3 shadow-lg animate-float">
                    <div className="bg-rose-100 text-rose-700 rounded-full px-4 py-2 text-sm font-medium">
                      85% Better Collection Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
