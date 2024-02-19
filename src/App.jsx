import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {

  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  };

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Sign In</button>
      {
        user && 
        <div>
            <h1>{user.displayName}</h1>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
        </div>
      }
    </>
  )
}

export default App
