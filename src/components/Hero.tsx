import { motion } from 'motion/react';
import { ChevronRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-brand-blue text-white overflow-hidden py-20 lg:py-32">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/family/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 to-brand-blue"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              Eduque seus filhos à luz da <span className="text-brand-gold italic">Palavra de Deus</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-offwhite/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Curso voltado para pais que desejam ser instruídos pela Palavra de Deus, que desejam educar seus filhos de forma saudável, ajudando-os a alcançar maturidade emocional e espiritual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-4 mb-12"
          >
            <ul className="text-left space-y-3 text-brand-offwhite/80 max-w-xl mx-auto mb-8">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>Pra você que deseja crescimento espiritual e emocional.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>Pra você que quer aprofundar nos temas bíblicos sobre a criação de filhos.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>Pra você que gostaria de fazer um curso prático por um preço acessível.</span>
              </li>
            </ul>

            <button className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-semibold text-lg md:text-xl px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(185,152,92,0.3)] hover:shadow-[0_0_30px_rgba(185,152,92,0.5)] transform hover:-translate-y-1 w-full sm:w-auto">
              Quero entrar agora
            </button>
            
            <p className="text-sm text-brand-offwhite/60 mt-4 flex items-center justify-center gap-2 max-w-lg text-center mx-auto">
              César Coneglian compartilha a Palavra de Deus há 45 anos, ministrando cursos na área de família há mais de 20 anos.
            </p>
          </motion.div>

          {/* Video Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20 aspect-video bg-brand-blue/50 group cursor-pointer"
          >
            <img 
              src="https://picsum.photos/seed/cesar_video/1280/720" 
              alt="Apresentação do curso por César Coneglian" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-brand-gold/90 rounded-full flex items-center justify-center text-brand-blue shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="w-10 h-10 ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
