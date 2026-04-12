import { Metadata } from 'next';
import SEOPageTemplate from '../../components/SEOPageTemplate';
import AutorenBox from '../../components/AutorenBox';
import { seoPages } from '../../data/seoPages';

const pageData = seoPages['kreditkarte-mit-cashback-ausland'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
};



export default function Page() {
  return <>
    <SEOPageTemplate {...pageData} />
  </>;
}