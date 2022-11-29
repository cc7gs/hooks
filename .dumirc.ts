import { defineConfig } from 'dumi';
import { menus } from './config/hooks';

const packages = require('./packages/hooks/package.json');

export default defineConfig({
  // ssr: {},
  ssr: process.env.NODE_ENV === 'production' ? {} : false,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  favicons: ['/simple-logo.svg'],
  themeConfig: {
    name: 'ahooks 3.0',
    logo: '/logo.svg',
    nav: [
      { title: 'Guide', path: '/guide' },
      { title: 'Hooks', path: '/hooks' },
      {
        title: 'Legacy Versions',
        children: [
          {
            title: 'v2.x',
            path: 'https://ahooks-v2.js.org/',
          },
          {
            title: 'v1.x',
            path: 'http://hooks.umijs.org/',
          },
        ],
      },
      { title: 'Releases', path: 'https://github.com/alibaba/hooks/releases' },
      { title: '国内镜像', path: 'https://ahooks.gitee.io/zh-CN' },
      { title: 'GitHub', path: 'https://github.com/alibaba/hooks' },
    ],
    sideBar: {
      '/': [
        {
          title: 'Home',
          path: 'index',
        },
      ],
      '/zh-CN': [
        {
          title: '首页',
          path: 'index',
        },
      ],
      '/guide': [
        {
          title: 'Intro',
          path: '/guide',
        },
        {
          title: 'v2 to v3',
          path: '/guide/upgrade',
        },
        {
          title: 'Hooks of dom specification',
          path: '/guide/dom',
        },
        {
          title: 'Blog',
          children: [
            {
              title: 'ahooks function specification',
              path: '/guide/blog/function',
            },
            {
              title: 'React Hooks & SSR',
              path: '/guide/blog/ssr',
            },
            {
              title: 'React Hooks & react-refresh（HMR）',
              path: '/guide/blog/hmr',
            },
            {
              title: 'React Hooks & strict mode',
              path: '/guide/blog/strict',
            },
          ],
        },
      ],
      '/zh-CN/guide': [
        {
          title: '介绍',
          path: '/guide',
        },
        {
          title: 'v2 to v3',
          path: '/guide/upgrade',
        },
        {
          title: 'DOM 类 Hooks 使用规范',
          path: '/guide/dom',
        },
        {
          title: 'Blog',
          children: [
            {
              title: 'ahooks 输入输出函数处理规范',
              path: '/zh-CN/guide/blog/function',
            },
            {
              title: 'React Hooks & SSR',
              path: '/zh-CN/guide/blog/ssr',
            },
            {
              title: 'React Hooks & react-refresh（HMR）',
              path: '/zh-CN/guide/blog/hmr',
            },
            {
              title: 'React Hooks & strict mode',
              path: '/zh-CN/guide/blog/strict',
            },
          ],
        },
      ],
      '/hooks': menus,
      '/zh-CN/hooks': menus,
    },
    footer:
      'Open-source MIT Licensed | Copyright © 2019-present<br />Powered by [dumi](https://d.umijs.org)',
  },
  mfsu: false,
  manifest: {},
  hash: true,
  alias: {
    ahooks: process.cwd() + '/packages/hooks/src/index.ts',
    '@ahooksjs/use-url-state': process.cwd() + '/packages/use-url-state/src/index.ts',
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'hooks', dir: 'packages/hooks/src' },
      { type: 'hooks', dir: 'packages/use-url-state' },
    ],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  scripts: [
    'https://s4.cnzz.com/z_stat.php?id=1278992092&web_id=1278992092',
    `
  const insertVersion = function(){
    const dom = document.createElement('span');
    dom.id = 'logo-version';
    dom.innerHTML = '${packages.version}';
    const logo = document.querySelector('.__dumi-default-navbar-logo');
    if(logo){
      logo.parentNode.insertBefore(dom, logo.nextSibling);
    }else{
      setTimeout(()=>{
        insertVersion();
      }, 1000)
    }
  }
  insertVersion();
  `,
  ],
});
