import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageCards from '@site/src/components/HomepageCards';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Documentation"
      description={translate({
        id: 'home.description',
        message: 'Use Numeraire Account, run SwissKnife or integrate Bitcoin payments into an application.',
      })}
    >
      <main>
        <header className={styles.intro}>
          <div className={styles.copy}>
            <h1>
              <Translate id="home.heading">Numeraire documentation</Translate>
            </h1>
            <p>
              <Translate id="home.intro">
                Use your Bitcoin wallet, run a SwissKnife instance or connect an application to the payments API.
              </Translate>
            </p>
            <Link className={styles.introduction} to="/introduction">
              <Translate id="home.about">About Numeraire</Translate> <span aria-hidden="true">→</span>
            </Link>
          </div>
          <img className={styles.landscape} src={useBaseUrl('/img/alpine-infrastructure.webp')} alt="" width="1983" height="793" />
        </header>
        <HomepageCards />
      </main>
    </Layout>
  );
}
