import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/light/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/90 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-brand-gold mb-8 leading-tight">
            A decisão que pode mudar o destino da sua casa.
          </h2>
          
          <p className="text-xl md:text-2xl text-brand-offwhite/90 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Não espere a crise piorar para buscar ajuda. Aqui você encontrará apoio à sua saúde emocional e ao bem-estar da sua família com quem tem sólida experiência em aconselhamento e conhecimento bíblico.
          </p>
          
          <div className="bg-white/5 border border-brand-gold/20 rounded-3xl p-8 md:p-12 backdrop-blur-md mb-8 shadow-2xl">
            <div className="flex flex-col items-center justify-center gap-2 mb-10">
              <span className="text-brand-offwhite/60 uppercase tracking-widest text-sm font-semibold">Investimento</span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-bold text-brand-gold">12x de</span>
                <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">R$ 149</span>
                <span className="text-2xl font-bold text-brand-gold">,90</span>
              </div>
              <p className="text-brand-offwhite/70 mt-2 text-sm md:text-base">À vista: R$ 1.618,92 (10% de desconto)</p>
            </div>

            <button className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold text-lg md:text-xl px-8 py-6 rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(185,152,92,0.5)] hover:shadow-[0_15px_50px_rgba(185,152,92,0.7)] transform hover:-translate-y-2 uppercase tracking-wide">
              Quero entrar agora e cuidar da minha alma
            </button>
            
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-brand-offwhite/70 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Compra 100% segura</span>
              </div>
              <span className="hidden md:block text-brand-gold">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
