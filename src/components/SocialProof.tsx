import { motion } from 'motion/react';
import { Star, MessageCircle, Users, ThumbsUp, TrendingUp } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/people/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-gold mb-4">
            Prova social
          </h2>
          <div className="w-24 h-1 bg-brand-gold/50 mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Números */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {[
            { icon: Users, value: "+10k", label: "Alunos" },
            { icon: Star, value: "4.9/5", label: "Taxa de satisfação" },
            { icon: TrendingUp, value: "+20 anos", label: "Experiência" },
            { icon: ThumbsUp, value: "100%", label: "Cases de sucesso" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 rounded-2xl border border-brand-gold/20 backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-brand-gold mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-serif font-bold text-brand-offwhite mb-1">{stat.value}</div>
              <div className="text-sm text-brand-gold/80 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl font-serif text-center mb-10 text-brand-offwhite">Depoimentos (vídeo &gt; texto)</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="bg-brand-offwhite text-brand-blue p-8 rounded-2xl shadow-xl relative"
              >
                <div className="absolute -top-4 -left-4 bg-brand-gold text-white p-3 rounded-full shadow-lg">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <p className="text-brand-blue/80 italic mb-6 relative z-10">
                  "Depoimento em texto ou espaço para vídeo. A transformação foi incrível e a didática do César é excepcional."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${item}/100/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium">Nome do Aluno</h4>
                    <p className="text-xs text-brand-blue/60">Aluno(a)</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Prints */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-10 text-brand-offwhite flex items-center justify-center gap-3">
            <MessageCircle className="w-6 h-6 text-brand-gold" />
            Prints (WhatsApp/Instagram)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="aspect-[9/16] bg-white/10 rounded-xl overflow-hidden border border-brand-gold/30 shadow-lg"
              >
                <img src={`https://picsum.photos/seed/print${item}/400/700`} alt="Print de depoimento" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
