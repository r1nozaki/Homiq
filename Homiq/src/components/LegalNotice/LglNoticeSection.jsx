import LglNoticeContnent from './LglNoticeContnent';

const LglNoticeSection = () => {
  return (
    <section className='w-full min-h-screen py-16 px-6 text-center'>
      <h1 className='text-4xl font-extrabold text-green-500 mb-8'>Legal Notice</h1>
      <div className='max-w-4xl text-left mx-auto mb-16'>
        <LglNoticeContnent
          title='Site Owner'
          content={[
            'HOMIQ',
            'Registerd Office: 22 Khreshchatyk Street, Kyiv, Ukraine',
            'Email: support@homiq.com',
            'Telephone: +380 67 123 45 89',
          ]}
        />
        <LglNoticeContnent
          title='Copyrignt'
          content='All content on this website, Including text, logos, images, and design, is the property HOMIQ or its content suppliers. Unauthorized use or reproduction of any content is prohobitied'
        />
        <LglNoticeContnent
          title='Limitation of Liability'
          content="HOMIQ is not liable for any inaccuracies or omissions in the content on this site. The information provided is for general informational purposes only, and we make no guarantees regarding the site's avallibility or error-free operation"
        />
        <LglNoticeContnent
          title='External Links'
          content='Our website may contain links to external websites. We do not have control over the content of these sites and accept no responsibility for them'
        />
        <LglNoticeContnent
          title='Governing Law'
          content='These terms are governed by the laws of Ukraine, Any disputes arising in connection with this notice are subject to the exclusive jurisdiction of the courts of Ukraine'
        />
      </div>
    </section>
  );
};

export default LglNoticeSection;
