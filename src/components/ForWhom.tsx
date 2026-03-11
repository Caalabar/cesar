import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const bullets = [
    'Pra você que quer aprofundar nos temas bíblicos sobre o funcionamento da alma;',
    'Pra você que deseja crescimento espiritual e emocional.',
    'Pra você que gostaria de fazer cursos práticos por um preço acessível.',
];

export default function ForWhom() {
    return (
        <section className="py-24 bg-white text-brand-blue">
            <div className="container mx-auto px-6">

                {/* Título da dobra */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
                        Esta jornada é para você
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-brand-blue leading-tight">
                        Você se identifica com{' '}
                        <span className="text-brand-gold italic">algum desses perfis?</span>
                    </h2>
                    <div className="w-20 h-1 bg-brand-gold mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Bullets */}
                <div className="max-w-2xl mx-auto flex flex-col gap-5">
                    {bullets.map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="flex items-start gap-4 bg-brand-offwhite rounded-2xl p-6 shadow-sm border border-brand-gold/10 hover:border-brand-gold/40 hover:shadow-md transition-all duration-300"
                        >
                            <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold/15 flex items-center justify-center">
                                <ChevronRight className="w-5 h-5 text-brand-gold" />
                            </span>
                            <p className="text-brand-blue/85 text-base md:text-lg leading-relaxed">{text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA secundário */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <button className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue font-semibold text-base md:text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(185,152,92,0.3)] hover:shadow-[0_0_30px_rgba(185,152,92,0.5)] transform hover:-translate-y-1">
                        Sim, quero fazer parte
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
