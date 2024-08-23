import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageCards from '@site/src/components/HomepageCards';
import BoltIcon from '../../static/img/icon_bolt.svg';
import NumeraireLogo from '../../static/img/logo-dynamic.svg';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx(styles.introductionBlock)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.forceColor, styles.title)}>
          <NumeraireLogo className={styles.logo} style={{ color: 'inherit' }} />
          Docs
        </h1>
        <p className={clsx('hero__subtitle', styles.forceColor, styles.subtitle)}>
          Your self-custodial multi-account <b>Bitcoin</b> wallet integrating <b>Lightning</b> and <b>Nostr</b>.<br />
          As a user, discover all the features of your account. As a developer, easily integrate Bitcoin into your app with Numeraire
          SwissKnife.
        </p>
        <div className={styles.buttons}>
          <Link className={clsx('button button--secondary button--lg', styles.bannerButton)} to="introduction">
            Get Started
            <BoltIcon className={styles.icon} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <main style={{ backgroundColor: 'var(--banner-background)' }}>
        <HomepageCards />
      </main>
    </Layout>
  );
}
