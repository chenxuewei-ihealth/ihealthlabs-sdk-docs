const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Docs',
  tagline: '',
  url: 'https://github.com/chenxuewei-ihealth/doc.sdk.ihealthlabs.com',
  baseUrl: '/doc.sdk.ihealthlabs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ihealthlabs', 
  projectName: 'doc.sdk.ihealthlabs', 

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
        title: 'iHealthlabs',
        logo: {
          alt: 'iHealthlabs',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownActiveClassDisabled: true,
          //   dropdownItemsAfter: [
          //     {
          //       to: '/versions',
          //       label: 'All versions',
          //     },
          //   ],
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/chenxuewei-ihealth/doc.sdk.ihealthlabs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iHealthlabs SDK Docs, Inc. Built with iHealthlabs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  
  plugins: [
    ['@cmfcmf/docusaurus-search-local',
      ({
        indexDocs: true,
        docsRouteBasePath: '/docs',
        indexDocSidebarParentCategories: 0,
        indexBlog: true,
        blogRouteBasePath: '/blog',
        indexPages: false,
        language: "en",
        style: undefined,
        lunr: {
          tokenizerSeparator: /[\s\-]+/
        }
      })
    ]
  ]
});
