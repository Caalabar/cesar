import { motion } from 'motion/react';
import { BookOpen, MonitorPlay, FileText, Video, MessageCircle, Library, Award } from 'lucide-react';

export default function Included() {
  const topics = [
    "Paternidade de Deus e o valor da filiação",
    "A natureza do ser humano",
    "Estabelecendo as verdades",
    "Resolvendo conflitos",
    "Entendendo o conceito da graça",
    "O papel do homem: provendo todas as necessidades",
    "O papel da mulher: a sublime tarefa de edificar pessoas",
    "Sexualidade",
    "Dinheiro",
    "Pastoreando o coração dos filhos",
    "Depressão e ansiedade infantil",
    "Disciplinando os filhos"
  ];

  const features = [
    { title: "Acesso Flexível", desc: "Acesso às aulas quando e de onde você quiser.", icon: MonitorPlay },
    { title: "Material de Apoio", desc: "Apostilas para acompanhar o conteúdo.", icon: FileText },
    { title: "Mentoria", desc: "Mentoria ao vivo - 1 vez por mês.", icon: Video },
    { title: "Suporte", desc: "Respostas de perguntas frequentes.", icon: MessageCircle },
    { title: "Biblioteca", desc: "Indicações de leituras complementares.", icon: Library },
    { title: "Certificado", desc: "Certificado de conclusão do curso.", icon: Award }
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
            O que você vai <span className="text-brand-gold">aprender</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Lista de Tópicos */}
        <div className="max-w-5xl mx-auto mb-20 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-gold/10">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4"
              >
                <div className="bg-brand-blue/5 p-2 rounded-lg shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-brand-gold" />
                </div>
                <p className="text-brand-blue/80 font-medium leading-relaxed">{topic}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blocos de Benefícios / Entregáveis */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-brand-blue text-center p-6 md:p-8 rounded-2xl border-t-4 border-brand-gold shadow-lg"
            >
              <div className="w-14 h-14 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-brand-gold" />
              </div>
              <h4 className="text-lg font-serif font-medium text-brand-gold mb-3">{feature.title}</h4>
              <p className="text-brand-offwhite/70 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
