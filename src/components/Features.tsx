
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Calendar, Users, Zap, Code, Database, BarChart3, Headphones } from "lucide-react";

const Features = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criamos aplicações web modernas e responsivas usando React, Next.js e as melhores tecnologias do mercado. Nosso foco é entregar soluções escaláveis e performáticas que atendam às necessidades específicas do seu negócio.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "Automações",
      description: "Automatizamos processos complexos com soluções inteligentes que incluem chatbots de atendimento, SDR (Sales Development Representative), agendamentos automáticos, CRM personalizado e muito mais. Eliminamos tarefas repetitivas e otimizamos seu fluxo de trabalho.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      features: ["Chatbot de Atendimento", "SDR Automático", "Agendamentos", "CRM Personalizado", "E muito mais"]
    },
    {
      title: "Sistemas Personalizados",
      description: "Desenvolvemos sistemas sob medida que se adaptam perfeitamente aos processos únicos da sua empresa. Desde CRMs personalizados até sistemas de gestão complexos, criamos soluções que crescem com seu negócio.",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Integração de APIs",
      description: "Conectamos diferentes sistemas e plataformas através de integrações robustas. Facilitamos a comunicação entre seus softwares existentes, criando um ecossistema tecnológico unificado e eficiente.",
      icon: Users,
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    },
    {
      title: "Business Intelligence",
      description: "Transformamos seus dados em insights valiosos através de dashboards interativos e relatórios inteligentes. Utilizamos ferramentas modernas de visualização para apoiar decisões estratégicas baseadas em dados reais.",
      icon: BarChart3,
      color: "from-teal-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
    },
    {
      title: "Suporte Técnico",
      description: "Oferecemos suporte contínuo e manutenção preventiva para garantir o funcionamento perfeito das suas soluções. Nossa equipe está sempre disponível para atualizações, correções e melhorias contínuas.",
      icon: Headphones,
      color: "from-violet-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6">
            <span className="text-purple-300 text-sm font-medium">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Soluções que
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              transformam negócios
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços tecnológicos para impulsionar seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group [perspective:1000px] h-96">
                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of card */}
                  <Card className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-xl [backface-visibility:hidden] overflow-hidden">
                    <CardContent className="p-0 h-full flex flex-col relative">
                      <div className="h-3/5 relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}></div>
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center justify-center p-6 text-center">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          {service.features && (
                            <div className="flex flex-wrap gap-1 justify-center">
                              {service.features.slice(0, 2).map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs bg-purple-900/30 text-purple-300 border-purple-700/50">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Back of card */}
                  <Card className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-700/50 backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <CardContent className="p-6 h-full flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mr-3`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm mb-4">
                        {service.description}
                      </p>
                      {service.features && (
                        <div className="space-y-2">
                          <p className="text-purple-400 text-xs font-semibold uppercase tracking-wide">Inclui:</p>
                          <div className="flex flex-wrap gap-1">
                            {service.features.map((feature, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-purple-900/40 text-purple-300 border-purple-700/50">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
