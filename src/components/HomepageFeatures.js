import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/start.svg').default,
    description: (
      <>
        Our toolkit is designed in such a way that it is easy to enable you to build a multilingual, voice enabled, conversational without writing a line of code!
      </>
    ),
  },
  {
    title: 'Easy to Launch',
    Svg: require('../../static/img/launch.svg').default,
    description: (
      <>
      The Botlhale NLP Toolkit makes it easy for you to build, test, and deploy your chatbot(s) onto platforms like WhatsApp, Facebook and Telegram with just one <code>click.</code>
      </>
    ),
  },
  {
    title: 'Easy to gather Business Insights',
    Svg: require('../../static/img/analytics.svg').default,
    description: (
      <>
       Through AI, your chatbots will learn and improve as your end-users make use of them. The more usage, the better the learning, and thus the performance. Our platform provides you with the analytics and reports on both your chatbot and your human agent(s) enabling you to gather insights that not only improve CSAT but also generally improves your business. All this with just one click.
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
