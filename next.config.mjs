import { resolve } from 'path';
import mdx from '@next/mdx';
import rehypeSlugPlugin from 'rehype-slug';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlugPlugin],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack(config, options) {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      'styles': resolve('styles'),
    });

    return config;
  }
});
