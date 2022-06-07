import { useState, useEffect } from "react";
import "../../styles/ListNotes.css"
import { onGetNotes } from "../../lib/firestore";

function ListNotes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    onGetNotes((querySnapShot) => {
      const aux = [];
      
      querySnapShot.forEach((doc) => {
        const allnotes = doc.data();
          aux.push(allnotes)
      })
      setNotes(aux)
    })
  }, [])
  notes.forEach((nota) => {
    console.log(nota);
  })
  return (
    <section className="container-list">
 
    </section>
  )

}

export default ListNotes;
