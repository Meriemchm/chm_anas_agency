export const ServicesSelect = [
  "Stratégie et accompagnement",
  "Création de contenu",
  "Direction artistique",
  "Tournage et production",
  "Montage et optimisation",
  "Community management",
  "Campagnes marketing",
  "Consultance",
  "Formation",
];


export   const ContactFields = [
    { label: "Nom", name: "name", type: "text" },
    { label: "Prénom", name: "firstname", type: "text" },
    { label: "Numéro", name: "phone", type: "tel" },
    { label: "Email", name: "email", type: "email" },
    { label: "Type d'entreprise", name: "company", type: "text" },
  ] as const;