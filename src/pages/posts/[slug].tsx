import { Back } from "@/components/Back";
import { Utterances } from "@/components/Utterances";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getPostBySlug, postFilePaths } from "@/utils/mdx-utils";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { CustomLink } from "@/components/post/CustomLink";

const components = {
  a: CustomLink,
  Head,
};

interface Props {
  frontMatter: {
    date: string;
    title: string;
  };
  source: {
    compiledSource: string;
    frontmatter: {};
    scope: {
      date: string;
      title: string;
    };
  };
}

export default ({ frontMatter, source }: Props) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta property='og:title' content={frontMatter.title} />
      </Head>
      <Header />
      <div className='max-w-[632px] px-4 m-auto mb-40'>
        <Back />
        <h1 className='text-4xl mb-3 mt-6 dark:text-gray-200'>
          {frontMatter.title}
        </h1>
        <time className='text-xl dark:text-gray-400'>{frontMatter.date}</time>
        <hr className='my-10' />
        <article className='prose dark:prose-dark'>
          <MDXRemote {...source} components={components} />
        </article>
        <Utterances />
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { mdxSource, data } = await getPostBySlug(params.slug);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
