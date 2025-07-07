
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gray-900">
              SaaS
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
