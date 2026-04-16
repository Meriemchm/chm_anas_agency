export const aboutData = {
  title: {
    main: "A propos de",
    agency: "l'agence"
  },
  cards: [
    {
      id: 1,
      type: "bio",
      tag: "CHEZ PYGMALION AGENCY",
      content: (
        <>
          Je m'appelle <strong>Anas BOUTUIL</strong> et je suis avant tout un passionné de vidéos et de création de contenu. Depuis plusieurs années, je m'investis pleinement dans cet univers qui me fascine, avec le désir constant de transmettre des émotions, de raconter des histoires et de toucher les gens à travers des images et des messages percutants. La vidéo est pour moi un langage à part entière, capable de captiver, d'inspirer et de créer une véritable connexion avec l'audience.
        </>
      ),
      theme: "dark",
      gridSpan: "md:col-span-2" // Prend 2 colonnes sur desktop
    },
    {
      id: 2,
      type: "vision",
      tag: "CHEZ PYGMALION AGENCY",
      title: (
        <>
          Chez <br />
          <strong>Pygmalion <br /> Agency</strong>
        </>
      ),
      description: "chaque projet est une opportunité de transformer une idée en contenu vivant et efficace",
      theme: "yellow",
    },
    {
      id: 3,
      type: "philosophy",
      tag: "“FAIRE DE CHAQUE SECONDE UN MOMENT INOUBLIABLE.”",
      content: "Ce slogan reflète ma philosophie : passion, précision et créativité au service d'un contenu qui touche, inspire et transforme.",
      imageUrl: "/path/to/your/image.jpg", // Remplace par ton image réelle
      theme: "dark_philosophy",
    },
    {
      id: 4,
      type: "quote",
      tag: "CHEZ PYGMALION AGENCY",
      quote: "“Faire de chaque seconde un moment inoubliable.”",
      description: "Pour moi, chaque seconde compte. Dans le monde des contenus vidéos, quelques secondes suffisent pour captiver l'attention, transmettre une émotion ou marquer les esprits. Mon objectif est de tirer le meilleur de chaque instant, pour que chaque vidéo devienne un moment mémorable, qui reste dans l'esprit de l'audience et qui renforce l'impact de la marque.",
      theme: "light",
      gridSpan: "md:col-span-2" // Prend 2 colonnes sur desktop
    }
  ]
};