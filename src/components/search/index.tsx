import Image from "next/image";
import { ChangeEvent, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Search = ({ onChange }: Props) => {
  return (
    <div className='relative max-w-sm text-base font-medium mt-8'>
      <input
        onChange={onChange}
        className='py-2 px-4 border border-gray-300 rounded-md w-full'
        placeholder='Search articles'
      />
      <Image
        className='absolute top-[12px] right-4'
        src={"/search.svg"}
        alt='search'
        width={20}
        height={20}
      />
    </div>
  );
};
