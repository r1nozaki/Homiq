import { useState } from 'react';
import ContactForm from './ContactForm';
import Notification from '../Notification';
import ErrorMessage from '../ErrorMessage';
import { Title, Meta } from 'react-head';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { bgContact } from '../../assets/backgrounds/bg';
const ContactUs = () => {
  const [notification, setNotification] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <Title>Contact us</Title>
      <Meta name='description' content='Page with Homiq contact' />
      <section
        className='min-h-screen w-full flex flex-col items-center py-5'
        style={{
          backgroundImage: `url(${bgContact})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <h1 className='text-white font-bold text-5xl text-center'>Get in Touch</h1>
          <p className='text-white text-lg w-130 mt-4'>
            We`d love to hear from you. Whether you have a question about properties,
            prices, or anything else - our team is ready to answer all your questions
          </p>
        </div>
        <div className='flex mt-6 gap-5'>
          <ContactForm setNotification={setNotification} setError={setError} />
          <div className='w-70 flex flex-col gap-3'>
            <div className='flex gap-5 text-white items-center text-lg'>
              <FaPhoneAlt className='text-green-400' size={20} /> +380 67 123 45 67
            </div>
            <div className='flex gap-5 text-white items-center text-lg'>
              <FaEnvelope className='text-green-400' size={20} /> contact@homiq.com
            </div>
            <div className='flex gap-5 text-white items-center text-lg'>
              <FaMapMarkerAlt className='text-green-400' size={20} /> Kyiv, Lviv, Dnipro -
              Ukraine
            </div>
          </div>
        </div>
        {notification && (
          <Notification notification={notification} text='Message sent successfully!' />
        )}
        {error && (
          <ErrorMessage
            error={error}
            text='An error occurred while sending the message!'
          />
        )}
      </section>
    </>
  );
};

export default ContactUs;
