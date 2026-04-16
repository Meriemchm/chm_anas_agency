'use client';
import { motion } from "framer-motion";
import { SocialProofCard } from "./socialProofCard";


// Tes données (Peuvent être déplacées dans un fichier data.js)
const dataSocialProof = [
  { id: 1, name: "Logo 1", logoUrl: "https://logoipsum.com/api/all.svg" },
  { id: 2, name: "Logo 2", logoUrl: "https://logoipsum.com/api/211.svg" },
  { id: 3, name: "Logo 3", logoUrl: "https://logoipsum.com/api/225.svg" },
  { id: 4, name: "Logo 4", logoUrl: "https://logoipsum.com/api/250.svg" },
  { id: 5, name: "Logo 5", logoUrl: "https://logoipsum.com/api/251.svg" },
];

export const SocialProof = () => {
  // On double les données pour créer l'effet de boucle infinie fluide
  const duplicatedData = [...dataSocialProof, ...dataSocialProof];

  return (
    <section className="py-12 w-full overflow-hidden bg-white">
      {/* Titre avec lignes "Ils m'ont fait confiance" */}
      <div className="flex items-center justify-center mb-10 px-4">
        <div className="h-[1px] bg-gray-200 w-full max-w-[100px] md:max-w-[200px]" />
        <span className="mx-4 text-gray-400 font-['Inter',sans-serif] text-sm md:text-base whitespace-nowrap">
          Ils m'ont fait confiance
        </span>
        <div className="h-[1px] bg-gray-200 w-full max-w-[100px] md:max-w-[200px]" />
      </div>

      {/* Container de l'animation */}
      <div className="relative flex">
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-50%"], // Se déplace de la moitié (puisqu'on a doublé les items)
          }}
          transition={{
            ease: "linear",
            duration: 20, // Ajuste la vitesse ici
            repeat: Infinity,
          }}
        >
          {duplicatedData.map((item, index) => (
            <SocialProofCard 
              key={`${item.id}-${index}`} 
              logoUrl={item.logoUrl} 
              name={item.name} 
            />
          ))}
        </motion.div>

        {/* Optionnel : Dégradé sur les bords pour l'effet visuel */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};