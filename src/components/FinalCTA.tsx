import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

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
            Sua jornada de cura e crescimento começa agora
          </h2>
          
          <div className="bg-white/5 border border-brand-gold/20 rounded-3xl p-8 md:p-12 backdrop-blur-md mb-12 shadow-2xl">
            <h3 className="text-2xl font-serif mb-8 text-brand-offwhite">O que você está levando hoje:</h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left mb-10">
              <ul className="space-y-4">
                {[
                  "Aprofundamento em temas bíblicos da alma",
                  "Crescimento espiritual e emocional",
                  "Cursos práticos por um preço acessível"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-brand-offwhite/90">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {[
                  "4 Cursos Completos (Casamento, Filhos, Luto, Traição)",
                  "Todos os bônus exclusivos",
                  "Garantia Incondicional de 7 dias"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-brand-offwhite/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 mb-8 border-t border-brand-gold/20 pt-8">
              <span className="text-brand-offwhite/60 uppercase tracking-widest text-sm font-semibold">Investimento</span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-bold text-brand-gold">12x</span>
                <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">R$ 49</span>
                <span className="text-2xl font-bold text-brand-gold">,90</span>
              </div>
            </div>

            <button className="w-full md:w-auto bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold text-xl md:text-2xl px-12 py-6 rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(185,152,92,0.5)] hover:shadow-[0_15px_50px_rgba(185,152,92,0.7)] transform hover:-translate-y-2">
              Quero entrar agora
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-brand-offwhite/60 text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Ambiente 100% seguro. Acesso imediato após aprovação.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
