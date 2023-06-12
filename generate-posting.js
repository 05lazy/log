#!/usr/bin/env node

var fs = require("fs");

const generatePost = () => {
  if (!process.argv[2]) {
    console.log("포스트 이름을 입력해주세요.");
    return;
  }

  const title = process.argv[2];
  const titleFileName = title
    .toLocaleLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\?/g, "");
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  if (fs.existsSync(`_posts/${titleFileName}.md`)) {
    console.log("같은 이름의 포스트가 존재합니다.");
    return;
  }

  fs.writeFile(
    `_posts/${titleFileName}.md`,
    `---\ntitle: ${title}\ndate: ${year}-${month}-${day}\n---`
  );

  fs.mkdirSync(`public/post/${titleFileName}`);

  console.log(
    "정상적으로 작성되었습니다. 작성된 포스트 이름 ==> ",
    titleFileName
  );
};

generatePost();
