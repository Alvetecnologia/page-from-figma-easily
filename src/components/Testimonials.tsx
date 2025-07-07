
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStart Brasil",
      content: "A Data Bravo revolucionou nossos processos internos. A automação que desenvolveram aumentou nossa produtividade em 400%. Equipe extremamente profissional e dedicada, sempre entregando soluções que superam nossas expectativas.",
      avatar: "CS",
      company: "TechStart Brasil",
      industry: "Tecnologia",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    },
    {
      name: "Ana Rodriguez",
      role: "Diretora de TI, InnovaCorp",
      content: "Profissionais extremamente competentes. O sistema personalizado que criaram superou todas nossas expectativas. A integração com nossos sistemas existentes foi perfeita e o suporte pós-implementação é excepcional.",
      avatar: "AR",
      company: "InnovaCorp",
      industry: "Inovação",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      name: "Rafael Santos",
      role: "Fundador, LogiFlow",
      content: "Excelente trabalho em automação de processos. Nossa empresa economiza 20 horas semanais graças às soluções da Data Bravo. O ROI foi alcançado em menos de 3 meses. Recomendo sem hesitação!",
      avatar: "RS",
      company: "LogiFlow",
      industry: "Logística",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-purple-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Histórias de sucesso de empresas que confiaram em nossas soluções
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group [perspective:1000px] h-80">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <Card className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900/30 to-gray-800/30 border-purple-800/30 [backface-visibility:hidden]">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="h-2/3 overflow-hidden rounded-t-lg">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.company} workspace`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex items-center justify-center p-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-2">
                          {testimonial.avatar}
                        </div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Back of card */}
                <Card className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900/80 to-gray-800/80 border-purple-800/30 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <CardContent className="p-6 h-full flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                        <p className="text-gray-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed italic text-sm">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
