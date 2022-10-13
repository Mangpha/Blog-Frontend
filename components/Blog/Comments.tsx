const Comment = () => {
  return (
    <>
      <section
        className="my-5 utterance-light"
        ref={(el) => {
          if (!el) return;
          const scriptEl = document.createElement('script');
          scriptEl.src = 'https://utteranc.es/client.js';
          scriptEl.async = true;
          scriptEl.setAttribute('repo', 'Mangpha/blog-comments');
          scriptEl.setAttribute('issue-term', 'pathname');
          scriptEl.setAttribute('crossorigin', 'anonymous');
          scriptEl.setAttribute('theme', 'github-light');
          el.appendChild(scriptEl);
        }}
      />
      <section
        className="my-5 utterance-dark"
        ref={(el) => {
          if (!el) return;
          const scriptEl = document.createElement('script');
          scriptEl.src = 'https://utteranc.es/client.js';
          scriptEl.async = true;
          scriptEl.setAttribute('repo', 'Mangpha/blog-comments');
          scriptEl.setAttribute('issue-term', 'pathname');
          scriptEl.setAttribute('crossorigin', 'anonymous');
          scriptEl.setAttribute('theme', 'github-dark');
          el.appendChild(scriptEl);
        }}
      />
    </>
  );
};

export default Comment;
