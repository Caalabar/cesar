import { motion } from 'motion/react';
import { Award, BookOpen, Users, ShieldCheck } from 'lucide-react';

export default function About() {
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
            Sobre o <span className="text-brand-gold">professor</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative z-10">
              <img src="https://picsum.photos/seed/cesar/800/1066" alt="César Coneglian" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold rounded-full -z-10 opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue rounded-full -z-10 opacity-10 blur-xl"></div>
            
            {/* Badge */}
            <div className="absolute bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-2xl shadow-xl border border-brand-gold/20 z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-brand-blue">38 anos</p>
                <p className="text-xs text-brand-blue/60 uppercase tracking-widest font-semibold">de experiência</p>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-brand-blue mb-2">César Coneglian</h3>
              <p className="text-brand-gold font-medium uppercase tracking-widest text-sm">Psicólogo Clínico & Conferencista</p>
            </div>

            <div className="space-y-6 text-brand-blue/80 leading-relaxed text-lg">
              <p>
                Formado em Psicologia pela Universidade Federal do Paraná, com 38 anos de atuação como psicólogo clínico; especialista em Aconselhamento Familiar pelo ISBL, com mais de <strong className="text-brand-blue font-semibold">80 mil horas atendidas</strong>.
              </p>
              <p>
                É uma personalidade cristã, conhecido como pregador, conferencista e influenciador cristão, frequentemente compartilhando mensagens e ensinamentos com foco na vida de fé, família, desenvolvimento emocional e espiritual com aplicação prática para a vida e os relacionamentos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-gold/10 mt-4">
              <h4 className="font-serif font-medium text-xl text-brand-blue mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-gold" />
                Por que você pode confiar em mim
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-blue/5 p-2 rounded-full">
                    <BookOpen className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <strong className="block text-brand-blue font-medium">Fundamento Bíblico Sólido</strong>
                    <span className="text-sm text-brand-blue/70">45 anos compartilhando a Palavra de Deus.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-blue/5 p-2 rounded-full">
                    <Users className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <strong className="block text-brand-blue font-medium">Experiência Prática Comprovada</strong>
                    <span className="text-sm text-brand-blue/70">Mais de 20 anos ministrando cursos na área de família.</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
