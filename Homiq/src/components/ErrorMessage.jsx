import { motion, AnimatePresence } from 'motion/react';

import { BiSolidError } from 'react-icons/bi';

const ErrorMessage = ({ error, text }) => {
  return (
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className='fixed bottom-5 right-0 transform -translate-x-1/2  w-45 p-3 rounded-lg bg-red-500 text-black shadow-lg'
        >
          <p className='flex justify-center items-center text-white gap-1'>
            <BiSolidError /> {text}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;
