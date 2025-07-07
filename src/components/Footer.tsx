
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-purple-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4 text-white">Data Bravo</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Software house especializada em desenvolvimento de soluções personalizadas e automações inteligentes. 
              Transformamos ideias em realidade digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Automação</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Integração de APIs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Business Intelligence</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Portfólio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-800/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Data Bravo. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
