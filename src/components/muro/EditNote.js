import { useEffect, useState } from "react";
import "../../styles/CreateNote.css"
import { useParams, useNavigate } from "react-router-dom"
import { getNote, updateOneNote, deleteOneNote } from '../../lib/firestore'
import iconUpdate from '../../images/update.png'
import iconDelete from '../../images/delete.png'

function EditNote() {
  const params = useParams();
  const [dataNote, setDataNote] = useState(null)

  const handleChangeTitle = (e) => {
    setDataNote((noteGet) => {
      return { ...noteGet, title: e.target.value }
    })
  }

  const handleChangeNote = (e) => {
    setDataNote((noteGet) => {
      return { ...noteGet, note: e.target.value }
    })
  }

  useEffect(() => {

    const getData = async () => {
      return await getNote(params.idNote)
    }
    getData().then((data) => { setDataNote(data) })

  }, [])

  const navigate = useNavigate()
  return (
    <>
      {dataNote && <section className="creations">
        <article className="notes" >
          <input type="text" className="note-title" value={dataNote.title} onChange={handleChangeTitle} />
          <textarea className="note_description" value={dataNote.note} onChange={handleChangeNote} />
        </article>
        <article className="creation">
          <button className="trash" onClick={() => {
            deleteOneNote(params.idNote, dataNote).then(() => {
              navigate('/')
            })
          }} > <img src={iconDelete} alt="iconDelete" /> </button>

          <button className="update" onClick={() => {
            updateOneNote(params.idNote, dataNote).then(() => {
              navigate('/')
            })
          }} >
            <img src={iconUpdate} alt="iconUpdate" className="icon-update" />
          </button>

        </article>
      </section>}
    </>
  )

}

export default EditNote;