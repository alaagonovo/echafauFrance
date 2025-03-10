import { IRoundbtn } from "@/components/interface";
import Link from "next/link";
import React from "react";

function RoundButton({ name, path }: IRoundbtn) {
  return (
    <Link
      href={path}
      className="inline-block px-8 py-3 rounded-4xl bg-[var(--main-red)] text-white text-xl  w-fit"
    >
      {name}
    </Link>
  );
}

export default RoundButton;
