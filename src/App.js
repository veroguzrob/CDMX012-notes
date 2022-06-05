import "./styles/App.css"
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Paths from './components/Paths';


function App() {
  const [isAutenticate, setAutenticate] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAutenticate(user)
    } else {
      setAutenticate(null)
    }
  });
  return (
    <>
      <BrowserRouter> <Paths isAutenticate={isAutenticate} /> </BrowserRouter>
    </>
  );
}

export default App;