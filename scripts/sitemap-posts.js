import { writeFileSync } from 'fs';
import { format } from 'prettier';
import { client } from '../apollo';
import { FIND_POSTS_QUERY } from '../pages/api/gql';

const getDate = new Date().toISOString();
const blogDomain = 'https://mangpha.dev';

const formatted = (sitemap) => format(sitemap, { parser: 'html' });

(async () => {
  let response = [];
  try {
    const {
      data: { findAllPosts },
    } = await client.query(FIND_POSTS_QUERY, {
      query: FIND_POSTS_QUERY,
      variables: {
        input: {
          take: 10000,
        },
      },
    });
    response = findAllPosts.posts;
  } catch (error) {
    console.log(error);
  }
  const postList = [];
  response.forEach((post) => postList.push({ id: post.id, title: post.title }));
  const postListSitemap = `
    ${postList
      .map((post) => {
        return `
        <url>
          <loc>${`${blogDomain}/blog/${post.id}`}</loc>
          <lastmod>${getDate}</lastmod>
        </url>
      `;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
  	<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${postListSitemap}
    </urlset>
  `;

  const formattedSitemap = [formatted(generatedSitemap)];

  writeFileSync('../public/sitemap/sitemap-posts.xml', formattedSitemap, 'utf8');
})();
