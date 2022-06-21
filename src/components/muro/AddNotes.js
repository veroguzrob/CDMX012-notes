import "../../styles/AddNotes.css"
import iconAdd from "../../images/add.png"
import { useNavigate } from "react-router-dom";

function AddNotes() {
  const navigate = useNavigate();

  return (
    <footer>
      <button className="add" onClick={() => {
        navigate("/createNote");
      }} >
        <img src={iconAdd} alt="iconAdd" className="icon-add" />
      </button>
    </footer>

  )
}

export default AddNotes;