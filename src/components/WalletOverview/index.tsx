import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function WalletOverview() {
  const { i18n } = useDocusaurusContext();
  const french = i18n.currentLocale === 'fr';
  const image = useBaseUrl('/img/article_images/account/wallet_overview') + (french ? '_fr' : '');

  return (
    <picture>
      <source media="(max-width: 700px)" srcSet={image + '_mobile.png'} width="390" height="844" />
      <img
        src={image + '.png'}
        width="1280"
        height="960"
        style={{ height: 'auto', maxWidth: '100%' }}
        loading="lazy"
        alt={
          french
            ? 'Portefeuille SwissKnife de démonstration avec le solde disponible, les commandes d’envoi et de réception ainsi que l’adresse Lightning.'
            : 'Example SwissKnife wallet showing the spendable balance, Send and Receive actions, and Lightning address.'
        }
      />
    </picture>
  );
}
