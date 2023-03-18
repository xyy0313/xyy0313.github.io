import { defineConfig } from 'dumi';
const repo = '/';
export default defineConfig({
  themeConfig: {
    name: 'git_home',
  },
  base: repo,
  publicPath: repo,
  outputPath: "home"
});
