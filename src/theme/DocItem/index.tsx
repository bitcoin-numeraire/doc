import React from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import Head from '@docusaurus/Head';

function DocItem(props: any): JSX.Element {
  const { content: DocContent } = props;
  const { metadata } = DocContent;
  const { image } = metadata;

  const imageUrl = image ? `${image}` : undefined;

  return (
    <>
      <Head>{imageUrl && <meta property="og:image" content={imageUrl} />}</Head>
      <OriginalDocItem {...props} />
    </>
  );
}

export default DocItem;
