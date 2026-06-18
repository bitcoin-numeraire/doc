import OriginalDocItem from '@theme-original/DocItem';
import Head from '@docusaurus/Head';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- swizzled wrapper around the loosely-typed original DocItem
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
