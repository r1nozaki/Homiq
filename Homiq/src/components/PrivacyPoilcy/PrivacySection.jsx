import PrivacyContent from './PrivacyContent';
import { Link } from 'react-router-dom';

const PrivacySection = () => {
  return (
    <section className='min-h-screen  w-full py-16 px-6 text-center'>
      <h1 className='text-4xl font-extrabold text-green-500 mb-8'>Privacy & Policy</h1>
      <p className='max-w-4xl mx-auto text-xl mb-12'>
        Welcome to HOMIQ. We are committed to protecting your privacy and ensuring that
        your personal information is handled in a safe and responsible manner. This
        Privacy Policy outlines how we collect, use, store, and protect your information
        when you use our website.
      </p>
      <div className='max-w-4xl text-left mx-auto mb-16 '>
        <PrivacyContent
          title='1. Information We Collect'
          subtitle='We may collect the following types of information:'
          content={[
            'Personal Information: name, email address, phone number, etc. (only if you provide it voluntarily, e.g., during registration or contact form submission)',
            'Usage Data: pages visited, time spent on pages, and other anonymous usage statistics',
            'Cookies and Tracking: to improve user experience and provide personalized content',
          ]}
        />
        <PrivacyContent
          title='2. How We Use Your Information'
          subtitle='We use your data for:'
          content={[
            'Providing and improving our services',
            'Responding to your inquiries or support requests',
            'Sending updates, newsletters, or promotional materials (if you subscribed)',
            'Analyzing website traffic and performance.',
          ]}
        />
        <PrivacyContent
          title='3. Sharing of Information'
          subtitle='We do not sell or rent your personal information. We may share data with:'
          content={[
            'Service providers (e.g., analytics tools, map providers) to help us operate our site',
            'Law enforcement or regulatory agencies if required by law.',
          ]}
        />
        <PrivacyContent
          title='4. Cookies'
          content='Our website uses cookies to enhance user experience. You can choose to disable cookies via your browser settings, but some parts of the site may not function properly.'
        />
        <PrivacyContent
          title='5. Data Security'
          content='We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.'
        />
        <PrivacyContent
          title='6. Your Rights'
          subtitle='You have the right to:'
          content={[
            'Access and review your personal data',
            'Request correction or deletion of your data',
            'Withdraw consent (where processing is based on consent)',
            'Lodge a complaint with a data protection authority if you believe your rights have been violated',
          ]}
        />
        <PrivacyContent
          title='7. Third-Party Services'
          content='We may use third-party services (e.g., Google Maps, Firebase, analytics) which may collect data according to their own privacy policies. Please refer to their respective privacy statements.'
        />
        <PrivacyContent
          title='8. Children’s Privacy'
          content='Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children.'
        />
        <PrivacyContent
          title='9. Changes to This Policy'
          content='We may update this Privacy Policy from time to time. All changes will be posted on this page with an updated "Last Updated" date.'
        />
        <PrivacyContent
          title='10. Information We Collect'
          subtitle='If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:'
          content={
            <Link
              to='/contact'
              className='text-green-400 underline hover:text-green-500 text-lg -mt-29'
            >
              Contact us
            </Link>
          }
        />
      </div>
      <div className='text-lg'>Last Update: July 2025</div>
    </section>
  );
};

export default PrivacySection;
