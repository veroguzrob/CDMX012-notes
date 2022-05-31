import { Routes, Route } from "react-router-dom";
import Title from "./autenticate/muro/Title";
import Login from "./noautenticate/login/Login";
import { loginWithGoogle, logOut } from '../lib/firebaseAuth'

function Paths ({isAutenticate}){
  return (
    <section>
      {isAutenticate?
      <Routes>
      <Route path="/" element={<Title logOut={logOut} />}>
      </Route>
    </Routes> :
    <Routes>
      <Route path="/" element={<Login loginWithGoogle={loginWithGoogle} />}>
      </Route>
    </Routes>}
    </section>
  )
}
export default Paths;