# generate-sitemap.sh

while read line;
do
  export $line;
done < .env.local

cd public

rm -rf sitemap
mkdir sitemap

cd ..
cd scripts

node ./robots.mjs
node ./sitemap-common.mjs
node ./sitemap-posts.mjs
node ./sitemap-gzip.mjs
node ./sitemap.mjs
