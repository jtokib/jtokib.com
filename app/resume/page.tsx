import type { Metadata } from 'next';
import Link from 'next/link';
import { ResumeView } from './components/ResumeView';
import { createResumeData } from './lib/resume-factory';

export const metadata: Metadata = {
  title: 'J. Toki Burke - Resume | Associate VP, Marketing Technology',
  description: 'Professional resume of J. Toki Burke, Associate VP of Marketing Technology with 7+ years building enterprise MarTech infrastructure across global markets.',
  openGraph: {
    title: 'J. Toki Burke - Resume | Associate VP, Marketing Technology',
    description: 'Professional resume of J. Toki Burke, Associate VP of Marketing Technology with 7+ years building enterprise MarTech infrastructure across global markets.',
    url: 'https://jtokib.com/resume',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'J. Toki Burke - Resume | Associate VP, Marketing Technology',
    description: 'Professional resume of J. Toki Burke, Associate VP of Marketing Technology with 7+ years building enterprise MarTech infrastructure across global markets.',
  },
};

export default function ResumePage() {
  const resumeData = createResumeData();
  
  return (
    <>     
      <ResumeView data={resumeData} />
      
      <footer className="resume-footer no-print">
        <p>
          Visit <Link href="/">jtokib.com</Link> to see my portfolio and other projects.
        </p>
      </footer>
    </>
  );
}