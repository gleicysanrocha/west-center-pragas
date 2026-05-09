import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Award } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: ShieldCheck, text: "100% Segurança Garantida" },
    { icon: Clock, text: "Atendimento 24/7" },
    { icon: Users, text: "Técnicos Especializados" },
    { icon: Award, text: "Produtos Certificados" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-40 mix-blend-lighten"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 via-[#050816]/80 to-[#050816]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mt-12">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-neon/30 text-neon text-sm font-medium mb-8 box-glow"
          >
            <ShieldCheck size={16} />
            Especialistas em Controle de Pragas
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Seu ambiente seguro e completamente <br className="hidden md:block"/>
            <span className="text-neon text-glow inline-block mt-2">Livre de Pragas</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Oferecemos soluções profissionais, rápidas e seguras para controle de pragas, limpeza e desentupimento em residências, condomínios e empresas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a 
              href="#contato" 
              className="w-full sm:w-auto px-8 py-4 bg-neon text-dark font-bold rounded-lg hover:bg-white hover:text-dark transition-all duration-300 box-glow text-lg text-center"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="#servicos" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-white font-medium rounded-lg hover:border-neon hover:text-neon transition-all duration-300 text-lg text-center"
            >
              Conhecer Serviços
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-10 border-t border-white/10"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                  <stat.icon size={24} />
                </div>
                <span className="text-gray-300 text-sm font-medium">{stat.text}</span>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
