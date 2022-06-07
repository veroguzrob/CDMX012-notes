import "../../styles/AddNotes.css"
import icon from "../../images/add.png"
import { useNavigate } from "react-router-dom";

function AddNotes() {
  const navigate = useNavigate();

  return (
    <footer>
      <button className="add" onClick={() => {
        navigate("/createNotes");
      }} >
        <img src={icon} alt="icon" className="icon" />
      </button>
    </footer>

  )
}

export default AddNotes;