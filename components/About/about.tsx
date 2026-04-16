"use client";
import { motion } from "framer-motion";
import { AboutCard } from "./AboutCard";
import { aboutData } from "../../data/AboutData";

// Conteneur de variantes pour orchestrer l'apparition des enfants (Stagger)
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // Délai avant que le premier enfant n'apparaisse
      staggerChildren: 0.15 // Temps entre l'apparition de chaque enfant
    }
  }
};

export const About = () => {
  return (
    <section id='about' className="py-20 px-6 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        
        {/* TITRE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-5xl md:text-6xl font-['Abel',sans-serif] leading-tight text-[#1b1d1e]"
        >
          {aboutData.title.main} <br />
          <span className="font-['Instrument_Serif',serif] italic">
            {aboutData.title.agency}
          </span>
        </motion.div>

        {/* GRILLE DE CARTES (Bento Box style) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Déclenche l'animation quand la grille est visible
          viewport={{ once: true, amount: 0.2 }} // S'anime une seule fois, quand 20% est visible
        >
          {aboutData.cards.map((card) => (
            <AboutCard key={card.id} card={card} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};