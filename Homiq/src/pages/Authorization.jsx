import AuthIntroCard from '../components/AuthIntroCard';
import AuthForm from '../components/AuthForm';

import { bgAuth } from '../assets/backgrounds/bg';

const Authorization = () => {
  return (
    <div
      className=' min-h-screen bg-cover bg-center flex items-center justify-center gap-10'
      style={{ backgroundImage: `url("${bgAuth}")` }}
    >
      <AuthIntroCard />
      <AuthForm />
    </div>
  );
};

export default Authorization;
