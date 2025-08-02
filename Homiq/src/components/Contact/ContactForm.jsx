import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage as ErrorMessageFormik } from 'formik';
import emailjs from '@emailjs/browser';

const ContactForm = ({ setError, setNotification }) => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (values, actions) => {
    setIsSending(true);
    emailjs
      .send(
        'service_b0tv2ts',
        'template_xm6b4yd',
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
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
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('This field is required!')
          .max(50, 'Name must be 50 characters or less'),
        email: Yup.string()
          .required('Email is required!')
          .email('Invalid email address')
          .trim('Email should not have leading/trailing spaces'),
        subject: Yup.string().required('You must specify the subject!'),
        message: Yup.string()
          .required('This field is required!')
          .min(20, 'The message must be longer than 20 characters.')
          .max(1000, 'The message is too long (max 1000 characters)'),
      })}
      onSubmit={(values, actions) => {
        sendEmail(values, actions);
      }}
    >
      {({ touched, errors }) => (
        <Form className='w-full md:w-90  bg-black/40 backdrop-blur-md text-white p-8 rounded-lg shadow-lg'>
          <label htmlFor='name'>Your Name</label>
          <Field
            type='text'
            name='name'
            id='name'
            placeholder='Enter your name'
            className={`border bg-transparent w-full rounded-xl h-10 mt-2 mb-2 p-2 focus:outline-none focus:ring-0 focus:border-green-400 ${
              touched.name && errors.name ? 'border-red-500' : 'border-white/30'
            }`}
          />
          <ErrorMessageFormik component='div' name='name' className='text-red-500 ' />
          <label htmlFor='email'>Your Email</label>
          <Field
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            className={`border bg-transparent w-full rounded-xl h-10 mt-2 mb-2 p-2 focus:outline-none focus:ring-0 focus:border-green-400 ${
              touched.email && errors.email ? 'border-red-500' : 'border-white/30'
            }`}
          />
          <ErrorMessageFormik component='div' name='email' className='text-red-500 ' />
          <label htmlFor='subject'>Subject</label>
          <Field
            type='text'
            name='subject'
            id='subject'
            placeholder='Enter the subject of the problem'
            className={`border bg-transparent w-full rounded-xl h-10 mt-2 mb-2 p-2 focus:outline-none focus:ring-0 focus:border-green-400 ${
              touched.subject && errors.subject ? 'border-red-500' : 'border-white/30'
            }`}
          />
          <ErrorMessageFormik component='div' name='subject' className='text-red-500 ' />
          <label htmlFor='message'>Your Message</label>
          <Field
            as='textarea'
            name='message'
            id='message'
            placeholder='Enter your message'
            className={`border bg-transparent w-full rounded-xl h-10 mt-2 mb-2 p-2 focus:outline-none focus:ring-0 focus:border-green-400 min-h-25 max-h-50 overflow-hidden ${
              touched.message && errors.message ? 'border-red-500' : 'border-white/30'
            }`}
          />
          <ErrorMessageFormik component='div' name='message' className='text-red-500 ' />
          <button
            type='submit'
            className='w-full bg-green-400 hover:bg-green-500 h-12 rounded-lg font-medium hover:cursor-pointer'
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
