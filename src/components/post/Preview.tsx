import { allPosts } from "@/pages";
import Link from "next/link";

export const Preview = (post: allPosts) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className='min-h-[100px] cursor-pointer transition hover:bg-slate-100 flex flex-col gap-1 justify-center px-7 rounded-xl dark:hover:text-gray-800'>
        <div className='text-xl font-medium'>{post.title}</div>
        <time className='text-[#8B95A1]'>{post.date}</time>
      </article>
    </Link>
  );
};
