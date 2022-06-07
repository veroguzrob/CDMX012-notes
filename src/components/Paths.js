import { Routes, Route } from "react-router-dom";
import { loginWithGoogle, logOut } from "../lib/firebaseAuth"
import Muro from "../vistas/Muro";
import Home from "../vistas/Home";
import CreateNotes from "./muro/CreateNotes";


function Paths({ isAutenticate }) {
  return (
    <>
      {isAutenticate ?
        <Routes>
          <Route path="/" element={<Muro logOut={logOut} />}>
          </Route>
          <Route path="/createNotes" element={<CreateNotes />}>
          </Route>
        </Routes> :
        <Routes>
          <Route path="/" element={<Home loginWithGoogle={loginWithGoogle} />}>
          </Route>
        </Routes>}
    </>
  )
}
export default Paths;
