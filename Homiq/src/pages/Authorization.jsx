import { useState } from 'react';
import AuthIntroCard from '../components/Authorization/AuthIntroCard';
import AuthForm from '../components/Authorization/AuthForm';
import Notification from '../components/Notification';
import ErrorMessage from '../components/ErrorMessage';

import { bgAuth } from '../assets/backgrounds/bg';

const Authorization = () => {
  const [regNotification, setRegNotification] = useState(false);
  const [regError, setRegError] = useState(false);
  const [logNotification, setLogNotification] = useState(false);
  const [logError, setLogError] = useState(false);

  return (
    <div
      className=' min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-center gap-10'
      style={{ backgroundImage: `url("${bgAuth}")` }}
    >
      <AuthIntroCard />
      <AuthForm
        setRegNotification={setRegNotification}
        setRegError={setRegError}
        setLogNotification={setLogNotification}
        setLogError={setLogError}
      />
      {regNotification && (
        <Notification notification={regNotification} text='Registration is successful!' />
      )}
      {regError && <ErrorMessage error={regError} text='Registration error!' />}
      {logNotification && (
        <Notification notification={logNotification} text='Login successful!' />
      )}
      {logError && <ErrorMessage error={logError} text='Login error!' />}
    </div>
  );
};

export default Authorization;
