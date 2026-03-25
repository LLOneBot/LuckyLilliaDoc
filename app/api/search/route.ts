import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createCJKTokenizer } from '@/lib/cjk-tokenizer';

export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  tokenizer: createCJKTokenizer(),
});
