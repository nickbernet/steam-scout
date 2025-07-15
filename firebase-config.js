// Import the functions you need from the Firebase modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCpEvO6ezVKJVaiaseRNvuY6s7Bztxjsnc",
  authDomain: "steamscout-1.firebaseapp.com",
  projectId: "steamscout-1",
  storageBucket: "steamscout-1.firebasestorage.app",
  messagingSenderId: "663241645780",
  appId: "1:663241645780:web:6507c34a1466611051a541",
  measurementId: "G-XBPLT4Z1CQ" // optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Export the auth object so your other scripts can import it
export { auth };
