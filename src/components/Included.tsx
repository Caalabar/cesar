import { motion } from 'motion/react';
import { BookOpen, Heart, Users, AlertTriangle, Gift, Clock, Award, Layers } from 'lucide-react';

export default function Included() {
  const courses = [
    {
      title: "Um só coração",
      desc: "Destinado a temas relacionados ao casamento e todos os princípios que envolvem um relacionamento maduro e saudável.",
      icon: Heart
    },
    {
      title: "Educando Pais",
      desc: "Destinado a todos aqueles que tem interesse no tema relacionado a formação de filhos em qualquer fase da vida.",
      icon: Users
    },
    {
      title: "Lidando com o luto",
      desc: "Destinado a pessoas que tiveram a perda de alguém ou que estão lidando com perdas de qualquer natureza.",
      icon: AlertTriangle
    },
    {
      title: "A tragédia do adultério",
      desc: "Destinado a todas as pessoas que de alguma forma sofrem com a dor da traição.",
      icon: BookOpen
    }
  ];

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
            O que está <span className="text-brand-gold">incluso</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-8"></div>
          <h3 className="text-2xl font-serif text-brand-blue/80">Cursos</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-brand-gold/10 hover:border-brand-gold/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/5 p-4 rounded-xl group-hover:bg-brand-gold/10 transition-colors">
                  <course.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-medium text-brand-blue mb-2">{course.title}</h4>
                  <p className="text-brand-blue/70 leading-relaxed text-sm md:text-base">{course.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blocos adicionais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Módulos", desc: "Aulas estruturadas passo a passo", icon: Layers },
            { title: "Bônus", desc: "Bônus (com valor percebido)", icon: Gift },
            { title: "Acesso", desc: "Acesso (tempo), atualizações, suporte, comunidade", icon: Clock },
            { title: "Certificado", desc: "Certificado (se tiver)", icon: Award }
          ].map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-brand-blue text-center p-6 rounded-2xl border-t-4 border-brand-gold shadow-xl"
            >
              <div className="w-12 h-12 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                <block.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="text-lg font-serif text-brand-gold mb-2">{block.title}</h4>
              <p className="text-brand-offwhite/70 text-sm">{block.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
