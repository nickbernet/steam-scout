import { auth } from './firebase-config.js';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// === SIGN UP ===
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
      alert('Sign up successful!');
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  });
}

// === LOG IN ===
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in:', userCredential.user);
      alert('Login successful!');
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  });
}

// === GOOGLE SIGN-IN ===
const googleButton = document.getElementById('google-signin');
if (googleButton) {
  googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google sign-in success:', result.user);
      alert('Signed in with Google!');
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  });
}
