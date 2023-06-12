import { Svg } from "@/assets";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className='dark:text-white'>
      <Svg.Logo />
    </Link>
  );
};
