import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage as ErrorMessageFormik } from 'formik';
import emailjs from '@emailjs/browser';
import Notification from './Notification';
import ErrorMessage from './ErrorMessage';
import { FaTelegram, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [notification, setNotification] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (values, actions) => {
    setIsSending(true);
    emailjs
      .send(
        'service_b0tv2ts',
        'template_0wgclht',
        {
          name: values.newsletter,
          email: values.newsletter,
        },
        'm0QgJltbjDjliED83'
      )
      .then(() => {
        actions.resetForm();
        setNotification(true);
        setTimeout(() => setNotification(false), 2000);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => setError(false), 2000);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <footer className='w-full h-98 bg-[#F5F5F5] px-20 pt-19 pb-25'>
      <div className='flex gap-53.5'>
        <div className='w-88'>
          <a href='#' className='uppercase text-green-500 font-medium text-2xl '>
            Homiq
          </a>
          <p className='text-[#1F2744] w-80 mt-4'>
            We have built our reputation as true local area experts.
          </p>
          <Formik
            initialValues={{ newsletter: '' }}
            validationSchema={Yup.object({
              newsletter: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            })}
            onSubmit={(values, actions) => {
              sendEmail(values, actions);
            }}
          >
            {({ touched, errors }) => (
              <Form className='mt-6'>
                <label
                  htmlFor='newsletter'
                  className='text-[#0B2E29] text-xl font-medium'
                >
                  Newsletter
                </label>
                <div className='flex items-center mt-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                  <Field
                    type='email'
                    name='newsletter'
                    id='newsletter'
                    className={`bg-[#FEFEFF] placeholder-gray-300 w-65 h-10.5 py-2 pl-4 outline-none ${
                      touched.newsletter && errors.newsletter
                        ? 'border border-red-500'
                        : ''
                    }`}
                    placeholder='Input your email'
                  />
                  <button
                    type='submit'
                    className='w-33 h-10.5 bg-green-400 hover:bg-green-500 cursor-pointer text-white font-medium'
                    disabled={isSending}
                  >
                    {isSending ? 'Sending...' : 'Send'}
                  </button>
                </div>
                <ErrorMessageFormik
                  name='newsletter'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                ></ErrorMessageFormik>
              </Form>
            )}
          </Formik>
          {notification && (
            <Notification notification={notification} text='Subscription successful!' />
          )}
          {error && <ErrorMessage error={error} text='An error occurred!' />}
        </div>

        <div className='flex gap-30'>
          <div>
            <span className='text-[#0B2E29] text-xl font-medium'>Service</span>
            <ul className='mt-4'>
              <li className='text-gray-500 flex flex-col gap-4 '>
                <Link to='/about' className='hover:underline'>
                  About us
                </Link>
                <Link to='/help' className='hover:underline'>
                  Help
                </Link>
                <Link to='/terms' className='hover:underline'>
                  Terms & Conditions
                </Link>
                <Link to='/privacy' className='hover:underline'>
                  Privacy & Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className='text-[#0B2E29] text-xl font-medium'>Community</span>
            <ul className='mt-4'>
              <li className='text-gray-500 flex flex-col gap-4 '>
                <a href='#' className='hover:underline'>
                  Find agents
                </a>
                <Link to='/lifestyle' className='hover:underline'>
                  Lifestyle
                </Link>
                <a href='#' className='hover:underline'>
                  Legal notic
                </a>
              </li>
            </ul>
          </div>

          <div className='ml-10'>
            <span className='text-[#0B2E29] text-xl font-medium'>Follow us on</span>
            <ul className='mt-4 '>
              <li className='text-gray-500 flex gap-4'>
                <a
                  href='https://web.telegram.org/k/#@r1nozakio'
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-500 transition duration-300 ease-in-out transform hover:scale-110 hover:text-green-600 hover:outline'
                  target='blank'
                >
                  <FaTelegram className='text-green-500' />
                </a>
                <a
                  href='https://www.instagram.com/_r1nozaki/?hl=ru'
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-500 transition duration-300 ease-in-out transform hover:scale-110 hover:text-green-600 hover:outline'
                  target='blank'
                >
                  <FaInstagramSquare className='text-green-500' />
                </a>
                <a
                  href='https://x.com/r1nozaki'
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-500 transition duration-300 ease-in-out transform hover:scale-110 hover:text-green-600 hover:outline'
                  target='blank'
                >
                  <FaSquareXTwitter className='text-green-500' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
