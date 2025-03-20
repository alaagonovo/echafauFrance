const getaquote = [
  {
    label: "Quel est le type de service?",
    placeholder: "Sélectionner un service",
    options: [
      "Propriété résidentielle",
      "Immeuble d'appartements",
      "Locaux commerciaux",
    ],
    name: "field1",
  },
  {
    label: "Combien de niveaux d’échafaudage avez-vous besoin?",
    placeholder: "Sélectionner le nombre de niveaux",
    options: ["1", "2", "3", "4-5", "6-9", "10-19", "20 ou plus"],
    name: "field2",
  },
  {
    label: "Avez-vous besoin d’options supplémentaires avec votre échafaudage?",
    placeholder: "Sélectionner les options supplémentaires",
    options: [
      "Aucune option supplémentaire",
      "Entourage de cheminée",
      "Poulie à corde",
      "Porte d'échelle",
      "Trappe d'échelle",
      "Seau de levage",
      "Goulottes à gravats",
      "Signalétique",
    ],
    name: "field3",
  },
  {
    label: "Quand avez-vous besoin de l’échafaudage?",
    placeholder: "Sélectionner votre disponibilité",
    options: [
      "Dans les prochains jours",
      "Dans la semaine",
      "Dans les 2 prochaines semaines",
      "Dans le mois",
      "Dans les 2-3 prochains mois",
    ],
    name: "field4",
  },
];

export default getaquote;
