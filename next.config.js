const withTM = require('next-transpile-modules')([
  'remark',
  'unified',
  'bail',
  'is-plain-obj',
  'trough',
  'vfile',
  'unist-util-stringify-position',
  'mdast-util-to-string',
  'micromark-util-combine-extensions',
  'micromark-util-symbol/constants.js',
  'micromark-util-resolve-all',
  'parse-entities/decode-entity.js',
  'character-entities',
  'micromark-util-html-tag-name',
  'mdast-util-to-markdown',
  'zwitch',
  'longest-streak',
  'mdast-util-from-markdown',
]);

module.exports = withTM();
