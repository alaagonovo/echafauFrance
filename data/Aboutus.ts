const expYears = new Date().getFullYear() - 2007;
const currentYear = new Date().getFullYear();
const aboutUsData = [
  {
    icon: "/svgs/global.svg",
    color: "var(--dark-red)",
    desc: `Forts de ${expYears} ans d’excellence à travers l’Europe, Échafaudages 100 redéfinit les standards du secteur avec des solutions d’échafaudage innovantes et sécurisées à Paris. Spécialistes du montage, démontage, plan d’échafaudage, transport et note de calcul, nous utilisons des structures 100% métalliques pour des performances durables et résistantes, adaptées aux exigences de la construction moderne.`,
  },
  {
    icon: "/svgs/secure.svg",
    color: "var(--dark-red)",
    // color: "#32CD32",
    desc: `La sécurité est notre ADN : avec un taux d’accidents de 0% depuis notre création, nous garantissons des chantiers irréprochables grâce à une planification méticuleuse et des procédures rigoureuses à chaque étape.`,
  },
  {
    icon: "/svgs/power.svg",
    color: "var(--dark-red)",
    // color: "#FFFF00",
    desc: `En ${currentYear}, Échafaudages 100 incarne l’innovation et l’expertise. Bien plus qu’un prestataire, nous sommes votre partenaire pour des solutions alliant fiabilité, durabilité et précision technique, de l’étude préalable à la livraison finale.`,
  },
];

export default aboutUsData;
