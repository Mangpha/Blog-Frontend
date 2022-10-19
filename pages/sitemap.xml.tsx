import axios from 'axios';
import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import { FindAllCategoryQuery_findAllCategories_categories } from './api/__graphql__/FindAllCategoryQuery';
import { FindPostsQuery_findAllPosts_posts } from './api/__graphql__/FindPostsQuery';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const loc = 'https://mangpha.dev';
  const lastmod = new Date().toISOString();

  const commonUrls = ['/', '/404', '/about', '/blog', '/projects'];
  const posts: FindPostsQuery_findAllPosts_posts[] = await axios({
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
            updatedAt
          }
        }
      }`,
    },
  })
    .then((res) => res.data.data.findAllPosts.posts)
    .catch((err) => {
      console.log(err.response.data);
    });
  const categories: FindAllCategoryQuery_findAllCategories_categories[] = await axios({
    url: process.env.NEXT_PUBLIC_END_POINT,
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    data: {
      query: `query FindAllCategoryQuery {
        findAllCategories {
          categories {
            id
          }
        }
      }`,
    },
  })
    .then((res) => res.data.data.findAllCategories.categories)
    .catch((err) => console.log(err.response.data));

  const commonFields = commonUrls.map((url) => ({
    loc: loc + url,
    changefreq: 'weekly',
    priority: '0.9',
    lastmod,
  }));
  const postFields = posts.map((post) => ({
    loc: loc + '/blog/' + post.id,
    changefreq: 'weekly',
    priority: '1.0',
    lastmod,
  }));
  const categoryFields = categories.map((category) => ({
    loc: loc + '/blog/category/' + category.id,
    changefreq: 'weekly',
    priority: '0.8',
    lastmod,
  }));

  const fields = [...commonFields, ...postFields, ...categoryFields];

  // @ts-ignore
  return getServerSideSitemap(ctx, fields);
};

export default () => {
  return;
};
