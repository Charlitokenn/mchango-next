import { 
    Mail, 
    Users, 
    Bell, 
    Send, 
    Check, 
    Phone
  } from 'lucide-react';
  
  const Features = () => {
    const features = [
      {
        icon: <Mail className="h-6 w-6 text-brand-600" />,
        title: "Personalized SMS",
        description: "Send custom messages with the pledger's name, pledge amount, and payment status."
      },
      {
        icon: <Users className="h-6 w-6 text-brand-600" />,
        title: "Committee Management",
        description: "Set up wedding and sendoff committees with multiple administrators and permissions."
      },
      {
        icon: <Send className="h-6 w-6 text-brand-600" />,
        title: "Bulk Messaging",
        description: "Send reminders to all unpaid pledgers in one click, saving time and effort."
      },
      {
        icon: <Bell className="h-6 w-6 text-brand-600" />,
        title: "Automated Reminders",
        description: "Schedule automatic reminders for outstanding pledges at intervals you set."
      },
      {
        icon: <Phone className="h-6 w-6 text-brand-600" />,
        title: "WhatsApp Integration",
        description: "Share comprehensive pledge lists directly to WhatsApp groups with a single click."
      },
      {
        icon: <Check className="h-6 w-6 text-brand-600" />,
        title: "Payment Tracking",
        description: "Easily record and track payments against pledges with real-time updates."
      }
    ];
  
    return (
      <section id="features" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold px-4 py-1 bg-brand-100 text-brand-700 rounded-full mb-4">
              Powerful Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need to <span className="text-gradient">Manage Pledges</span>
            </h2>
            <p className="text-gray-600">
              MchangoApp streamlines the pledge collection process with features specifically designed for wedding and sendoff committees.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="stagger-item glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div className="bg-brand-50 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  