import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Objections() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Não tenho muito tempo na minha rotina. O curso serve para mim?",
      a: "Sim. As aulas são gravadas e você pode assistir no seu próprio ritmo, de onde estiver e quando quiser. Você pode dedicar apenas alguns minutos por dia e ainda assim ter resultados."
    },
    {
      q: "Preciso ter algum conhecimento prévio ou nível espiritual específico?",
      a: "Não. O conteúdo foi desenhado para ser acessível a todos, desde aqueles que estão dando os primeiros passos na fé até os que já têm uma caminhada mais longa."
    },
    {
      q: "Quando começo a ver resultados?",
      a: "A transformação começa a partir do momento em que você aplica os princípios ensinados. Muitos alunos relatam mudanças significativas logo nas primeiras semanas."
    },
    {
      q: "Terei suporte para tirar dúvidas?",
      a: "Sim. Nossa equipe está pronta para ajudar você com qualquer dúvida técnica sobre a plataforma ou sobre o conteúdo das aulas."
    },
    {
      q: "Como funciona o acesso à plataforma?",
      a: "Assim que o pagamento for confirmado, você receberá um e-mail com seus dados de acesso (login e senha) para entrar na nossa área de membros exclusiva."
    },
    {
      q: "O curso tem certificado?",
      a: "Sim. Ao concluir todas as aulas de cada curso, você poderá emitir o seu certificado de conclusão diretamente na plataforma."
    },
    {
      q: "E se eu não gostar? Como funciona o reembolso?",
      a: "Você tem 7 dias de garantia incondicional. Se não gostar, basta enviar um e-mail para nossa equipe de suporte dentro desse prazo e devolveremos 100% do seu dinheiro."
    }
  ];

  return (
    <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-gold mb-4 flex items-center justify-center gap-4">
            <HelpCircle className="w-8 h-8 md:w-12 md:h-12 text-brand-gold" />
            Objeções Frequentes
          </h2>
          <div className="w-24 h-1 bg-brand-gold/50 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 border border-brand-gold/20 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/10 transition-colors"
              >
                <span className="font-serif font-medium text-lg text-brand-offwhite pr-8">{faq.q}</span>
                <ChevronDown
                  className={`w-6 h-6 text-brand-gold shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-brand-offwhite/70 leading-relaxed border-t border-brand-gold/10">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
