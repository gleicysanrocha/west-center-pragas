import { motion } from 'framer-motion';
import { Bug, Rat, Droplets, ArrowDownToLine, Droplet, Sprout } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: "Dedetização",
      description: "Controle eficaz de insetos rasteiros e voadores, garantindo a proteção e saúde do seu ambiente."
    },
    {
      icon: Rat,
      title: "Desratização",
      description: "Eliminação e controle de roedores com iscas e armadilhas modernas e seguras."
    },
    {
      icon: Sprout,
      title: "Descupinização",
      description: "Tratamento profundo para proteger móveis, telhados e estruturas de madeira do seu imóvel."
    },
    {
      icon: Droplets,
      title: "Limpeza de Caixa D'água",
      description: "Higienização profunda e desinfecção de reservatórios para garantir água potável e segura."
    },
    {
      icon: ArrowDownToLine,
      title: "Limpeza de Calha",
      description: "Remoção de folhas e detritos para garantir o escoamento perfeito e evitar infiltrações."
    },
    {
      icon: Droplet,
      title: "Desentupimento",
      description: "Desobstrução rápida e segura de pias, ralos e tubulações com equipamentos de alta tecnologia."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-neon text-sm font-bold tracking-widest uppercase mb-3">Nossas Especialidades</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Controle Completo de Pragas</h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Tratamentos específicos e altamente eficazes, utilizando produtos de alta tecnologia e laudo técnico para cada situação. Protegemos seu espaço contra invasores.
          </p>
        </div>

        {/* Categoria Residencial vs Corporativa */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden glass border border-white/10 box-glow-hover transition-all"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src="/residencial.png" alt="Proteção Residencial" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-lighten" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h4 className="text-2xl font-bold text-white mb-2">Ambiente Residencial</h4>
              <p className="text-gray-300">Proteja sua família e sua casa com soluções seguras e sem cheiro.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden glass border border-white/10 box-glow-hover transition-all"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src="/corporativo.png" alt="Proteção Corporativa" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-lighten" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h4 className="text-2xl font-bold text-white mb-2">Ambiente Corporativo</h4>
              <p className="text-gray-300">Garantia de conformidade, laudos técnicos e zero interrupção nos seus negócios.</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h4 className="text-2xl font-bold text-white mb-2">Soluções Específicas</h4>
          <p className="text-gray-400">Conheça nossos métodos de controle e desentupimento</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group glass p-8 rounded-2xl hover:border-neon/50 transition-all duration-300 relative overflow-hidden box-glow-hover"
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#050816] border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon/30 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-neon" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neon transition-colors">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
