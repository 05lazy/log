export const Utterances = () => (
  <section
    className='mt-12'
    ref={(elem) => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://utteranc.es/client.js";
      scriptElem.async = true;
      scriptElem.setAttribute("repo", "05lazy/log");
      scriptElem.setAttribute("issue-term", "title");
      scriptElem.setAttribute("theme", "github-light");
      scriptElem.setAttribute("label", "blog-comment");
      scriptElem.crossOrigin = "anonymous";
      elem.appendChild(scriptElem);
    }}
  />
);
