import React from "react";

export const SocialProofCard = ({ logoUrl, name }) => {
  return (
    <div className="flex items-center justify-center px-8 md:px-12 shrink-0">
      {/* Remplacement par une balise img pour l'usage réel */}
      <img 
        src={logoUrl} 
        alt={`Logo ${name}`} 
        className="h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>
  );
};