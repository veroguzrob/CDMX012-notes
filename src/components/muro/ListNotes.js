import { useState, useEffect } from "react";
import "../../styles/ListNotes.css"
import { onGetNotes } from "../../lib/firestore";
import iconEdit from "../../images/edit.png"
import { useNavigate } from "react-router-dom";


function ListNotes() {

  useEffect(() => {
    onGetNotes((querySnapShot) => {
      const notesData = [];

      querySnapShot.forEach((doc) => {
        const allNotes = doc.data();
        notesData.push({ ...allNotes, id: doc.id });

      });
      setNotes(notesData)


    });

  }, [])

  const [notes, setNotes] = useState(null)

  const navigate = useNavigate();

  return (
    <section className="container-list">
      {notes && notes.map((notes) =>
        <article className="container-note" key={notes.id} >
          <p className="title"> {notes.title} </p>
          <p className="text"> {notes.note} </p>
          <button className="edit" onClick={() => {
            navigate(`/editNote/${notes.id}`)
          }} > <img src={iconEdit} alt="iconEdit" className="icon-edit" /></button>
        </article>)
      }
    </section >
  )
}

export default ListNotes;
