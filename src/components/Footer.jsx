import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020308] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-neon" />
              <span className="text-xl font-bold text-white tracking-wide">
                West Center <span className="text-neon font-light">Pragas</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Especialistas em controle de pragas e desentupimento. Tornamos o seu ambiente mais seguro e saudável com qualidade assegurada e licenciamento completo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon hover:text-dark transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon hover:text-dark transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Navegação</h5>
            <ul className="flex flex-col gap-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-neon transition-colors text-sm">Início</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-neon transition-colors text-sm">Serviços</a></li>
              <li><a href="#diferenciais" className="text-gray-400 hover:text-neon transition-colors text-sm">Diferenciais</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-neon transition-colors text-sm">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Legal</h5>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-neon transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon transition-colors text-sm">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon transition-colors text-sm">Garantia de Qualidade</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} West Center Pragas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
