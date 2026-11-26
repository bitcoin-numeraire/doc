import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const guides = [
  {
    title: 'Numeraire Account',
    href: '/account',
    description: 'Create an account, receive a Lightning payment and manage your wallets in the hosted dashboard.',
  },
  {
    title: 'SwissKnife',
    href: '/swissknife',
    description: 'Deploy SwissKnife, connect your Bitcoin and Lightning node, and configure accounts for your users.',
  },
  {
    title: 'Developers',
    href: '/developers',
    description: 'Create a scoped API key and use the REST API to integrate payments into your application.',
  },
];

export default function HomepageCards() {
  return (
    <section className={styles.guides} aria-label="Product guides">
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
      <a className={styles.support} href="https://numeraire.tech/contact">
        Contact Numeraire support <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
