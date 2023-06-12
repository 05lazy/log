import { getAllPosts } from "@/apis/api";
import { Title } from "@/components/Title";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Preview } from "@/components/post/Preview";
import { Search } from "@/components/search";
import { useState } from "react";

export interface allPosts {
  date: string;
  title: string;
  slug: string;
}

interface Props {
  allPosts: allPosts[];
}

export default ({ allPosts }: Props) => {
  const [search, setSearch] = useState<string>("");

  const searchedPost = allPosts.filter((post) => post.title.includes(search));

  return (
    <main>
      <Header />
      <div className='flex flex-col gap-6 max-w-[632px] px-4 m-auto min-h-screen'>
        <Title>
          All Posts
          <Search onChange={(e) => setSearch(e.target.value)} />
        </Title>
        {searchedPost.map((post, idx) => (
          <Preview {...post} key={idx} />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
