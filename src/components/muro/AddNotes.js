import "../../styles/AddNotes.css"
import icon from "../../images/add.png"


function AddNotes() {
  return (
    <footer>
      <button className="add" >
        <img src={icon} alt="icon" className="icon" />
      </button>
    </footer>

  )
}

export default AddNotes;