import type { Metadata } from 'next';
import Link from 'next/link';
import { ResumeView } from './components/ResumeView';
import { createResumeData } from './lib/resume-factory';

export const metadata: Metadata = {
  title: 'J. Toki Burke - Resume | Marketing Technologist & AI Solutions',
  description: 'Professional resume of J. Toki Burke, Marketing Technologist specializing in AI solutions for small and medium businesses. Experience at Fisher Investments and technical projects.',
  openGraph: {
    title: 'J. Toki Burke - Resume | Marketing Technologist & AI Solutions',
    description: 'Professional resume of J. Toki Burke, Marketing Technologist specializing in AI solutions for small and medium businesses.',
    url: 'https://jtokib.com/resume',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'J. Toki Burke - Resume | Marketing Technologist & AI Solutions',
    description: 'Professional resume of J. Toki Burke, Marketing Technologist specializing in AI solutions for small and medium businesses.',
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