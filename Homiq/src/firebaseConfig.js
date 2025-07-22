// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXmjZQb8UVGtTu-N5E1327vindjehaKtg',
  authDomain: 'homeiq-dcdf7.firebaseapp.com',
  projectId: 'homeiq-dcdf7',
  storageBucket: 'homeiq-dcdf7.firebasestorage.app',
  messagingSenderId: '361630818112',
  appId: '1:361630818112:web:3bae2f285d61a5baf024a5',
  measurementId: 'G-WC16RM5Y6R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
