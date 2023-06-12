import Image from "next/image";
import { useEffect, useState } from "react";

export const LightSwitch = () => {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(localStorage.getItem("theme") === "dark" ? true : false);
  }, []);

  useEffect(() => {
    if (dark === null) return;

    const html = document.querySelector("html") as HTMLElement;
    if (dark) {
      html.className = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      html.className = "light";
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      <Image
        src={dark ? "/dark.svg" : "/light.svg"}
        alt='qwf'
        width={24}
        height={24}
      />
    </button>
  );
};
