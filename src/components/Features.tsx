
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criamos aplicações web modernas e responsivas usando React, Next.js e as melhores tecnologias do mercado. Nosso foco é entregar soluções escaláveis e performáticas que atendam às necessidades específicas do seu negócio.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "Automação de Processos",
      description: "Automatizamos tarefas repetitivas e otimizamos fluxos de trabalho para aumentar a eficiência operacional. Utilizamos ferramentas como Python, APIs e integrações personalizadas para eliminar trabalhos manuais.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      title: "Sistemas Personalizados",
      description: "Desenvolvemos sistemas sob medida que se adaptam perfeitamente aos processos únicos da sua empresa. Desde CRMs personalizados até sistemas de gestão complexos, criamos soluções que crescem com seu negócio.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Integração de APIs",
      description: "Conectamos diferentes sistemas e plataformas através de integrações robustas. Facilitamos a comunicação entre seus softwares existentes, criando um ecossistema tecnológico unificado e eficiente.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    },
    {
      title: "Business Intelligence",
      description: "Transformamos seus dados em insights valiosos através de dashboards interativos e relatórios inteligentes. Utilizamos ferramentas modernas de visualização para apoiar decisões estratégicas baseadas em dados reais.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
    },
    {
      title: "Suporte Técnico",
      description: "Oferecemos suporte contínuo e manutenção preventiva para garantir o funcionamento perfeito das suas soluções. Nossa equipe está sempre disponível para atualizações, correções e melhorias contínuas.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
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
            <div key={index} className="group perspective-1000 h-80">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <Card className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900/50 to-gray-800/50 border-purple-800/30 backface-hidden">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="h-2/3 overflow-hidden rounded-t-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">
                      <h3 className="text-xl font-semibold text-white text-center">
                        {service.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Back of card */}
                <Card className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900/80 to-gray-800/80 border-purple-800/30 backface-hidden rotate-y-180">
                  <CardContent className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-white mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Features;
