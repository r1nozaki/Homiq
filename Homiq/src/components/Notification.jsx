import { motion, AnimatePresence } from 'motion/react';

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
          className='fixed bottom-5 left-1/2 transform -translate-x-1/2  w-45 p-3 rounded-lg bg-[#c3efd2] text-black shadow-lg'
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
