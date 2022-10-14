import * as fs from 'fs';

const generatedSitemap = `User-agent: *
Disallow: /admin
Disallow: /api
Disallow: /login
Allow: /
`;

fs.writeFileSync('../public/robots.txt', generatedSitemap, 'utf8');
