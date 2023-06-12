import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => {
      if (!post1.date || !post2.date) {
        return 0;
      }
      const post1HiphoneSplited = post1.date.split("-");
      const post2HiphoneSplited = post2.date.split("-");
      if (post1HiphoneSplited[0] === post2HiphoneSplited[0]) {
        if (post1HiphoneSplited[2] === post2HiphoneSplited[2]) {
          return post1HiphoneSplited[2] > post2HiphoneSplited[2] ? 1 : -1;
        }
        return post1HiphoneSplited[1] > post2HiphoneSplited[1] ? 1 : -1;
      }
      return post1HiphoneSplited[0] > post2HiphoneSplited[0] ? 1 : -1;
    });
  return posts;
}
