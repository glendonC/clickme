import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA9lXUPreg3shuug2t2I-ud1nx4KK4WI1M",
    authDomain: "spotify-app-cc585.firebaseapp.com",
    projectId: "spotify-app-cc585",
    storageBucket: "spotify-app-cc585.appspot.com",
    messagingSenderId: "544184726189",
    appId: "1:544184726189:web:c5e78bf1ebc72f34eccc24"
  };

const firebase = initializeApp(firebaseConfig);

export { firebase };