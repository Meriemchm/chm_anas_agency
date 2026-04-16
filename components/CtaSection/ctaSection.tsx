import React from "react";
import Image from "next/image";

const CtaSection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-6">
      
      {/* CARD FLOATING */}
      <div className="max-w-8xl mx-auto bg-black text-white rounded-2xl px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* TEXT */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm text-white/80">
            Vous avez un projet en tête, parlons-en ensemble.
          </p>
          <p className="text-sm text-white/80">
            Notre équipe vous accompagne du concept à la réalisation.
          </p>
        </div>

        {/* BUTTON */}
        <button className="flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
          Contact
          <Image
            src="/Vector/up-2.svg"
            alt="Arrow Right"
            width={28}
            height={28}
          />
        </button>

      </div>
    </section>
  );
};

export default CtaSection;