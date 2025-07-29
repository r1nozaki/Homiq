import { Link } from 'react-router-dom';
import ScrollToTopBtn from '../ScrollToTopBtn';
import TermsContent from './TermsContent';

const TermsSection = () => {
  return (
    <section className='min-h-screen  w-full py-16 px-6 text-center'>
      <h1 className='text-4xl font-extrabold text-green-500 mb-8'>Terms & Conditions</h1>
      <p className='max-w-4xl mx-auto text-xl mb-12'>
        Welcome to <span className='text-green-500 font-semibold'>HOMIQ</span>! These
        Terms & Conditions ("Terms") govern your access to and use of our website and
        services. By using HOMIQ, you agree to comply with and be bound by these Terms. If
        you do not agree with any part of these Terms, please do not use our website.
      </p>
      <div className='max-w-4xl text-left mx-auto mb-16'>
        <TermsContent
          title='1. Use of the Website'
          subtitle='You may use HOMIQ only for lawful purposes and in accordance with these Terms. You agree not to:'
          content={[
            'Use the site in any way that violates applicable laws or regulations',
            'Post false, misleading, or fraudulent content',
            'Attempt to gain unauthorized access to our systems or other users’ data',
            'Interfere with the site’s security or operation',
          ]}
        />
        <TermsContent
          title='1. Use of the Website'
          subtitle='You may use HOMIQ only for lawful purposes and in accordance with these Terms. You agree not to:'
          content={[
            'Use the site in any way that violates applicable laws or regulations',
            'Post false, misleading, or fraudulent content',
            'Attempt to gain unauthorized access to our systems or other users’ data',
            'Interfere with the site’s security or operation',
          ]}
        />
        <TermsContent
          title='2. User Accounts'
          subtitle='To access certain features, you may need to create an account. You are responsible for:'
          content={[
            'Providing accurate and complete information',
            'Keeping your login credentials confidential',
            'Not sharing your account with others',
          ]}
        />
        <TermsContent
          title='3. Listings and Content'
          content='All listings and content (e.g., images, descriptions) are the responsibility of the user who submitted them. HOMIQ is not responsible for the accuracy, legality, or completeness of any user-submitted content. We reserve the right to edit, remove, or refuse content that violates our policies or applicable laws.'
        />
        <TermsContent
          title='4. Intellectual Property'
          content='All website content, design, logos, and trademarks are the property of HOMIQ or its licensors and are protected by intellectual property laws. You may not copy, reproduce, or distribute any part of the site without our written permission.'
        />
        <TermsContent
          title='5. Third-Party Services'
          content='Our website may include integrations with third-party services (e.g., maps, analytics, Firebase). We are not responsible for the content or practices of these services. Please refer to their own Terms & Privacy Policies.'
        />
        <TermsContent
          title='6. Limitation of Liability'
          subtitle='HOMIQ is provided "as is" and "as available." We do not guarantee uninterrupted or error-free service. We are not liable for:'
          content={[
            'Any damages or losses resulting from your use of the website',
            'Any content posted by users or third parties',
          ]}
        />
        <TermsContent
          title='7. Termination'
          content='We may suspend or terminate your access to HOMIQ at any time without notice if you violate these Terms or use the platform in a harmful or illegal way.'
        />
        <TermsContent
          title='8. Changes to These Terms'
          content='We may update these Terms occasionally. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the site after changes constitutes acceptance of the new Terms.'
        />
        <TermsContent
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
      <ScrollToTopBtn />
    </section>
  );
};

export default TermsSection;
