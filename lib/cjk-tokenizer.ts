import type { Tokenizer } from '@orama/orama';

/**
 * CJK-aware tokenizer for Orama.
 * Splits CJK characters individually, Latin text on word boundaries.
 */
const CJK_RANGE =
  /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u2e80-\u2eff\u3000-\u303f\uff00-\uffef]/;

const TOKEN_REGEX =
  /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u2e80-\u2eff]|[a-zA-Z0-9]+/g;

export function createCJKTokenizer(): Tokenizer {
  return {
    language: 'english',
    normalizationCache: new Map(),
    tokenize(text: string): string[] {
      const lower = text.toLowerCase();
      return lower.match(TOKEN_REGEX) ?? [];
    },
  };
}
