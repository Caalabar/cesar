import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export default function TargetAudience() {
  return (
    <section className="py-24 bg-brand-offwhite text-brand-blue">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-blue mb-4">
            Para quem é / <span className="text-brand-gold">Para quem não é</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* É para você */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-brand-gold"
          >
            <h3 className="text-2xl font-serif font-medium mb-6 text-brand-blue flex items-center gap-3">
              <span className="bg-brand-gold/10 text-brand-gold p-2 rounded-full">
                <Check className="w-6 h-6" />
              </span>
              É para você se…
            </h3>
            <ul className="space-y-4">
              {[
                "É para quem ama a Deus Pai, a Jesus Cristo e a Sua Palavra;",
                "É para quem deseja uma relação familiar amorosa e profunda;",
                "É para quem deseja apresentar seus filhos maduros diante de Deus;",
                "É para quem ainda não aprendeu a lidar com as dificuldades na criação de filhos;",
                "É para aqueles que se encontram sem direção na educação dos filhos."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                  <span className="text-brand-blue/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Não é para você */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brand-blue text-white rounded-2xl p-8 shadow-xl border-t-4 border-red-500/50"
          >
            <h3 className="text-2xl font-serif font-medium mb-6 flex items-center gap-3">
              <span className="bg-red-500/10 text-red-400 p-2 rounded-full">
                <X className="w-6 h-6" />
              </span>
              Não é para você se…
            </h3>
            <ul className="space-y-4">
              {[
                "Não é para você se você não ama a Deus Pai, a Jesus Cristo e a Sua Palavra;",
                "Não é para quem não crê na obra do Espírito Santo;",
                "Não é para quem não quer mudar."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                  <span className="text-brand-offwhite/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
