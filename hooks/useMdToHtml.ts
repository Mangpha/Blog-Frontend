import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export const mdToHtml = (md: string) => remark().use(gfm).use(html).processSync(md).toString();
