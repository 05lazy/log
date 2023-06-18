import { Svg } from "@/assets";
import Link from "next/link";

export const Back = () => (
  <Link
    href={"/"}
    className='flex gap-3 items-center text-lg mt-11 hover:opacity-60 dark:text-gray-200'
  >
    <Svg.Arrow />
    뒤로가기
  </Link>
);
