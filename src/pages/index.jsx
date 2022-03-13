import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <>
      <Head>
        <meta title="iHealthlabs SDK" />
      </Head>
      <Redirect to="/docs/home/introduction" />
    </>
  );
}
