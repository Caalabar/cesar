import { motion } from 'motion/react';
import { ShieldCheck, HeadphonesIcon, CheckCircle2 } from 'lucide-react';

export default function Offer() {
  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://picsum.photos/seed/texture/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-gold mb-4">
            Oferta e preço
          </h2>
          <div className="w-24 h-1 bg-brand-gold/50 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white text-brand-blue rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-brand-gold relative overflow-hidden"
          >
            {/* Ribbon */}
            <div className="absolute top-6 -right-12 bg-brand-gold text-white font-bold py-1 px-12 transform rotate-45 shadow-md">
              OFERTA ESPECIAL
            </div>

            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-6">Acesso Completo aos Cursos</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-brand-blue/50 line-through text-xl">De R$ 997,00</span>
                <span className="bg-brand-gold/10 text-brand-gold font-bold px-3 py-1 rounded-full text-sm">Por apenas</span>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-3xl font-bold text-brand-gold">12x</span>
                <span className="text-6xl font-black text-brand-blue tracking-tighter">R$ 49</span>
                <span className="text-xl font-bold text-brand-gold">,90</span>
              </div>
              <p className="text-brand-blue/70 font-medium">ou R$ 497,00 à vista</p>
            </div>

            <div className="bg-brand-offwhite rounded-2xl p-6 mb-10 text-center border border-brand-gold/20">
              <p className="text-lg font-serif italic text-brand-blue/80">
                Comparação simples: “menos que <span className="text-brand-gold font-bold">R$ 1,66</span> por dia”
              </p>
            </div>

            <ul className="space-y-4 mb-10 max-w-md mx-auto">
              {[
                "Curso Um só coração",
                "Curso Educando Pais",
                "Curso Lidando com o luto",
                "Curso A tragédia do adultério",
                "Todos os bônus inclusos",
                "Acesso imediato à plataforma"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0" />
                  <span className="font-medium text-brand-blue/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button className="w-full md:w-auto bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-bold text-xl px-12 py-5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(185,152,92,0.4)] hover:shadow-[0_15px_40px_rgba(185,152,92,0.6)] transform hover:-translate-y-1 mb-8">
                Quero garantir minha vaga agora
              </button>

              {/* Selos */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-blue/60 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Compra 100% Segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeadphonesIcon className="w-5 h-5 text-brand-gold" />
                  <span>Suporte Dedicado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                  <span>Garantia de Satisfação</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
