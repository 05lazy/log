import { Dark, Light } from "@/assets/svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export const LightSwitch = () => {
  return (
    <>
      <button
        className='hidden dark:block'
        aria-label='Use Dark Mode'
        onClick={() => {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }}
      >
        <Dark />
      </button>
      <button
        className='dark:hidden'
        aria-label='Use Light Mode'
        onClick={() => {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }}
      >
        <Light />
      </button>
    </>
  );
};
