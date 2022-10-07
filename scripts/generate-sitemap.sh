# generate-sitemap.sh

cd public

rm -rf sitemap
mkdir sitemap

cd ..
cd scripts

node ./robots.js
node ./sitemap-common.js
node ./sitemap-posts.js
node ./sitemap-gzip.js
node ./sitemap.js
