
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','1c9'),
    routes: [
      {
        path: '/docs/device/bp3l',
        component: ComponentCreator('/docs/device/bp3l','8af'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/device/bp5',
        component: ComponentCreator('/docs/device/bp5','d21'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/device/bp5s',
        component: ComponentCreator('/docs/device/bp5s','c14'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/device/bp7',
        component: ComponentCreator('/docs/device/bp7','ceb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/device/bp7s',
        component: ComponentCreator('/docs/device/bp7s','81e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/device/kn550',
        component: ComponentCreator('/docs/device/kn550','2d7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/get-started/android',
        component: ComponentCreator('/docs/get-started/android','072'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/get-started/ios',
        component: ComponentCreator('/docs/get-started/ios','2ba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
