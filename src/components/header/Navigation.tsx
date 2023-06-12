import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <ul className='flex-row gap-5'>
        <li>
          <Link className='hover:opacity-60' href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className='hover:opacity-60' href={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
