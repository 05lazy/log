import { Post } from "@/pages";
import Link from "next/link";

export const Preview = (post: Post) => {
  return (
    <Link href={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}>
      <article className='min-h-[100px] cursor-pointer transition hover:bg-slate-100 flex flex-col gap-1 justify-center px-7 rounded-xl dark:hover:text-gray-800 dark:text-gray-200'>
        <div className='text-xl font-medium'>{post.data.title}</div>
        <time className='text-[#8B95A1]'>{post.data.date}</time>
      </article>
    </Link>
  );
};
