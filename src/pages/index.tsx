import { Title } from "@/components/Title";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Preview } from "@/components/post/Preview";
import { Search } from "@/components/search";
import { getPosts } from "@/utils/mdx-utils";
import { useState } from "react";

export interface Post {
  content: string;
  data: { title: string; date: string };
  filePath: string;
}

export default (allPosts: { posts: Post[] }) => {
  const [search, setSearch] = useState<string>("");

  const searchedPost = allPosts.posts.filter((post) =>
    post.data.title.includes(search)
  );

  return (
    <main>
      <Header />
      <div className='flex flex-col gap-6 max-w-[632px] px-4 m-auto'>
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

export function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
