import React from "react";

export interface ProjectVideo {
  id: number;
  url: string;
}

export interface ProjectStats {
  views: string;
  followers: string;
  engagement: string;
}

export interface ProjectSocial {
  instagram?: string;
  tiktok?: string;
}

export interface Project {
  description: React.ReactNode;
  videos: ProjectVideo[];
  stats: ProjectStats;
  avatar: string;
  social: ProjectSocial;
}

export const projectsData: Record<string, Project> = {
  "Mobile M": {
    description: (
      <>
        J’ai accompagné <b>Mobile M</b> dans le développement de sa visibilité sur les réseaux sociaux, en mettant en avant son magasin et ses produits à travers du contenu simple et efficace. 
        Ce travail a permis de faire connaître davantage l’enseigne et d’attirer de <b>nouveaux clients</b> en magasin. 
        L’objectif était aussi de renforcer <b>la présence en ligne</b>, ce qui a contribué à améliorer la fidélisation, avec des clients qui reviennent régulièrement.
      </>
    ),
    videos: [
      { id: 5, url: "Videos/Mobile m/million_.mp4" },
      { id: 6, url: "Videos/Mobile m/redmi bon .mp4" },
      { id: 7, url: "Videos/Mobile m/REMIS A NEUF .mp4" },
      { id: 8, url: "Videos/Mobile m/trend .mp4" },
    ],
    stats: {
      views: "+100 000 vues",
      followers: "+1 000 abonnés sur TikTok",
      engagement: "Audience engagée | Acquisition maîtrisée",
    },
    avatar: "/Images/avatar-3.png",
    social: {
      tiktok: "https://www.tiktok.com/@mobilem.be",
    },
  },

  "La maison créations": {
    description: (
      <>
        Avec <b>La Maison Créations</b>, j’ai aidé à rendre plus compréhensibles des services liés à l’administratif et aux démarches juridiques, souvent perçus comme compliqués. 
        À travers des vidéos simples et claires, l’objectif était <b>d’expliquer les services proposés</b> et de mettre en avant l’accompagnement disponible entre la Belgique et le Maroc.
      </>
    ),
    videos: [
      { id: 5, url: "Videos/La maison crétions/La maison créations 1_.mp4" },
      { id: 6, url: "Videos/La maison crétions/La maison créations 2.mp4" },
      { id: 7, url: "Videos/La maison crétions/La maison créations 3.mp4" },
      { id: 8, url: "Videos/La maison crétions/La maison créations 5.mp4" },
    ],
    stats: {
      views: "+500 000 vues",
      followers: "+5 000 abonnés",
      engagement: "Viralité maîtrisée",
    },
    avatar: "/Images/avatar-2.png",
    social: {
      instagram: "https://www.instagram.com/edemarches",
      tiktok: "https://www.tiktok.com/@easy.dmarches",
    },
  },

  "Easy démarches": {
    description: (
      <>
        J’ai accompagné <b>Easy démarches</b> dans sa communication lors de son lancement, <b>en mettant en avant</b> ses services de personnalisation à travers du <b>contenu vidéo</b>. 
        Cela a permis de mieux faire connaître la marque et de <b>susciter de l’intérêt pour ses services</b>, notamment pour les cadeaux personnalisés comme les anniversaires ou les mariages.
      </>
    ),
    videos: [
      { id: 1, url: "Videos/Easy démarches/Vidéo 1.mp4" },
      { id: 2, url: "Videos/Easy démarches/Vidéo 2.mp4" },
      { id: 3, url: "Videos/Easy démarches/Vidéo 3.mp4" },
      { id: 4, url: "Videos/Easy démarches/Vidéo 4.mp4" },
    ],
    stats: {
      views: "+200 000 vues",
      followers: "+2 500 abonnés",
      engagement: "Lead generation boostée",
    },
    avatar: "/Images/avatar-1.png",
    social: {
      tiktok: "https://www.tiktok.com/@la.maison.creations",
    },
  },
};