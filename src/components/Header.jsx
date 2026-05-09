import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050816]/80 backdrop-blur-md shadow-lg shadow-neon/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <Shield className="w-8 h-8 text-neon group-hover:text-glow transition-all" />
          <span className="text-xl font-bold text-white tracking-wide">
            West Center <span className="text-neon font-light">Pragas</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-gray-300 hover:text-neon transition-colors font-medium text-sm tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contato"
            className="px-6 py-2.5 rounded-full bg-neon/10 border border-neon text-neon font-semibold hover:bg-neon hover:text-dark transition-all duration-300 box-glow-hover text-sm"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#050816]/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-6 shadow-2xl"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-gray-200 text-lg hover:text-neon transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contato"
            className="w-full text-center px-6 py-3 rounded-lg bg-neon text-dark font-bold hover:bg-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
