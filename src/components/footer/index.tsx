import { Svg } from "@/assets";
import Link from "next/link";

const contacts = [
  {
    Img: Svg.Mail,
    url: "mailto:05lazy.dev@gmail.com",
  },
  {
    Img: Svg.Github,
    url: "https://github.com/05lazy",
  },
  {
    Img: Svg.LinkedIn,
    url: "https://www.linkedin.com/in/%EC%83%81%ED%98%84-%EC%A1%B0-0b8743273/",
  },
];

export const Footer = () => {
  return (
    <footer className='h-52 mt-24 mb-8 flex items-center flex-col'>
      {" "}
      <nav className='flex gap-5 mb-4'>
        {contacts.map((contact) => (
          <Link
            href={contact.url}
            className='hover:opacity-70 dark:text-gray-200'
          >
            {<contact.Img />}
          </Link>
        ))}
      </nav>
      <p className='dark:text-gray-200'>
        Copyright 2023. 조상현. All Rights Reversed.
      </p>
    </footer>
  );
};
