import { motion, AnimatePresence } from 'framer-motion';

import { FaRegCheckCircle } from 'react-icons/fa';

const Notification = ({ notification, text }) => {
  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className='md:fixed md:bottom-5 md:right-0  md:transform md:-translate-x-1/2  w-60 p-3 rounded-lg bg-[#c3efd2] text-black shadow-lg'
        >
          <p className=' flex items-center justify-center gap-3'>
            <FaRegCheckCircle className='text-green-500' /> {text}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
