import Image from "next/image";
import Link from "next/link";
import React from "react";
import links from "../../../../data/Links";
import RoundButton from "../roundbutton/RoundButton";
import styles from "./header.module.css";
function Header() {
  return (
    <header className="px-4 py-4 md:px-8 md:py-6 flex justify-between items-center">
      <Link href="/" className="block w-fit">
        <Image
          src="/assets/logo.webp"
          width={140}
          height={60}
          alt="company logo"
        />
      </Link>
      <div className={styles.links}>
        <ul className="flex gap-6 py-4 px-8 backdrop-blur-3xl  rounded-3xl overflow-hidden">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="text-xl  text-white leading-6" href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.roundLink}>
        <RoundButton name="Obtenir un devis" path="/" />
      </div>
      <div
        className={`p-2 rounded-[50%] ring-1 ring-red-500 hidden ${styles.menuIcon}`}
      >
        <Image src="/svgs/menu.svg" alt="menu icon" width={35} height={35} />
      </div>
    </header>
  );
}

export default Header;
