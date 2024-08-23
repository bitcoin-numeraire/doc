import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import UserIcon from '../../../static/img/icon_group.svg';
import CodeIcon from '../../../static/img/icon_code.svg';
import SupportIcon from '../../../static/img/icon_support.svg';
import RocketIcon from '../../../static/img/icon_rocket.svg';

type CardItem = {
  title: string;
  link: string;
  description: JSX.Element;
  buttonName: string;
  buttonType: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const CardList: CardItem[] = [
  {
    title: 'Account',
    link: '/account/quickstart',
    description: (
      <>
        Learn all the different features of your Numeraire Account. Receive and send Bitcoin, create a LN Address, receive Zaps on Nostr and
        more.
      </>
    ),
    buttonName: 'Account',
    buttonType: 'primary',
    icon: UserIcon,
  },
  {
    title: 'SwissKnife',
    link: '/swissknife/quickstart',
    description: (
      <>
        Deploy your own self-custodial Bitcoin infrastructure. Create your own <b>username@mydomain.com</b> LN addresses, deploy smart
        contracts and more.
      </>
    ),
    buttonName: 'SwissKnife',
    buttonType: 'primary',
    icon: RocketIcon,
  },
  {
    title: 'Developers',
    link: '/developers/quickstart',
    description: (
      <>
        Integrate Bitcoin and Lightning into your own app with the <b>Numeraire API</b> through API keys and webhooks.
      </>
    ),
    buttonName: 'Developers',
    buttonType: 'primary',
    icon: CodeIcon,
  },
  {
    title: 'Contact Us',
    link: 'https://numeraire.tech/contact',
    description: <>Do you have any questions or need help? Contact us and we will get back to you as soon as possible.</>,
    buttonName: 'Support',
    buttonType: 'primary',
    icon: SupportIcon,
  },
];

function Card({ title, link, description, buttonName, buttonType, icon: Icon }: CardItem) {
  return (
    <div className={clsx('col', 'col--3', 'margin-top--md')}>
      <div className={clsx('card-demo', styles.cardDemo)}>
        <div className={clsx('card', styles.card_glow)}>
          <div className={clsx('card__header', styles.cardHeader)}>
            <div className={styles.cardIcon}>
              <Icon />
            </div>
            <div className={styles.cardTitle}>
              <h3>{title}</h3>
            </div>
          </div>
          <div className={clsx('card__body', styles.cardBody)}>
            <p className={styles.description}>{description}</p>
          </div>
          <div
            className="card__footer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              paddingBottom: '30px',
            }}
          >
            <Link className={clsx('button', `button--${buttonType}`, 'button--block', styles.button)} to={link} style={{ width: '90%' }}>
              {buttonName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageCards(): JSX.Element {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setEqualHeight = () => {
      const row = rowRef.current;
      if (!row) return;

      const cards = Array.from(row.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>);
      cards.forEach((card) => {
        card.style.height = 'auto';
      });

      const cardHeights = cards.map((card) => card.offsetHeight);
      const maxHeight = Math.max(...cardHeights);

      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    setEqualHeight();
    window.addEventListener('resize', setEqualHeight);

    return () => {
      window.removeEventListener('resize', setEqualHeight);
    };
  }, []);

  return (
    <section className={clsx('margin-top--lg', 'margin-bottom--lg')}>
      <div className={styles.cardContainer}>
        <div className="row" ref={rowRef} style={{ paddingBottom: '3rem' }}>
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
