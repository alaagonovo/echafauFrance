import { IRoundbtn } from "@/components/interface";
import Link from "next/link";
import React from "react";
import styles from "./roundbtn.module.css";
function RoundButton({ name, path, transition, delay, background }: IRoundbtn) {
  return (
    <Link
      href={path}
      className={`inline-block px-6  py-3  ${
        background
          ? "bg-transparent border border-white hover:bg-[var(--main-red)] hover:border-[var(--main-red)] transition duration-500"
          : "bg-[var(--main-red)]"
      } text-white text-xl text-nowrap  w-max h-fit rounded-full ${
        transition && styles.transbtn
      }`}
      style={transition ? { animationDelay: `${delay}s` } : {}}
    >
      {name}
    </Link>
  );
}

export default RoundButton;
