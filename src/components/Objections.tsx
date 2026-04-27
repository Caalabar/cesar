import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Objections() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Não tenho muito tempo na rotina, vou conseguir acompanhar?",
      a: "Assista as aulas em qualquer momento, pois elas estarão disponíveis por 12 meses."
    },
    {
      q: "Preciso ter algum conhecimento prévio em Psicologia ou Teologia?",
      a: "De forma alguma. O César traduz seus 38 anos de experiência em aconselhamento bíblico para uma linguagem simples, prática e direta. O curso é para quem vive problemas reais e busca soluções reais, independente da sua formação."
    },
    {
      q: "Como vou saber se o curso traz resultados para mim?",
      a: "Você não receberá apenas teoria, mas ferramentas práticas para aplicar no seu casamento e na criação dos seus filhos já no dia seguinte. O resultado vem da aplicação dos princípios ensinados."
    },
    {
      q: "Terei ajuda se eu tiver dúvidas durante o curso?",
      a: "Sim! Você receberá suporte técnico da plataforma, você poderá enviar suas dúvidas pelo WhatsApp/E-mail que semanalmente, o César irá respondê-las. Você faz parte de uma jornada acompanhada, não está comprando um curso onde estudará sozinho."
    },
    {
      q: "Onde assisto às aulas e como recebo o acesso?",
      a: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com os dados de login para a nossa plataforma exclusiva com as aulas de cada curso."
    },
    {
      q: "O curso oferece certificado?",
      a: "Sim. Ao concluir a jornada, você poderá emitir seu certificado de conclusão, que atesta sua participação e as horas de formação em saúde emocional e espiritual sob a orientação do César Coneglian."
    },
    {
      q: "E se eu me arrepender da compra?",
      a: "Nós removemos todo o risco das suas costas. Você tem 7 dias de garantia incondicional. Se assistir ao conteúdo e decidir que não é para você, basta solicitar o reembolso e devolveremos 100% do valor investido, sem burocracia."
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
                    <div className="p-6 pt-0 text-brand-offwhite/80 leading-relaxed border-t border-brand-gold/10 text-lg">
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
