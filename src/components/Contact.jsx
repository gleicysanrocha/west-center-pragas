import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let text = `Olá! Vim pelo site da West Center Pragas e gostaria de solicitar um orçamento.\n\n`;
    text += `*Nome:* ${formData.name}\n`;
    text += `*Telefone:* ${formData.whatsapp}\n`;
    if (formData.service) text += `*Serviço Desejado:* ${formData.service}\n`;
    if (formData.message) text += `*Mensagem:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5511914920894?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative bg-[#03050b]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-neon text-sm font-bold tracking-widest uppercase mb-3">Fale Conosco</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para eliminar as pragas?</h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="glass p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-white mb-8">Nossos Contatos</h4>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                    <a href="https://wa.me/5511914920894" target="_blank" rel="noreferrer" className="text-white font-bold text-lg hover:text-neon transition-colors">
                      (11) 91492-0894
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Telefone Fixo</p>
                    <p className="text-white font-bold text-lg">(11) 5688-0006</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">E-mail</p>
                    <p className="text-white font-bold text-lg">westcenterpragas@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Atendimento</p>
                    <p className="text-white font-bold text-lg">09:00 às 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-2xl border border-white/10 box-glow">
              <h4 className="text-2xl font-bold text-white mb-8">Envie uma Mensagem</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-gray-400">Seu Nome *</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="whatsapp" className="text-sm text-gray-400">WhatsApp *</label>
                  <input 
                    type="tel" 
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors"
                    placeholder="(11) 90000-0000"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="service" className="text-sm text-gray-400">Serviço Desejado</label>
                <select 
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors appearance-none"
                >
                  <option value="">Selecione uma opção...</option>
                  <option value="Dedetização">Dedetização</option>
                  <option value="Desratização">Desratização</option>
                  <option value="Descupinização">Descupinização</option>
                  <option value="Limpeza de Caixa D'água">Limpeza de Caixa D'água</option>
                  <option value="Limpeza de Calha">Limpeza de Calha</option>
                  <option value="Desentupimento">Desentupimento</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-sm text-gray-400">Mensagem (Opcional)</label>
                <textarea 
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-[#050816] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors resize-none"
                  placeholder="Detalhes adicionais do seu problema..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-neon text-dark font-bold rounded-lg hover:bg-white hover:text-dark transition-all duration-300 box-glow flex items-center justify-center gap-2 text-lg"
              >
                <MessageCircle size={24} />
                Solicitar Orçamento Gratuito
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
