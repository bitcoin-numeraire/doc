import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageCards from '@site/src/components/HomepageCards';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Documentation" description="Use Numeraire Account, run SwissKnife or integrate Bitcoin payments into an application.">
      <main>
        <header className={styles.intro}>
          <div className={styles.copy}>
            <h1>Numeraire documentation</h1>
            <p>Use your Bitcoin wallet, run a SwissKnife instance or connect an application to the payments API.</p>
            <Link className={styles.introduction} to="/introduction">
              About Numeraire <span aria-hidden="true">→</span>
            </Link>
          </div>
          <img className={styles.landscape} src="/img/alpine-infrastructure.webp" alt="" width="1983" height="793" />
        </header>
        <HomepageCards />
      </main>
    </Layout>
  );
}
