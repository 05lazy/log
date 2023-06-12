import { Svg } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const moreList = [
  {
    name: "Mail",
    url: "mailto:05lazy.dev@gmail.com",
  },
  {
    name: "Github",
    url: "https://github.com/05lazy",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sanghyun-cho-0b8743273/",
  },
];

const linkList = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
];

export const Footer = () => {
  return (
    <footer className='h-52 bg-gray-100 mt-20 dark:bg-gray-700'>
      <div className='max-w-[632px] px-4 m-auto flex justify-between items-center h-full'>
        <Svg.Logo />
        <div className='flex gap-12'>
          <nav>
            <p className='font-semibold mb-3'>Links</p>
            <ul className='flex gap-1 flex-col'>
              {linkList.map((link, idx) => (
                <li key={idx}>
                  <Link className='flex gap-1 hover:opacity-60' href={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <p className='font-semibold mb-3'>More</p>
            <ul className='flex gap-1 flex-col'>
              {moreList.map((more, idx) => (
                <li key={idx}>
                  <Link
                    target='_blank'
                    className='flex items-center gap-2 hover:opacity-60'
                    href={more.url}
                  >
                    {more.name}
                    <Svg.Link />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
