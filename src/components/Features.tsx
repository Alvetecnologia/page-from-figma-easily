
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built for speed and performance. Get your work done in record time with our optimized platform.",
      icon: "⚡"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee. Your data is safe with us.",
      icon: "🔒"
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools and shared workspaces.",
      icon: "👥"
    },
    {
      title: "Advanced Analytics",
      description: "Get deep insights into your performance with comprehensive analytics and reporting.",
      icon: "📊"
    },
    {
      title: "Easy Integration",
      description: "Connect with your favorite tools and services through our robust API and integrations.",
      icon: "🔗"
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team available around the clock.",
      icon: "💬"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you build, grow, and scale your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
