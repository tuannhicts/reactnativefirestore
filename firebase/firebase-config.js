import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBPqvdm16rnFvHWjDpoZXb6sU2-L_e6-1s',
  authDomain: 'altminutes-dev-vn.firebaseapp.com',
  databaseURL: 'https://altminutes-dev-vn.firebaseio.com',
  projectId: 'altminutes-dev-vn',
  storageBucket: 'altminutes-dev-vn.appspot.com',
  messagingSenderId: '540514015828',
  appId: '1:540514015828:web:f871cef011ed9308b0abc1',
  measurementId: 'G-CWV5PJD4KB',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
