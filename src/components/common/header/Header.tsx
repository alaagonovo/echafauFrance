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
    if (!isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };
  return (
    <header
      className={`xl:w-[98%] mx-auto relative z-40 w-full ${styles.main_header}`}
    >
      <div
        // data-aos="fade-up"
        // data-aos-delay="300"
        className={`p-4 lg:py-4 lg:px-8 absolute lg:bg-transparent bg-white w-full translate-x-[-50%] left-[50%]  ${styles.controls}`}
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
              className={`flex justify-between py-4 px-10  overflow-hidden ${styles.links_list}`}
            >
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-[24px] text-white leading-6  font-medium"
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
