const AuthIntroCard = () => {
  return (
    <div className='w-200 h-150 p-25 rounded-2xl bg-[#f8f8d9] shadow-lg hidden md:block'>
      <h1 className='font-extrabold text-7xl text-center mb-6 text-blue-700'>
        Welcome to Homiq!
      </h1>
      <h2 className='font-bold text-4xl text-center mb-4 text-blue-700'>
        Ready to Find Your New Home?
      </h2>
      <p className='text-xl text-center mb-6 pt-6 leading-relaxed'>
        Looking to rent or buy property? Homiq makes it easy to discover your perfect
        space — from cozy apartments to spacious family houses. Fast, secure, and
        stress-free. Join thousands of happy clients who’ve already found their dream
        home!
      </p>
      <p className='text-xl text-center font-medium text-green-500 '>
        Log in or sign up now to start your journey with Homiq!
      </p>
    </div>
  );
};

export default AuthIntroCard;
