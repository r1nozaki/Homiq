import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import * as Yup from 'yup';
import { ImageIcon } from 'lucide-react';
import { IoIosClose } from 'react-icons/io';
import { useTheme } from '../../context/ThemeContext';

const ReviewAddForm = ({ setOpenModal, addReview }) => {
  const [fileName, setFileName] = useState('No file chosen');
  const { darkMode } = useTheme();

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFieldValue('ava', imageURL);
      setFileName(file.name);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
      >
        <Formik
          initialValues={{
            ava: null,
            name: '',
            surname: '',
            stars: '',
            review: '',
            date: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required!'),
            surname: Yup.string().required('Required!'),
            stars: Yup.string().required('Required!'),
            review: Yup.string().required('Required!'),
            date: Yup.string().required('Required!'),
          })}
          onSubmit={(values, { resetForm }) => {
            addReview(values);
            resetForm();
            setOpenModal(false);
          }}
        >
          {({ setFieldValue, touched, errors }) => (
            <Form
              className={`w-100 max-h-200   border-2 border-green-400 text-white p-5 rounded-lg shadow-lg relative ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <button
                onClick={() => setOpenModal(false)}
                className='absolute top-0 right-0 hover:cursor-pointer'
              >
                <IoIosClose
                  className={`${darkMode ? 'text-white' : 'text-black'}`}
                  size={35}
                />
              </button>
              <div className='flex flex-col'>
                <label htmlFor='ava' className='text-green-600 font-semibold'>
                  Profile photo
                </label>
                <div className='flex items-center gap-4'>
                  <label
                    htmlFor='ava'
                    className='mt-1 cursor-pointer bg-green-100 text-green-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-200 transition w-fit'
                  >
                    <ImageIcon className='w-5 h-5' />
                    Upload Image
                  </label>
                  <span className={` text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
                    {fileName}
                  </span>
                </div>
                <input
                  id='ava'
                  name='ava'
                  type='file'
                  accept='image/*'
                  onChange={e => handleFileChange(e, setFieldValue)}
                  className='hidden'
                />
              </div>

              <div className=''>
                <label htmlFor='name' className='text-green-600 font-semibold'>
                  Your Name
                </label>
                <Field
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter your name'
                  className={`w-full mb-4 mt-1 p-2 rounded-lg border border-green-300 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 ${
                    darkMode ? 'text-white' : 'text-black'
                  } ${touched.name && errors.name ? 'border-red-500' : 'border-black'}`}
                />
                <FormikErrorMessage
                  component='div'
                  name='name'
                  className='text-red-500 -mt-4'
                />
              </div>
              <div className=''>
                <label htmlFor='surname' className='text-green-600 font-semibold'>
                  Your Surname
                </label>
                <Field
                  type='text'
                  name='surname'
                  id='surname'
                  placeholder='Enter your surname'
                  className={`w-full mb-4 mt-1 p-2 rounded-lg border border-green-300 placeholder-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 ${
                    darkMode ? 'text-white' : 'text-black'
                  } ${touched.name && errors.name ? 'border-red-500' : 'border-black'}`}
                />
                <FormikErrorMessage
                  component='div'
                  name='surname'
                  className='text-red-500 -mt-4'
                />
              </div>
              <div className=' flex flex-col'>
                <label htmlFor='stars' className='text-green-600 font-semibold'>
                  Rate us
                </label>
                <Field
                  as='select'
                  name='stars'
                  className={`w-full mb-4 mt-1 p-2 rounded-lg border border-green-300 placeholder-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 ${
                    darkMode ? 'text-white' : 'text-black'
                  } ${touched.name && errors.name ? 'border-red-500' : 'border-black'}`}
                >
                  <option value='star-0'>0</option>
                  <option value='star-0.5'>0.5</option>
                  <option value='star-1'>1</option>
                  <option value='star-1.5'>1.5</option>
                  <option value='star-2'>2</option>
                  <option value='star-2.5'>2.5</option>
                  <option value='star-3'>3</option>
                  <option value='star-3.5'>3.5</option>
                  <option value='star-4'>4</option>
                  <option value='star-4.5'>4.5</option>
                  <option value='star-5'>5</option>
                </Field>
                <FormikErrorMessage
                  component='div'
                  name='stars'
                  className='text-red-500 -mt-4'
                />
              </div>
              <div>
                <label htmlFor='review' className='text-green-600 font-semibold'>
                  Review
                </label>
                <Field
                  as='textarea'
                  id='review'
                  name='review'
                  placeholder='Enter your review'
                  className={`w-full mb-2 mt-1 p-2 min-h-25 rounded-lg border border-green-300 placeholder-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 ${
                    darkMode ? 'text-white' : 'text-black'
                  } ${touched.name && errors.name ? 'border-red-500' : 'border-black'}`}
                />
                <FormikErrorMessage
                  component='div'
                  name='review'
                  className='text-red-500 -mt-4'
                />
              </div>
              <div>
                <label htmlFor='date' className='text-green-600 font-semibold'>
                  Date
                </label>
                <Field
                  type='date'
                  id='date'
                  name='date'
                  onChange={e => {
                    const value = e.target.value;
                    setFieldValue('date', value);
                  }}
                  className={`w-full rounded-lg border border-green-300 placeholder-green-400 focus:outline-none focus:ring-1 focus:ring-green-400 ${
                    darkMode ? 'text-white' : 'text-black'
                  } ${touched.name && errors.name ? 'border-red-500' : 'border-black'}`}
                />
              </div>

              <button
                type='submit'
                className='w-full h-10 mt-4 text-lg bg-green-400 rounded-lg hover:bg-green-500 hover:cursor-pointer'
              >
                Leave a review
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReviewAddForm;
