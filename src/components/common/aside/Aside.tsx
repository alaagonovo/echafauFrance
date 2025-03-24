"use client";
import Image from "next/image";
import React from "react";
import links from "../../../../data/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IToggleFunc } from "@/components/interface";
import styles from "./aside.module.css";

function Aside({ toggleAside }: IToggleFunc) {
  const pathname = usePathname();

  return (
    <aside
      className={`${styles.animation} bg-[#F3F4F6] w-full h-[100vh] fixed inset-0 p-4 z-10 overflow-y-scroll`}
    >
      <Image
        src="/assets/logo.webp"
        width={120}
        height={80}
        alt="logo of company"
        className="absolute"
        loading="lazy"
      />
      <button
        onClick={toggleAside}
        className="p-2 rounded-4xl ring-2 ring-[#ba1514] block ml-auto"
      >
        <Image
          src="/svgs/cross.svg"
          alt="cross Icon"
          width={35}
          height={35}
          loading="lazy"
        />
      </button>
      <ul className="mt-12">
        {links.map((link, index) => {
          const isActive = pathname === link.path && link.name !== "Accueil";

          return (
            <li
              key={index}
              className={`my-4 py-1 px-4 rounded-lg duration-300 ${
                isActive ? "bg-white text-[var(--main-red)]" : "hover:bg-white"
              }`}
            >
              <Link
                className={`text-[var(--main-blue)] text-[44px] leading-14 m-auto sm:leading-20 sm:text-6xl font-medium duration-300 ${
                  isActive
                    ? "text-[var(--main-red)]"
                    : "hover:text-[var(--main-red)]"
                }`}
                onClick={toggleAside}
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Aside;
