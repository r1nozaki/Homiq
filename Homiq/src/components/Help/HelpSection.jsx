import HelpContent from './HelpContent';
import { Link } from 'react-router-dom';
const HelpSection = () => {
  return (
    <section className='min-h-screen w-full py-16 px-6 text-center'>
      <h1 className='text-4xl font-extrabold text-green-500 mb-8'>Help & FAQ</h1>
      <p className='max-w-4xl mx-auto text-xl mb-12'>
        Welcome to the <span className='text-green-500 font-semibold'>HOMIQ</span> Help
        Center! Here, you'll find answers to frequently asked questions, step-by-step
        guides, and helpful tips to make the most of our service. Still need help? Feel
        free to contact our support team at any time.
      </p>
      <p className='text-green-500 text-3xl font-semibold mb-6'>
        Frequently Asked Questions
      </p>
      <div className='max-w-4xl text-left mx-auto space-y-8'>
        <HelpContent
          question='How do I create an account?'
          answer='Go to the registration page, enter your email address, create a password, and confirm it.'
        />
        <HelpContent
          question='Can I add a property to my favorites?'
          answer='Yes, click on the heart icon next to the ad and it will be added to your favorites list.'
        />
        <HelpContent
          question='How to search for real estate according to the desired parameters?'
          answer='Use the filters on the main page or search page: select the type of property (sale or rent), number of rooms, price, area, availability of repairs, etc.'
        />
        <HelpContent
          question='What is the difference between “for sale” and “for rent” ads?'
          answer='Advertisements for sale are marked accordingly and indicate the total cost of the property. Advertisements for rent show the monthly payment and rental conditions.'
        />
      </div>

      <p className='text-green-500 text-3xl font-semibold mt-16 mb-6'>
        Need Further Assistance?
      </p>
      <div>
        <p className='max-w-3xl mx-auto text-xl mb-6'>
          If you can't find the answer to your question here or need additional help, feel
          free to reach out to our customer support team. We're here to assist you!
        </p>
        <Link
          to='/contact'
          className='inline-block py-2 px-6 bg-green-400 text-white font-bold rounded-lg hover:bg-green-500 transition duration-300'
        >
          Contact Support
        </Link>
      </div>

      <p className='text-green-500 text-3xl font-semibold mt-16 mb-6'>Stay Updated</p>
      <div>
        <p className='max-w-3xl mx-auto text-xl mb-6'>
          For the latest updates, tips, and news about our services, follow us on social
          media or subscribe to our newsletter.
        </p>
        <div className='flex justify-center gap-8'>
          <a
            href='https://web.telegram.org/k/#@r1nozakio'
            className='text-green-400 hover:underline hover:text-green-500'
            target='blank'
          >
            Telegram
          </a>
          <a
            href='https://x.com/r1nozaki'
            className='text-green-400 hover:underline hover:text-green-500'
            target='blank'
          >
            X (Twitter)
          </a>
          <a
            href='https://www.instagram.com/_r1nozaki/?hl=ru'
            className='text-green-400 hover:underline hover:text-green-500'
            target='blank'
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
