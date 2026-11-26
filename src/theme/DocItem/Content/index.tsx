import type { Props } from '@theme/DocItem/Content';
import Content from '@theme-original/DocItem/Content';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function DocItemContent(props: Props) {
  const { metadata } = useDoc();
  const { i18n } = useDocusaurusContext();
  if (i18n.currentLocale === 'fr' && metadata.source.startsWith('@site/docs/')) {
    return (
      <>
        <p>Ce guide est disponible en anglais.</p>
        <div lang="en">
          <Content {...props} />
        </div>
      </>
    );
  }
  return <Content {...props} />;
}
