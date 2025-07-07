
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStart Brasil",
      content: "A Data Bravo revolucionou nossos processos internos. A automação que desenvolveram aumentou nossa produtividade em 400%.",
      avatar: "CS"
    },
    {
      name: "Ana Rodriguez",
      role: "Diretora de TI, InnovaCorp",
      content: "Profissionais extremamente competentes. O sistema personalizado que criaram superou todas nossas expectativas.",
      avatar: "AR"
    },
    {
      name: "Rafael Santos",
      role: "Fundador, LogiFlow",
      content: "Excelente trabalho em automação de processos. Nossa empresa economiza 20 horas semanais graças às soluções da Data Bravo.",
      avatar: "RS"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 to-gray-900">
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
            <Card key={index} className="bg-gradient-to-br from-purple-900/30 to-gray-800/30 border-purple-800/30 hover:border-purple-600/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
