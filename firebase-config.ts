// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: 'highlights-61135',
  storageBucket: 'highlights-61135.appspot.com',
  messagingSenderId: '179118235142',
  appId: '1:179118235142:web:0533893c1349d491a82d87',
  measurementId: 'G-Z3B7K65K3B',
};

export const database = getFirestore(initializeApp(firebaseConfig));
