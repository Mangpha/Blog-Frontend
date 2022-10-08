import { writeFileSync } from 'fs';

const generatedSitemap = `User-agent: *
Disallow: /[MY_ADMIN_PAGE_DIR]*/
`;

writeFileSync('../public/robots.txt', generatedSitemap, 'utf8');
