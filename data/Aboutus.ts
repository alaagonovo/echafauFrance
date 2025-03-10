const expYears = new Date().getFullYear() - 2007;
const currentYear = new Date().getFullYear();
const aboutUsData = [
  {
    icon: "/svgs/global.svg",
    color: "var(--dark-red)",
    desc: `Echafau, avec ${expYears} ans d'excellence à travers l'Europe, apporte désormais fièrement ses solutions d'échafaudage innovantes à Paris. En utilisant des matériaux 100% métalliques, nous garantissons des approches durables, résistantes et à la pointe de la construction moderne.`,
  },
  {
    icon: "/svgs/secure.svg",
    color: "#32CD32",
    desc: `La sécurité a toujours été notre pierre angulaire. Depuis ${expYears} ans, nous avons fièrement maintenu un taux d’accidents de 0% grâce à notre planification minutieuse et à nos procédures rigoureuses, de l’assemblage au démontage.`,
  },
  {
    icon: "/svgs/power.svg",
    color: "#FFFF00",
    desc: `Aujourd’hui, en ${currentYear}, nous sommes le témoignage du pouvoir de l’innovation constante et du savoir-faire. Face2Face est bien plus qu’une entreprise d’échafaudage—nous sommes une promesse de fournir des solutions alliant fiabilité et durabilité.`,
  },
];

export default aboutUsData;
