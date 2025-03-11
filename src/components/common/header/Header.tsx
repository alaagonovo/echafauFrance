// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import links from "../../../../data/Links";
// // import RoundButton from "../roundbutton/RoundButton";
// import styles from "./header.module.css";
// import Aside from "../aside/Aside";
// function Header() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const toggleAside = () => {
//     setIsOpen((prev) => !prev);
//   };
//   return (
//     <header className="px-4 py-4 md:px-8 md:py-6 flex justify-between items-center">
//       <Link href="/" className="block w-fit">
//         <Image
//           src="/assets/logo.webp"
//           width={140}
//           height={60}
//           alt="company logo"
//         />
//       </Link>
//       <div className={styles.links}>
//         <ul
//           className={`flex justify-between py-4 px-10 bg-[#FFFFFF]  rounded-4xl overflow-hidden ${styles.links_list}`}
//         >
//           {links.map((link, index) => (
//             <li key={index}>
//               <Link
//                 className="text-[18px]  text-[var(--main-blue)] leading-6 italic font-medium"
//                 href={link.path}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* <div className={styles.roundLink}>
//         <RoundButton name="Obtenir un devis" path="/" />
//       </div> */}
//       <button
//         className={`p-2 rounded-[50%] ring-2 ring-[var(--main-red)] hidden ${styles.menuIcon}`}
//         onClick={toggleAside}
//       >
//         <Image src="/svgs/menu.svg" alt="menu icon" width={35} height={35} />
//       </button>
//       {isOpen && <Aside toggleAside={toggleAside} />}
//     </header>
//   );
// }

// export default Header;
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import styles from "./responsive.module.css";
import styles from "./header.module.css";
import Aside from "../aside/Aside";
import links from "../../../../data/Links";
import RoundButton from "../roundbutton/RoundButton";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAside = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header
      className={`lg:w-[98%] xl:w-[90%] mx-auto relative  z-40  lg:top-8 w-full sm:top-0   ${styles.main_header}`}
    >
      <div
        // data-aos="fade-up"
        // data-aos-delay="300"
        className={`bg-white p-4 lg:py-4 lg:px-8 lg:rounded-[63px] md:rounded-none ${styles.controls} `}
      >
        {/* logo */}
        <div className="flex items-center relative justify-between">
          <Link href="/" className="block w-fit">
            <Image
              src="/assets/logo.webp"
              width={105}
              height={60}
              alt="company logo"
            />
          </Link>
          <div className={styles.links}>
            <ul
              className={`flex justify-between py-4 px-10 bg-[#FFFFFF]  rounded-4xl overflow-hidden ${styles.links_list}`}
            >
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-[18px]  text-[var(--main-blue)] leading-6 italic font-medium"
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.roundLink}>
            <RoundButton name="Obtenir un devis" path="/" />
          </div>
          <button
            className={`p-2 rounded-[50%] ring-2 ring-[var(--main-red)] hidden ${styles.menuIcon}`}
            onClick={toggleAside}
          >
            <Image
              src="/svgs/menu.svg"
              alt="menu icon"
              width={35}
              height={35}
            />
          </button>
        </div>
      </div>
      {isOpen && <Aside toggleAside={toggleAside} />}
    </header>
  );
}

export default Header;
