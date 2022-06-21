import "../../styles/CreateNote.css";
import { useNavigate } from "react-router-dom";
import { saveNotes } from "../../lib/firestore";
import iconSave from '../../images/save.png'

function Notes() {
  const navigate = useNavigate();
  return (
    <section className="creations">
      <article className="notes">
        <input type="text" placeholder="Title:" className="note-title" id="title" />
        <textarea placeholder="Note:" className="note_description" id="note" />
      </article>
      <article className="creation">
        <button className="save" onClick={() => {
          const titleNote = document.getElementById("title").value;
          const textNote = document.getElementById("note").value;

          saveNotes(titleNote, textNote,);

          navigate("/");

        }}> <img src={iconSave} alt="iconSave" /> </button>
      </article>
    </section >

  )
}

export default Notes;