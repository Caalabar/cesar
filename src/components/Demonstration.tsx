import { motion } from 'motion/react';
import { Play, Monitor } from 'lucide-react';

export default function Demonstration() {
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
            Demonstração
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Aula grátis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Play className="w-6 h-6 text-brand-gold" />
              <h3 className="text-2xl font-serif font-medium text-brand-blue">Aula grátis / trecho do módulo</h3>
            </div>
            <div className="relative aspect-video bg-brand-blue/10 rounded-2xl overflow-hidden shadow-lg border border-brand-gold/20 group cursor-pointer">
              <img src="https://picsum.photos/seed/class/800/450" alt="Aula grátis" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Veja por dentro */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Monitor className="w-6 h-6 text-brand-gold" />
              <h3 className="text-2xl font-serif font-medium text-brand-blue">Veja por dentro (prints da plataforma)</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-video bg-white rounded-xl overflow-hidden shadow-md border border-brand-gold/10 hover:border-brand-gold/50 transition-colors">
                  <img src={`https://picsum.photos/seed/platform${item}/400/225`} alt="Plataforma" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
