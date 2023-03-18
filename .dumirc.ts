import { defineConfig } from 'dumi';
const repo = 'home';
export default defineConfig({
  themeConfig: {
    name: 'git_home',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  outputPath: repo
});
