import { writeFileSync } from 'fs';
import { globby } from 'globby';
import { format } from 'prettier';

const getDate = new Date().toISOString();
const blogDomain = 'https://mangpha.dev';

const formatted = (sitemap) => format(sitemap, { parser: 'html' });

(async () => {
  const pages = await globby(['../public/sitemap/*.gz']);

  const sitemapIdx = `
    ${pages
      .map((page) => {
        const path = page.replace('../public/', '');
        return `
        <sitemap>
          <loc>${`${blogDomain}/${path}`}</loc>
          <lastmod>${getDate}</lastmod>
        </sitemap>
      `;
      })
      .join('')}
  `;

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIdx}
    </sitemapindex>
  `;

  const formattedSitemap = [formatted(sitemap)];
  writeFileSync('../public/sitemap.xml', formattedSitemap, 'utf8');
})();
