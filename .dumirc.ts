import { defineConfig } from 'dumi';
const repo = '/';
export default defineConfig({
  themeConfig: {
    name: 'git_home',
  },
  favicons: ['http://rrrjuw5md.hn-bkt.clouddn.com/favicon.ico'],
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
  base: repo,
  publicPath: repo,
  outputPath: "home",
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
});
