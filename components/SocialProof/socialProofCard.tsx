import Image from "next/image";
import React from "react";

interface SocialProofCardProps {
  logoUrl: string;
  name: string;
}

export const SocialProofCard = ({ logoUrl, name }: SocialProofCardProps) => {
  return (
    <div className="flex items-center justify-center px-8 md:px-12 shrink-0 group">
      <Image
        src={logoUrl}
        alt={`Logo ${name}`}
        width={100}
        height={100}
        sizes="100px"
        className="h-8 md:h-10 w-auto object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
      />
    </div>
  );
};
