import "../styles/Muro.css"
import Header from "../components/muro/Header";
import ListNotes from "../components/muro/ListNotes";
import AddNotes from "../components/muro/AddNotes";


function Muro({ logOut }) {
  return (
    <main className="container">
      <Header logOut={logOut} />
      <ListNotes />
      <AddNotes />
    </main>
  )
}

export default Muro;