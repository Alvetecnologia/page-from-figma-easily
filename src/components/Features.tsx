
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas e responsivas usando as melhores tecnologias do mercado.",
      icon: "💻"
    },
    {
      title: "Automação de Processos",
      description: "Automatize tarefas repetitivas e otimize fluxos de trabalho para maior eficiência.",
      icon: "🤖"
    },
    {
      title: "Sistemas Personalizados",
      description: "Desenvolvemos soluções sob medida para atender às necessidades específicas do seu negócio.",
      icon: "⚙️"
    },
    {
      title: "Integração de APIs",
      description: "Conectamos diferentes sistemas e plataformas para uma operação mais fluida.",
      icon: "🔗"
    },
    {
      title: "Business Intelligence",
      description: "Dashboards e relatórios inteligentes para tomada de decisões baseada em dados.",
      icon: "📊"
    },
    {
      title: "Suporte Técnico",
      description: "Suporte contínuo e manutenção para garantir o funcionamento perfeito das soluções.",
      icon: "🛠️"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos serviços e soluções
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços tecnológicos para impulsionar seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-900/50 to-gray-800/50 border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
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
