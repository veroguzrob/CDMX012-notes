import "../../styles/Header.css";

function Header({ logOut }) {
  return (
    <header>
      <h2>Notes List</h2>
      <button className='logout' onClick={() => { logOut() }}>Sign out</button>
    </header>
  )
}

export default Header;