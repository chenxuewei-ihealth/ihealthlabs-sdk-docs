import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.css';

import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  console.log(siteConfig)
  return (
    <>
      <Head>
        <meta title="iHealthlabs SDK" />
      </Head>
      <Redirect to="/ihealthlabs-sdk-docs/docs/home/intro" />
    </>
  );
}
