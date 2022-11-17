import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR8jzfA7DDbU2aftpSICN0M9dqCQzFyOU",
  authDomain: "chat-app-806fe.firebaseapp.com",
  projectId: "chat-app-806fe",
  storageBucket: "chat-app-806fe.appspot.com",
  messagingSenderId: "797870882174",
  appId: "1:797870882174:web:8ef1866f1409b4d42ac72f",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
