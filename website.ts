export function websiteHome() {
  const origin = new URL(process.env.NUMERAIRE_WEBSITE_ORIGIN || 'https://numeraire.tech').origin;
  return process.env.DOCUSAURUS_CURRENT_LOCALE === 'fr' ? origin + '/fr' : origin;
}
