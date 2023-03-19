import { defineConfig } from 'dumi';
const repo = '/';
export default defineConfig({
  themeConfig: {
    name: 'git_home',
  },
  favicons: ['https://github-image-xyy.oss-cn-beijing.aliyuncs.com/favicon.ico'],
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
  base: repo,
  publicPath: repo,
  outputPath: "home",
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
});
