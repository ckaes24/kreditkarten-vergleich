import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import { seoPages } from '../../data/seoPages';

const pageData = seoPages['kreditkarte-thailand-abheben-kostenlos'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}