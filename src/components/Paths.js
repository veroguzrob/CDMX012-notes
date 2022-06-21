import { Routes, Route } from "react-router-dom";
import { loginWithGoogle, logOut, } from "../lib/firebaseAuth"

import Muro from "../vistas/Muro";
import Home from "../vistas/Home";
import CreateNote from "./muro/CreateNote";
import EditNote from "./muro/EditNote";

function Paths({ isAutenticate }) {
  return (
    <>
      {isAutenticate ?
        <Routes>
          <Route path="/" element={< Muro logOut={logOut} />} />
          <Route path="/createNote" element={< CreateNote />} />
          <Route path="/editNote/:idNote" element={< EditNote />} />
        </Routes> : <Routes>
          <Route path="/" element={<Home loginWithGoogle={loginWithGoogle} />} />
        </Routes>
      }
    </>
  )
}
export default Paths;
