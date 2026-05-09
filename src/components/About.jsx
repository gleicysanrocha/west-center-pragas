import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import sobreBg from '../assets/sobre-bg.png';

const About = () => {
  const cards = ["Segurança", "Qualidade", "Atendimento", "Garantia"];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="bg-[#050816] rounded-3xl border border-white/10 p-8 md:p-16 relative overflow-hidden box-glow">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tradição e excelência em controle de pragas</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                A West Center Pragas atua com excelência no combate e prevenção de pragas urbanas, oferecendo soluções seguras, eficientes e com garantia para residências, condomínios, empresas e comércios.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {cards.map((card, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-neon" />
                    <span className="text-white font-medium">{card}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <img 
                src={sobreBg}
                alt="Profissional com EPI" 
                className="w-full h-full object-cover opacity-80 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent"></div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
