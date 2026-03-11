import { motion } from 'motion/react';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

export default function Guarantee() {
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
            Garantia e <span className="text-brand-gold">risco reverso</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-brand-gold/20 flex flex-col md:flex-row items-center gap-10"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-brand-gold/10 rounded-full flex items-center justify-center border-4 border-brand-gold/30 shadow-inner relative">
              <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-brand-gold" />
              <div className="absolute -bottom-4 bg-brand-blue text-brand-gold font-bold px-4 py-1 rounded-full text-sm shadow-md border border-brand-gold/50">
                7 DIAS
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-brand-blue mb-4">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-brand-blue/80 leading-relaxed mb-6">
                Seu risco é zero. Você tem 7 dias para acessar todo o conteúdo, assistir às aulas e avaliar a plataforma. Se por qualquer motivo você achar que este material não é para você, basta enviar um e-mail para nossa equipe de suporte.
              </p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border-l-4 border-brand-gold">
                <h4 className="font-serif font-medium text-brand-blue mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <ShieldAlert className="w-5 h-5 text-brand-gold" />
                  Como pedir reembolso?
                </h4>
                <p className="text-sm text-brand-blue/70">
                  Sem burocracia, sem perguntas difíceis. Um simples e-mail e devolveremos 100% do seu investimento. Queremos apenas alunos satisfeitos e transformados.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
