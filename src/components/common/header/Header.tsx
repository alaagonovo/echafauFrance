"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import links from "../../../../data/Links";
import RoundButton from "../roundbutton/RoundButton";
import styles from "./header.module.css";
import Aside from "../aside/Aside";
function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleAside = () => {
    setIsOpen((prev) => !prev);
  };
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
        <ul className="flex gap-6 py-4 px-8 bg-[#FFFFFF]  rounded-4xl overflow-hidden">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="text-xl  text-[var(--main-blue)] leading-6 italic font-medium"
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
        <Image src="/svgs/menu.svg" alt="menu icon" width={35} height={35} />
      </button>
      {isOpen && <Aside toggleAside={toggleAside} />}
    </header>
  );
}

export default Header;
