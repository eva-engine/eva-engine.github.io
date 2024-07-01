// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eva.js',
  tagline: 'A front-end game engine specifically for creating interactive game projects.',
  url: 'https://eva.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eva-engine', // Usually your GitHub org/user name.
  projectName: 'eva-engine.github.io', // Usually your repo name.
  githubHost: 'github.com',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/eva-engine/eva-engine.github.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/eva-engine/eva-engine.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Eva.js',
        logo: {
          alt: 'Eva.js Logo',
          src: 'https://gw.alicdn.com/imgextra/i4/O1CN0103RrpF21uCc8IE2ko_!!6000000007044-55-tps-525-284.svg',
          srcDark: 'https://gw.alicdn.com/imgextra/i1/O1CN01MQ8kjm1uYwvRaJUHQ_!!6000000006050-2-tps-525-284.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorials/quickstart',
            position: 'left',
            label: 'Tutorial',
          },
          {
            "type": "doc",
            "docId": "api/index",
            "position": "left",
            "label": "API"
          },
          { href: 'https://eva.js.org/playground', label: 'Demos', position: 'left' },
          { href: 'https://www.yuque.com/eva/blog', label: 'Blog', position: 'left' },
          { href: 'https://github.com/eva-engine/eva.js/issues/140', label: 'Q&A', position: 'left' },
          {
            href: 'https://github.com/eva-engine/eva.js',
            label: 'GitHub',
            position: 'right',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // }
          {
            label: 'English',
            type: 'dropdown',
            position: 'right',
            items: [{
              label: 'English',
              href: 'https://eva.js.org/'
            }, {
              label: '中文（中国）',
              href: '/zh-cn/'
            }]
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/tutorials/quickstart',
          //     },{
          //       label: 'Q&A',
          //       href: 'https://github.com/eva-engine/eva.js/issues/140',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: 'https://www.yuque.com/eva/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/eva-engine/eva.js',
          //     },
          //   ],
          // },
        ],
        copyright: `Eva.js 2019 - NOW  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  MIT License`,
      },
      prism: {
        theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: 'BH4D9OD16A',

        // Public API key: it is safe to commit it
        apiKey: '466fd9c0f3cf00063b2edc559f8a8422',

        indexName: 'evajs',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'eva.js.org',

        // Optional: Algolia search parameters
        // searchParameters: {},

        //... other Algolia params
      },
    }),
};

module.exports = config;
