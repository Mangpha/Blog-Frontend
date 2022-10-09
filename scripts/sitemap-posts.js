import * as fs from 'fs';
import * as prettier from 'prettier';
import axios from 'axios';

const blogDomain = 'https://mangpha.dev';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

(async () => {
  let response = [];

  await axios({
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
    .then((res) => {
      response = res.data.data.findAllPosts.posts;
    })
    .catch((err) => {
      console.log(err.response.data);
    });

  const postList = [];
  response.forEach((post) => postList.push({ id: post.id, title: post.title, updatedAt: post.updatedAt }));
  const postListSitemap = `
    ${postList
      .map((post) => {
        return `
        <url>
          <loc>${`${blogDomain}/blog/${post.id}`}</loc>
          <lastmod>${post.updatedAt}</lastmod>
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

  const formattedSitemap = [formatted(generatedSitemap)].join('');

  fs.writeFileSync('../public/sitemap/sitemap-posts.xml', formattedSitemap, 'utf8');
})();
