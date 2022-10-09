import { createGzip } from 'zlib';
import { readdirSync, createReadStream, createWriteStream } from 'fs';

const dirs = ['../public/sitemap'];

dirs.forEach((dir) => {
  readdirSync(dir).forEach((file) => {
    if (file.endsWith('.xml') && file !== 'sitemap.xml') {
      const fileContents = createReadStream(dir + '/' + file);
      const writeStream = createWriteStream(dir + '/' + file + '.gz');
      const zip = createGzip();

      fileContents
        .pipe(zip)
        .on('error', (err) => console.log(err))
        .pipe(writeStream)
        .on('error', (err) => console.log(err));
    }
  });
});
