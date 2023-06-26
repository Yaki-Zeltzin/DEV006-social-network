import { initializeApp } from 'firebase/app';
// Your web app's Firebase configuration
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC_VhqxOj-X6Tap-OaIizAg1FBKz3rv-gM',
  authDomain: 'whatsup-redsocial.firebaseapp.com',
  projectId: 'whatsup-redsocial',
  storageBucket: 'whatsup-redsocial.appspot.com',
  messagingSenderId: '1006751176366',
  appId: '1:1006751176366:web:c573a45c3eed058b767f3f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore();
export const saveTask = (description) => {
  addDoc(collection(db, 'posts'), { description });
};

export const getTask = () => getDocs(collection(db, 'posts'));
