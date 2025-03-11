import React from "react";

function Maintitle({ title, bio }: { title: string; bio: string }) {
  return (
    <div className="mb-14 max-w-[900px] mx-auto lg:px-0 px-4">
      <h1 className="text-[var(--dark-blue)] text-5xl sm:text-6xl font-semibold text-center mb-4">
        {title}
      </h1>
      <p className="text-center text-[var(--main-red)] italic leading-5 font-medium text-[12px] sm:text-base">
        {bio}
      </p>
      <p className="w-[50px] h-[4px] rounded-2xl bg-[var(--main-red)] mx-auto mt-2"></p>
    </div>
  );
}

export default Maintitle;
