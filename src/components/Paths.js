import { Routes, Route } from "react-router-dom";
import Title from './autenticate/muro/Title'

function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Title />}>
      </Route>
    </Routes>
  );
}

export default Paths;
