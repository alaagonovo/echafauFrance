import { IRoundbtn } from "@/components/interface";
import Link from "next/link";
import React from "react";
import styles from "./roundbtn.module.css";
function RoundButton({ name, path, transition, delay }: IRoundbtn) {
  return (
    <Link
      href={path}
      className={`inline-block px-8 py-3 rounded-4xl bg-[var(--main-red)] text-white text-xl  w-fit ${
        transition && styles.transbtn
      }`}
      style={transition ? { animationDelay: `${delay}s` } : {}}
    >
      {name}
    </Link>
  );
}

export default RoundButton;
