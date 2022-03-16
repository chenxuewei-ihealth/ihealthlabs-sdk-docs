/* eslint-disable */
const {
  tailwindPlugin,
  webpackPlugin,
  posthogPlugin,
} = require('./src/plugins');

const isDev = process.env.NODE_ENV === 'development';

const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main',
  showLastUpdateAuthor: false,
  showLastUpdateTime: false,
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'iHealth SDK Docs',
  url: 'https://chenxuewei-ihealth.github.io/',
  baseUrl: '/ihealthlabs-sdk-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iHealthlabs', 
  projectName: 'iHealth SDK docs',
  clientModules: [require.resolve('./src/css/tailwind.css')],
  themeConfig: {
    image: '/logo.svg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'iHealthlabs SDK Docs',
        src: '/logo.svg',
      },
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: [
        'dart',
        'ruby',
        'groovy',
        'kotlin',
        'java',
        'swift',
        'objectivec',
      ],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    posthog: {
      apiKey: process.env.POSTHOG_API_KEY,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/main',
          routeBasePath: '/docs',
          id: 'ihealthlabs-sdk-docs',
          sidebarPath: require.resolve('./sidebars/sidebars-docs.js'),
          sidebarCollapsible: false,
        },
        blog: false,
      },
    ],
  ],
  plugins: [
    tailwindPlugin,
    webpackPlugin,
    posthogPlugin,
    ['@cmfcmf/docusaurus-search-local',
      ({
        indexDocs: true,
        indexDocSidebarParentCategories: 0,

        indexPages: false,
        language: "en",
        style: undefined,
        lunr: {
          tokenizerSeparator: /[\s\-]+/
        }
      })
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/react-native',
        routeBasePath: 'react-native',
        id: 'react-native',
        sidebarPath: require.resolve('./sidebars/sidebars-react-native.js'),
        onlyIncludeVersions: !isDev
          ? require('./react-native_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/android',
        routeBasePath: 'android',
        id: 'android',
        sidebarPath: require.resolve('./sidebars/sidebars-android.js'),
        onlyIncludeVersions: !isDev
          ? require('./android_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/ios',
        routeBasePath: 'ios',
        id: 'ios',
        sidebarPath: require.resolve('./sidebars/sidebars-ios.js'),
        onlyIncludeVersions: !isDev
          ? require('./ios_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
  ],
};
