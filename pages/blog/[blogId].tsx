import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Post from '../../components/Blog/Post';

const Blog = () => {
  return (
    <></>
    // <Post
    //   id={data.findPostById.post?.id}
    //   title={data.findPostById.post?.title}
    //   content={data.findPostById.post?.content}
    //   category={data.findPostById.post?.category}
    //   createdAt={data.findPostById.post?.createdAt}
    // />
  );
};

export default Blog;
