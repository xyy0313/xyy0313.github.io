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
  /**
   * resolve: 用于配置 Markdown 解析相关的行为，包含如下子项。
   *          docDirs: 配置 Markdown 文档的解析目录，路径下的 Markdown 文档会根据目录结构解析为路由。
   *          atomDirs: 该目录下 第一层级 的 Markdown 文档会被解析为该实体分类下的路由，嵌套层级将不会识别。比如在默认配置下，src/Foo/index.md 将被解析为 components/foo 的路由
   *          codeBlockMode:
   *               类型：'active'(默认-会解析相关代码为组件) | 'passive'(显示代码为文本)
   */
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
  base: repo,
  publicPath: repo,
  outputPath: "home",
  extraBabelPresets: ['@emotion/babel-preset-css-prop'],
});
