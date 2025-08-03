import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage as ErrorMessageFormik } from 'formik';
import emailjs from '@emailjs/browser';
import Notification from './Notification';
import ErrorMessage from './ErrorMessage';
import { FaTelegram, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';

const Footer = ({ setIsFooterVisible }) => {
  const [notification, setNotification] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const footerRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = footerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [setIsFooterVisible]);

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
    <footer
      ref={footerRef}
      id='footer'
      className={`w-full md:px-15 px-5 pt-20 pb-14 md:pb-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-[#F5F5F5]'
      }`}
    >
      <div className='flex flex-col md:flex-row md:gap-53.5 gap-20 justify-center items-center md:justify-start md:items-start '>
        <div className='w-88 text-center md:text-left'>
          <Link to='/home' className='uppercase text-green-500 font-medium text-2xl '>
            Homiq
          </Link>
          <p className={`w-80 mt-4 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-[#1F2744]'
          }`}>
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
              <Form className='mt-6 mb-2'>
                <label
                  htmlFor='newsletter'
                  className={`text-xl font-medium transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-[#0B2E29]'
                  }`}
                >
                  Newsletter
                </label>
                <div className='flex items-center mt-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
                  <Field
                    type='email'
                    name='newsletter'
                    id='newsletter'
                    className={`placeholder-gray-300 w-65 h-10.5 py-2 pl-4 outline-none transition-colors duration-300 ${
                      darkMode ? 'bg-gray-700 text-white' : 'bg-[#FEFEFF]'
                    } ${
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

        <div className='flex flex-col gap-10 md:flex-row md:gap-30'>
          <div>
            <span className={`text-xl font-medium transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-[#0B2E29]'
            }`}>Service</span>
            <ul className='mt-4'>
              <li className={`flex flex-col gap-4 transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
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
            <span className={`text-xl font-medium transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-[#0B2E29]'
            }`}>Community</span>
            <ul className='mt-4'>
              <li className={`flex flex-col gap-4 transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <Link to='/lifestyle' className='hover:underline'>
                  Lifestyle
                </Link>
                <Link to='/legal' className='hover:underline'>
                  Legal notice
                </Link>
              </li>
            </ul>
          </div>

          <div className='md:ml-10'>
            <span className={`text-xl font-medium transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-[#0B2E29]'
            }`}>Follow us on</span>
            <ul className='mt-4 '>
              <li className={`flex gap-4 transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <a
                  href='https://web.telegram.org/k/#@r1nozakio'
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:text-green-600 hover:outline ${
                    darkMode ? 'bg-gray-700 text-green-400' : 'bg-white text-green-500'
                  }`}
                  target='blank'
                >
                  <FaTelegram className={darkMode ? 'text-green-400' : 'text-green-500'} />
                </a>
                <a
                  href='https://www.instagram.com/_r1nozaki/?hl=ru'
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:text-green-600 hover:outline ${
                    darkMode ? 'bg-gray-700 text-green-400' : 'bg-white text-green-500'
                  }`}
                  target='blank'
                >
                  <FaInstagramSquare className={darkMode ? 'text-green-400' : 'text-green-500'} />
                </a>
                <a
                  href='https://x.com/r1nozaki'
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:text-green-600 hover:outline ${
                    darkMode ? 'bg-gray-700 text-green-400' : 'bg-white text-green-500'
                  }`}
                  target='blank'
                >
                  <FaSquareXTwitter className={darkMode ? 'text-green-400' : 'text-green-500'} />
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
