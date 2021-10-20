import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Measurement',
    Svg: require('../../static/img/doc_index_1.svg').default,
    description: (
      <>
        iHealth SDK was designed for connecting iHealth devices easily and use it quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/doc_index_2.svg').default,
    description: (
      <>
        iHealth SDK lets you focus on your app, and don&apos;t to know the device low-level interaction. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Support Multi-platform',
    Svg: require('../../static/img/doc_index_3.svg').default,
    description: (
      <>
        iHealth SDK support multi-platform Android iOS and React Native.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
