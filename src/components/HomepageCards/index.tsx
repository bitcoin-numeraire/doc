import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function HomepageCards() {
  const { siteConfig } = useDocusaurusContext();
  const guides = [
    {
      title: 'Numeraire Account',
      href: '/account',
      description: translate({
        id: 'home.account',
        message: 'Create an account, receive a Lightning payment and manage your wallets in the hosted dashboard.',
      }),
    },
    {
      title: 'SwissKnife',
      href: '/swissknife',
      description: translate({
        id: 'home.swissknife',
        message: 'Deploy SwissKnife, connect your Bitcoin and Lightning node, and configure accounts for your users.',
      }),
    },
    {
      title: translate({ id: 'home.developersTitle', message: 'Developers' }),
      href: '/developers',
      description: translate({
        id: 'home.developers',
        message: 'Create a scoped API key and use the REST API to integrate payments into your application.',
      }),
    },
  ];

  return (
    <section className={styles.guides} aria-label={translate({ id: 'home.guides', message: 'Product guides' })}>
      <ul className={styles.grid}>
        {guides.map(({ title, href, description }) => (
          <li key={href}>
            <Link to={href} className={styles.card}>
              <h2>
                {title} <span aria-hidden="true">↗</span>
              </h2>
              <p>{description}</p>
            </Link>
          </li>
        ))}
      </ul>
      <a className={styles.support} href={`${siteConfig.customFields.website}/contact`}>
        <Translate id="home.support">Contact Numeraire support</Translate> <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
