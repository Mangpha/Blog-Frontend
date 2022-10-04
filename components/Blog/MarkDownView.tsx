import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkNormalizeHeadings from 'remark-normalize-headings';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

interface MarkDownViewProps {
  content: string;
}

const MarkDownView: React.FC<MarkDownViewProps> = ({ content }) => {
  return (
    <div className="pt-10 px-8 prose min-w-full">
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                // @ts-ignore
                style={a11yDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          pre({ children, className, ...props }) {
            return (
              <pre className={`${className} dark:bg-gray-800`} {...props}>
                {children}
              </pre>
            );
          },
        }}
        remarkPlugins={[remarkGfm, remarkBreaks, remarkNormalizeHeadings]}
        rehypePlugins={[rehypeRaw, rehypeStringify]}
        className="prose dark:prose-invert min-w-full"
      >
        {content || 'Please input content!'}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDownView;
