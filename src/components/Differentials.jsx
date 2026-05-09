import { motion } from 'framer-motion';
import { ShieldCheck, Zap, ThumbsUp, Wrench, Building2, PhoneCall } from 'lucide-react';

const Differentials = () => {
  const items = [
    { icon: ShieldCheck, title: "Produtos pela ANVISA", desc: "Defensivos legalizados e sem cheiro forte." },
    { icon: Zap, title: "Equipe Especializada", desc: "Profissionais treinados e uso rigoroso de EPIs." },
    { icon: ThumbsUp, title: "Garantia de Serviço", desc: "Laudos técnicos para a Vigilância Sanitária." },
    { icon: Wrench, title: "Atendimento Rápido", desc: "Solucionamos o seu problema com agilidade." },
    { icon: Building2, title: "Residências e Empresas", desc: "Soluções adaptadas para qualquer ambiente." },
    { icon: PhoneCall, title: "Emergência 24h", desc: "Prontidão para lhe atender a qualquer momento." }
  ];

  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-[#070b1f]">
      {/* Glow Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-neon text-sm font-bold tracking-widest uppercase mb-3">Diferenciais</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Por que escolher a West Center Pragas?</h3>
            <p className="text-gray-400 text-lg mb-10">
              Não somos apenas aplicadores de produtos, somos especialistas na saúde do seu ambiente. Nosso método combina eficácia máxima com segurança total.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center text-neon">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-neon/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full glass flex items-center justify-center box-glow relative overflow-hidden">
                  <div className="absolute inset-0 bg-neon/10 animate-pulse"></div>
                  <ShieldCheck className="w-20 h-20 text-neon relative z-10" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-16 h-16 rounded-2xl glass flex items-center justify-center text-white animate-bounce" style={{ animationDuration: '3s' }}>
                <Zap size={24} className="text-neon" />
              </div>
              <div className="absolute bottom-10 left-10 w-16 h-16 rounded-2xl glass flex items-center justify-center text-white animate-bounce" style={{ animationDuration: '4s' }}>
                <ThumbsUp size={24} className="text-neon" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Differentials;
