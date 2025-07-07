
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-purple-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-white">
              Data Bravo
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-gray-300 hover:text-purple-400 transition-colors">
                Serviços
              </a>
              <a href="#solucoes" className="text-gray-300 hover:text-purple-400 transition-colors">
                Soluções
              </a>
              <a href="#sobre" className="text-gray-300 hover:text-purple-400 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-gray-300 hover:text-purple-400 transition-colors">
                Contato
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Login
            </Button>
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
