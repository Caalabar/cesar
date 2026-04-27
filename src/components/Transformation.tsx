import { motion } from 'motion/react';
import { Heart, Home, Sprout, Star } from 'lucide-react';

export default function Transformation() {
  const transformations = [
    {
      title: "O Seu Interior",
      desc: "Você vai aprender a lidar com as suas próprias dores referentes a sua filiação e receber consolo e instrução através da Palavra de Deus.",
      icon: Heart
    },
    {
      title: "O Seu Legado",
      desc: "Receba direcionamento prático para a criação de filhos e formação de caráter.",
      icon: Star
    },
    {
      title: "O Ambiente da Sua Casa",
      desc: "Sua casa passa a ser um ambiente de direção, crescimento e propósito.",
      icon: Home
    },
    {
      title: "O Futuro dos Seus Filhos",
      desc: "Você estará formando filhos maduros.",
      icon: Sprout
    }
  ];

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
          <div className="w-24 h-1 bg-brand-gold/50 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-brand-offwhite/80 max-w-2xl mx-auto font-light">
            Aqui mostramos que o aluno terá ferramentas para várias áreas da vida:
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {transformations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 border border-brand-gold/20 p-8 rounded-2xl hover:border-brand-gold/60 transition-colors duration-300 group backdrop-blur-sm"
              >
                <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                  <item.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h4 className="text-2xl font-serif text-brand-gold mb-3">{item.title}</h4>
                <p className="text-brand-offwhite/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
