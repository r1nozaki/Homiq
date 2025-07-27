import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaCog, FaCogs, FaPowerOff } from 'react-icons/fa';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import ErrorMessage from './ErrorMessage';

const Settings = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, user => {
      setTimeout(() => {
        if (user) {
          setEmail(user.email);
          setLoading(false);
        } else {
          setEmail('');
          navigate('/');
        }
      }, 1000);
    });
    return () => unsubscribe;
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <FaCog className='text-green-500 text-9xl animate-spin mb-30 -mr-5' />
        <FaCog className='text-green-500 text-9xl animate-spin' />
      </div>
    );
  }

  return (
    <>
      <div className='pt-3 min-h-screen flex items-center justify-center '>
        <div className='flex w-full max-w-2xl bg-[#f5f5f5] shadow-lg rounded-lg'>
          <div className='w-1/3 flex flex-col bg-green-100 items-center p-5 gap-3 border-r'>
            <h2 className='font-medium text-2xl'>Menu</h2>
            <Link
              to='/home'
              className='border-2 border-black text-black w-full rounded-lg p-2 text-center bg-green-300 hover:bg-green-400'
            >
              Home
            </Link>
            <Link
              to='/privacy'
              className='border-2 border-black text-black w-full rounded-lg p-2 text-center bg-green-300 hover:bg-green-400'
            >
              Privacy & Policy
            </Link>
            <Link
              to='/help'
              className='border-2 border-black text-black w-full rounded-lg p-2 text-center bg-green-300 hover:bg-green-400'
            >
              Help
            </Link>
            <Link
              to='/property'
              className='border-2 border-black text-black w-full rounded-lg p-2 text-center bg-green-300 hover:bg-green-400'
            >
              Property
            </Link>
          </div>
          <div className='w-2/3 flex flex-col items-center mt-5 p-6 gap-4'>
            <div className='flex gap-5 items-center'>
              <FaCogs size={40} />
              <h2 className='text-4xl font-bold'>Settings</h2>
            </div>
            <div className='flex flex-col gap-2 border-b w-full items-center  pb-3'>
              <span className='text-xl font-semibold'>Email:</span>
              <span className='text-lg font-medium'>{email}</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <span className='text-lg '>Dark mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-300 hover:cursor-pointer ${
                  darkMode ? 'bg-green-400' : 'bg-gray-700'
                }`}
              >
                <span
                  className={`absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    darkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <button
              onClick={handleLogout}
              className='mt-5 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow flex items-center gap-3 text-lg hover:cursor-pointer'
            >
              <FaPowerOff /> Logout
            </button>
          </div>
        </div>
      </div>
      {error && <ErrorMessage error={error} text='Logout failed' />}
    </>
  );
};

export default Settings;
