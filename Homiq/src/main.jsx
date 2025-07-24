import { HeadProvider } from 'react-head';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <HeadProvider>
    <App />
  </HeadProvider>
);
