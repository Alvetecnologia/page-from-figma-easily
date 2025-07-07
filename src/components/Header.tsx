
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-purple-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/aca3a76d-ba8f-47c8-a688-4c8d142aa389.png" 
                alt="Data Bravo Logo" 
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => handleNavClick('servicos')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => handleNavClick('solucoes')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Soluções
              </button>
              <button 
                onClick={() => handleNavClick('sobre')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => handleNavClick('contato')}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
              Começar Projeto
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
