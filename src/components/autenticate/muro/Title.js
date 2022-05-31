import './Title.css'

function Title ({logOut}){
  return (
    <header>
        <p>Notes List</p>
        <button className="out" onClick={()=>{logOut()}}>Sign out</button>
    </header>
  )
}

export default Title;