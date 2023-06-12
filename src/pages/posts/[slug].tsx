import { getAllPosts, getPostBySlug } from "@/apis/api";
import markdownToHtml from "@/apis/markdownToHtml";
import { Svg } from "@/assets";
import { Utterances } from "@/components/Utterances";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PostBody } from "@/components/post/PostBody";
import { Thumbnail } from "@/components/post/Thumbnail";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: {
    content: string;
    date: string;
    slug: string;
    title: string;
    thumbnail?: string;
  };
};

export default ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
          rel='stylesheet'
        />
      </Head>
      <Header />
      <div className='max-w-[632px] px-4 m-auto mb-40'>
        <Link
          href={"/"}
          className='flex gap-3 items-center text-lg mt-11 hover:opacity-60'
        >
          <Svg.Arrow />
          뒤로가기
        </Link>
        {post.thumbnail && <Thumbnail url={post.thumbnail} />}
        <h1 className='text-4xl mb-3 mt-6'>{post.title}</h1>
        <time className='text-xl text-[#8B95A1]'>{post.date}</time>
        <hr className='mt-10' />
        <PostBody content={post.content} />
        <Utterances />
      </div>
      <Footer />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "thumbnail",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
