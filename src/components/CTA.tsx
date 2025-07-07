
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-purple-800 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para transformar seu negócio?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Vamos conversar sobre como nossas soluções podem automatizar processos e impulsionar o crescimento da sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold min-w-[200px]">
            Solicitar Orçamento
          </Button>
          <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold min-w-[200px]">
            Agendar Reunião
          </Button>
        </div>
        <div className="mt-6 text-purple-100 text-sm">
          Consultoria gratuita • Orçamento sem compromisso • Resposta em 24h
        </div>
      </div>
    </section>
  );
};

export default CTA;
