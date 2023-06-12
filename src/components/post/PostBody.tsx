import markdownStyles from "./markdown-styles.module.css";

export const PostBody = ({ content }: { content: string }) => {
  return (
    <div
      className={`${markdownStyles["markdown"]}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
