import "../../styles/Notes.css";

function Notes() {
  return (
    <section className="notes">
      <input type="text" placeholder="Title:"  className="note-title" /><br />
      <textarea placeholder="Note:" className="note_description" rows="5" />
    </section>
  )
}

export default Notes;