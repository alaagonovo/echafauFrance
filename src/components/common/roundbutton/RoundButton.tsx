import { IRoundbtn } from "@/components/interface";
import Link from "next/link";
import React from "react";
import styles from "./roundbtn.module.css";
function RoundButton({ name, path, transition, delay }: IRoundbtn) {
  return (
    <Link
      href={path}
      className={`inline-block sm:px-8 px-6  sm:py-3 py-2 rounded-4xl bg-[var(--main-red)] text-white sm:text-xl text-base  w-fit ${
        transition && styles.transbtn
      }`}
      style={transition ? { animationDelay: `${delay}s` } : {}}
    >
      {name}
    </Link>
  );
}

export default RoundButton;
