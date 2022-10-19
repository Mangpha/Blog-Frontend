import axios from 'axios';
import { Feed } from 'feed';
import { GetServerSideProps } from 'next';
import { mdToHtml } from '../hooks/useMdToHtml';
import { FindPostsQuery_findAllPosts_posts } from './api/__graphql__/FindPostsQuery';

const getAllPosts = async () => {
  return await axios({
    url: process.env.NEXT_PUBLIC_END_POINT,
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    data: {
      query: `query FindPostsQuery {
        findAllPosts(input: { take: 10000 }) {
          posts {
            id
            title
            content
            createdAt
          }
        }
      }`,
    },
  })
    .then((res) => res.data.data.findAllPosts.posts)
    .catch((err) => {
      console.log(err.response.data);
    });
};

const host = 'https://mangpha.dev';

const buildFeed = (items: FindPostsQuery_findAllPosts_posts[]) => {
  const date = new Date();
  const feed = new Feed({
    id: host,
    link: host,
    title: 'Mangpha Dev Blog',
    description: 'Mangpha Dev Blog',
    copyright: `All rights reserved ${date.getFullYear()}, Byeong Hee Jeon.`,
    updated: date,
    generator: 'Next.js',
    author: {
      name: 'Mangpha',
      link: host,
    },
  });

  items.forEach((item) => {
    feed.addItem({
      title: item.title,
      link: `${host}/blog/${item.id}`,
      description: mdToHtml(item.content),
      date: new Date(item.createdAt),
    });
  });

  return feed;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (ctx && ctx.res) {
    const { res } = ctx;
    const articles = await getAllPosts();
    console.log(articles);
    const feed = buildFeed(articles);
    res.setHeader('content-type', 'text/xml');
    res.write(feed.rss2());
    res.end();
  }

  return {
    props: {},
  };
};

export default () => {
  return;
};
