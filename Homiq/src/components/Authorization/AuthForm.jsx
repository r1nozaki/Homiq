import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, googleProvider, githubProvider } from '../../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
  FaGoogle,
  FaGithub,
} from 'react-icons/fa6';
import { FaSignInAlt } from 'react-icons/fa';

const AuthForm = ({
  setRegNotification,
  setRegError,
  setLogNotification,
  setLogError,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async values => {
    try {
      await createUserWithEmailAndPassword(auth, values.userEmail, values.userPassword);
      setRegNotification(true);
      setTimeout(() => {
        setRegNotification(false);
        navigate('/home');
      }, 1000);
    } catch {
      setRegError(true);
      setTimeout(() => setRegError(false), 1000);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setLogNotification(true);
      setTimeout(() => {
        setLogNotification(false);
        navigate('/home');
      }, 1000);
    } catch {
      setLogError(true);
      setTimeout(() => setLogError(false), 1000);
    }
  };

  const loginWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      setLogNotification(true);
      setTimeout(() => {
        setLogNotification(false);
        navigate('/home');
      }, 1000);
    } catch {
      setLogError(true);
      setTimeout(() => setLogError(false), 1000);
    }
  };

  return (
    <div className='bg-[#f8f8d9] w-100 h-150 rounded-2xl shadow-lg p-10'>
      <h2 className='text-green-500 text-center mb-4 text-3xl font-bold uppercase'>
        Homiq
      </h2>
      <Formik
        initialValues={{
          userEmail: '',
          userPassword: '',
        }}
        validationSchema={Yup.object({
          userEmail: Yup.string()
            .required('This field is required')
            .email('Invalid email'),
          userPassword: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await signInWithEmailAndPassword(auth, values.userEmail, values.userPassword);
            setLogNotification(true);
            setTimeout(() => {
              setLogNotification(false);
              navigate('/home');
            }, 1000);
          } catch {
            setLogError(true);
            setTimeout(() => setLogError(false), 1000);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form className='flex flex-col'>
            <div className='flex items-center gap-3'>
              <FaUser />
              <div
                className={`flex items-center gap-2 border-2 border-blue-700 rounded-lg px-4 py-2 w-full   ${
                  errors.userEmail && touched.userEmail ? ' border-red-500' : ''
                }`}
              >
                <Field
                  id='userEmail'
                  name='userEmail'
                  type='email'
                  placeholder='Enter email'
                  className='outline-none text-gray-600'
                ></Field>
              </div>
            </div>
            <FormikErrorMessage
              component='div'
              className='text-red-500 ml-7'
              name='userEmail'
            />

            <div className='flex items-center gap-3 mt-3'>
              <FaLock />
              <div
                className={`flex items-center gap-2 border-2 border-blue-700 relative rounded-lg  px-4 py-2  w-full  ${
                  errors.userPassword && touched.userPassword ? ' border-red-500' : ''
                }`}
              >
                <Field
                  id='userPassword'
                  name='userPassword'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Create or enter password'
                  className='outline-none  text-gray-600'
                ></Field>
                <button
                  type='button'
                  onClick={togglePasswordVisibility}
                  className='absolute right-3 cursor-pointer'
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <FormikErrorMessage
              component='div'
              className='text-red-500 ml-7'
              name='userPassword'
            />

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-indigo-600 text-white  px-4 py-2 rounded-lg mt-3 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 hover:cursor-pointer'
            >
              <FaSignInAlt className='mr-2' /> Login
            </button>

            <button
              type='button'
              onClick={() => handleRegister(values)}
              className='w-full bg-green-600 text-white  px-4 py-2 rounded-lg mt-3 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 hover:cursor-pointer'
            >
              <FaUserPlus className='mr-2' /> Register
            </button>

            <div className='flex items-center pt-8 mt-7'>
              <hr className='flex-grow border-t border-gray-300' />
              <span className='mx-2 text-gray-600'>OR</span>
              <hr className='flex-grow border-t border-gray-300' />
            </div>
          </Form>
        )}
      </Formik>
      <div className='flex flex-col gap-3 justify-center pt-3'>
        <button
          onClick={loginWithGoogle}
          className='bg-red-500 text-white px-6 py-3 rounded-lg flex items-center transition-transform duration-300 transform hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400 hover:cursor-pointer'
        >
          <FaGoogle className='mr-3 size-11' /> Login with Google
        </button>

        <button
          onClick={loginWithGithub}
          className='bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center transition-transform duration-300 transform hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 hover:cursor-pointer'
        >
          <FaGithub className='mr-3 size-11' /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
