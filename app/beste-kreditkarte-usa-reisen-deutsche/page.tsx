import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import { seoPages } from '../../data/seoPages';

const pageData = seoPages['beste-kreditkarte-usa-reisen-deutsche'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function Page() {
  return <SEOPageTemplate {...pageData} />;
}