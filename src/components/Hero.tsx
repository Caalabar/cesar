import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-brand-blue text-white overflow-hidden py-24 lg:py-36">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/church/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 to-brand-blue"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
              Cuidar de pessoas através da Palavra de Deus.{' '}
              <span className="text-brand-gold italic text-3xl md:text-4xl lg:text-5xl mt-4 block">
                "Mas o que profetiza, fala aos homens, edificando, exortando e consolando."{' '}
                <span className="text-xl md:text-2xl not-italic">1 Co. 14:3</span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-offwhite/90 mb-12 max-w-2xl mx-auto font-light"
          >
            Para todas as pessoas que tenham qualquer tipo de problema, conflito ou dificuldade na alma.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-16"
          >
            <button className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-semibold text-lg md:text-xl px-12 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(185,152,92,0.3)] hover:shadow-[0_0_35px_rgba(185,152,92,0.55)] transform hover:-translate-y-1">
              Quero entrar agora
            </button>
          </motion.div>

          {/* Video Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20 aspect-video bg-brand-blue/50 group cursor-pointer"
          >
            <img
              src="https://picsum.photos/seed/bible/1280/720"
              alt="Apresentação"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-brand-gold/90 rounded-full flex items-center justify-center text-brand-blue shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="w-10 h-10" />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-brand-gold/70 mt-6 italic text-sm"
          >
            Conheça alguns depoimentos! (vídeos) ou *depoimentos escritos nas redes sociais
          </motion.p>

        </div>
      </div>
    </section>
  );
}
