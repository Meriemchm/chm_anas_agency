import React from "react";
import { ContactForm } from "./contactForm";    
import { ContactInfo } from "./contactInfo";

export const ContactContainer = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-start">
        {/* GAUCHE : FORMULAIRE */}
        <ContactForm />
        
        {/* DROITE : INFOS */}
        <ContactInfo />
      </div>
    </section>
  );
};