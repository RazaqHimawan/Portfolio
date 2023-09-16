import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { escapeSvelte, mdsvex } from 'mdsvex';
import shiki from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';

import rehypeSlug from 'rehype-slug';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await shiki.getHighlighter({
        theme: 'dark-plus',
      });
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
      return `{@html \`${html}\`}`;
    },
  },
  remarkPlugins: [remarkUnwrapImages, remarkToc, remarkMath],
  rehypePlugins: [rehypeSlug, rehypeKatexSvelte],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter(),
  },
  vitePlugin: {
    inspector: {},
  },
};

export default config;
