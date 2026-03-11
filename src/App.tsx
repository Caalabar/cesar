/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import TargetAudience from './components/TargetAudience';
import Transformation from './components/Transformation';
import Included from './components/Included';
import SocialProof from './components/SocialProof';
import Demonstration from './components/Demonstration';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import Objections from './components/Objections';
import About from './components/About';
import FinalCTA from './components/FinalCTA';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-offwhite font-sans text-brand-blue selection:bg-brand-gold/30 selection:text-brand-blue">
      <Hero />
      <ForWhom />
      <TargetAudience />
      <Transformation />
      <Included />
      <SocialProof />
      <Demonstration />
      <Offer />
      <Guarantee />
      <Objections />
      <About />
      <FinalCTA />

      {/* Footer Simples */}
      <footer className="bg-brand-blue border-t border-brand-gold/10 py-8 text-center text-brand-offwhite/40 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} César Coneglian. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
