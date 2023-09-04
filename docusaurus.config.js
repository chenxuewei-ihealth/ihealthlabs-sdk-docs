const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { tailwindPlugin } = require('./src/plugin');

const isDev = process.env.NODE_ENV === 'development';

const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main',
  showLastUpdateAuthor: false,
  showLastUpdateTime: false,
};

const config = {
  title: 'iHealth SDK Docs',
  url: 'https://chenxuewei-ihealth.github.io/',
  baseUrl: '/ihealthlabs-sdk-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    ({
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'iHealthlabs SDK Docs',
          src: '/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'home/intro',
            position: 'left',
            label: 'API Reference',
          },
          // {
          //   type: 'html',
          //   position: 'left',
          //   value: '<img width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA4BJREFUaEPtmY+RjEEQxd9FgAgQASJABIgAESACRIAIuAgQASJABIgAEVC/qhk1O9PT09/s7Kmr2q7aut39dnr69Z/XPXMnOudycs7t1xHA/47gyghcl3RT0i1JVyTxuZQvkn5J+phen1aA3xfARUmPJD1IRm+x6bukd5JeSeL9lMwCwPCnkh5P7doueiPpSYrQJpUzAO5Kei0JECuF9AIEYMKyFcCLhV7vGQmAh1EEWwDgdXL9LIRCvxdJqSiAszQ+OwgQt0feigB4lgp2pOsQz4fpNAIAp38wLDtNxcZz0urypPW/kx7oFHKAkmuhHrqF7QGAZT53+J3QEuIsgHgp6UL64quRv+i7lp5jOJFlTRaa3zcDAOx0tVcPHgAvdax1GEj3LYFZgSFquSvXz/90IknETQLpAcAYvNHj+lHqTWaUegDQRxSajt0zhA4L5/fkUoTiJlB4ABg5ms7fA0Du18NYaU9dAxO2NkvYj317gveJwo5YAHrFlBe+T4yxwuhaB0VtMVH+XeM4CwDFQuPqiZmLi9BQc3g6s1mt9nlir3/fWwA8LxzS+9koOP9+xyHN/hYAaJCDiSWNBxZ5vlRDQ3vb0Qv93iifbQXAgEXXPKT0un/ec8dmCwD8TyFb4rb1Raj2BkCYcssfFtEio6MpxO+GEfBqwGwmi0F4I8yPOju21kBTRIuNRx01dqejl5sMUmyaRll46D7w03FKiEY9GkN3dzJcEI3R4YlDfzmCm1eLdEPPC9h5qFmIw5N320EPII3dFOKhV8g855BBTxjN/tGgkNc0L8/4poAbSip2q+chFmN0Ta+0fbrz7M0a/YYLsshtR5M+HoDs5TxUwQx4HA/xvh41CCvR4C+FBlhLWA/DMDrjdW9kL9dzBAVso9c7WdWHGozL1xwYazU7zsIjo0bpaQHvzmCjo2HdlTMD5bNvPfZGRo0Ry9UASF/2M6M6AmCdknIf4Bm0Ryrka3M+R+rBOzrWAFzGGwFAWV3QuR6iDGP9LgrALNwIjdab1occPqN8ViIAQg0zEoFsZA2CVOG73FhgCTaNyAhAyPgRjVqGjM7LUYd4AIZpM5NC5RqKlwZm0eg+AGAbHLSpu0c3tKJBn+BVXuxG9ZURoEmRijDYZolu6CnGa3kU2JnVnUV4ma6M4Zv+pVTrXAFgs9dWLjgCWOnNGV3HCMx4beWav4uArjFD7/JYAAAAAElFTkSuQmCC"/>'
          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   position: 'right',
          //   className: 'header-github-link',
          //   'aria-label': 'GitHub repository',
          //   value: '<img width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA4BJREFUaEPtmY+RjEEQxd9FgAgQASJABIgAESACRIAIuAgQASJABIgAEVC/qhk1O9PT09/s7Kmr2q7aut39dnr69Z/XPXMnOudycs7t1xHA/47gyghcl3RT0i1JVyTxuZQvkn5J+phen1aA3xfARUmPJD1IRm+x6bukd5JeSeL9lMwCwPCnkh5P7doueiPpSYrQJpUzAO5Kei0JECuF9AIEYMKyFcCLhV7vGQmAh1EEWwDgdXL9LIRCvxdJqSiAszQ+OwgQt0feigB4lgp2pOsQz4fpNAIAp38wLDtNxcZz0urypPW/kx7oFHKAkmuhHrqF7QGAZT53+J3QEuIsgHgp6UL64quRv+i7lp5jOJFlTRaa3zcDAOx0tVcPHgAvdax1GEj3LYFZgSFquSvXz/90IknETQLpAcAYvNHj+lHqTWaUegDQRxSajt0zhA4L5/fkUoTiJlB4ABg5ms7fA0Du18NYaU9dAxO2NkvYj317gveJwo5YAHrFlBe+T4yxwuhaB0VtMVH+XeM4CwDFQuPqiZmLi9BQc3g6s1mt9nlir3/fWwA8LxzS+9koOP9+xyHN/hYAaJCDiSWNBxZ5vlRDQ3vb0Qv93iifbQXAgEXXPKT0un/ec8dmCwD8TyFb4rb1Raj2BkCYcssfFtEio6MpxO+GEfBqwGwmi0F4I8yPOju21kBTRIuNRx01dqejl5sMUmyaRll46D7w03FKiEY9GkN3dzJcEI3R4YlDfzmCm1eLdEPPC9h5qFmIw5N320EPII3dFOKhV8g855BBTxjN/tGgkNc0L8/4poAbSip2q+chFmN0Ta+0fbrz7M0a/YYLsshtR5M+HoDs5TxUwQx4HA/xvh41CCvR4C+FBlhLWA/DMDrjdW9kL9dzBAVso9c7WdWHGozL1xwYazU7zsIjo0bpaQHvzmCjo2HdlTMD5bNvPfZGRo0Ry9UASF/2M6M6AmCdknIf4Bm0Ryrka3M+R+rBOzrWAFzGGwFAWV3QuR6iDGP9LgrALNwIjdab1occPqN8ViIAQg0zEoFsZA2CVOG73FhgCTaNyAhAyPgRjVqGjM7LUYd4AIZpM5NC5RqKlwZm0eg+AGAbHLSpu0c3tKJBn+BVXuxG9ZURoEmRijDYZolu6CnGa3kU2JnVnUV4ma6M4Zv+pVTrXAFgs9dWLjgCWOnNGV3HCMx4beWav4uArjFD7/JYAAAAAElFTkSuQmCC"/>'
          // }
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © iHealthlabs since ${new Date().getFullYear()}. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      tailwindPlugin,
      [require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          language: ["en"],
        },
      ],
    ]
};

module.exports = config;
