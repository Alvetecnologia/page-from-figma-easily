
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of teams already using our platform to build amazing products and grow their business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Your Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
            Contact Sales
          </Button>
        </div>
        <div className="mt-6 text-blue-100 text-sm">
          Free 14-day trial • No setup fees • Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default CTA;
