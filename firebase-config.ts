// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: 'highlights-61135.firebaseapp.com',
  projectId: 'highlights-61135',
  storageBucket: 'highlights-61135.appspot.com',
  messagingSenderId: '179118235142',
  appId: '1:179118235142:web:0533893c1349d491a82d87',
  measurementId: 'G-Z3B7K65K3B',
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
