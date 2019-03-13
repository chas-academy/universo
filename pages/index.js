import React from 'react';
import Head from 'next/head';

import withLayout from '../lib/withLayout';

function Index() {
  return (
    <div style={{ padding: '10px 45px' }}>
      <Head>
        <title>Start</title>
        <meta name="description" content="stuff goes here" />
      </Head>
      <p>Content on index</p>
    </div>
  );
}

export default withLayout(Index);