import fs from 'fs';
import globby from 'globby';
import prettier from 'prettier';

const getDate = new Date().toISOString();
const blogDomain = 'https://mangpha.dev';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

async () => {
  const pages = await globby([
    // include
    '../pages/**/*.tsx',
    '../pages/*.tsx',
    // exclude
    '!../pages/_app.tsx',
    '!../pages/_document.tsx',
    '!../pages/_error.tsx', // 추가 예정
    '!../pages/admin/**/*.tsx',
    '!../pages/admin/*.tsx',
    '!../pages/api/**/*.tsx',
    '!../pages/api/*.tsx',
    '!../pages/**/[blogId].tsx',
    '!../pages/**/[categoryId].tsx',
  ]);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace('../pages/', '')
          .replace('.tsx', '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;
        return `
        <url>
          <loc>${blogDomain}/${routePath}</loc>
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
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            ${pagesSitemap}
        </urlset>
  `;

  const formattedSitemap = [formatted(generatedSitemap)];

  fs.writeFileSync('../public/sitemap/sitemap-common.xml', formattedSitemap, 'utf8');
};
