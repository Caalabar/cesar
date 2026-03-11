import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Heart, Shield } from 'lucide-react';

export default function Transformation() {
  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://picsum.photos/seed/light/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-gold mb-4">
            A transformação
          </h2>
          <div className="w-24 h-1 bg-brand-gold/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Você sai de X -> chega em Y */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 bg-white/5 p-8 rounded-2xl border border-brand-gold/20"
          >
            <div className="text-center md:text-right flex-1">
              <p className="text-brand-offwhite/60 text-sm uppercase tracking-widest mb-2 font-semibold">Antes</p>
              <p className="text-xl font-serif italic text-brand-offwhite">Você sai de X</p>
            </div>
            <div className="bg-brand-gold text-brand-blue p-4 rounded-full shadow-[0_0_15px_rgba(185,152,92,0.4)]">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="text-brand-gold text-sm uppercase tracking-widest mb-2 font-semibold">Depois</p>
              <p className="text-xl font-serif italic text-brand-gold">chega em Y</p>
            </div>
          </motion.div>

          {/* Mini framework em 3 passos */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-center mb-10 text-brand-offwhite">Um mini framework em 3 passos (metodologia)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, title: "Passo 1", desc: "Compreensão da Palavra" },
                { icon: Heart, title: "Passo 2", desc: "Cura Interior" },
                { icon: Shield, title: "Passo 3", desc: "Maturidade Espiritual" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-brand-blue border border-brand-gold/30 p-8 rounded-2xl text-center hover:border-brand-gold transition-colors duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                    <step.icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h4 className="text-xl font-serif text-brand-gold mb-3">{step.title}</h4>
                  <p className="text-brand-offwhite/70">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resultado esperado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-brand-gold/10 via-brand-gold/20 to-brand-gold/10 p-8 rounded-2xl border border-brand-gold/30"
          >
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-brand-offwhite">
              <span className="text-brand-gold font-medium">Resultado esperado</span> + o que o aluno vai conseguir fazer
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
