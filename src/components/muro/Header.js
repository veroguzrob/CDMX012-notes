import "../../styles/Header.css";
import signOutIcon from '../../images/signOut.png'

function Header({ logOut }) {
  return (
    <header>
      <h2>Notes List</h2>
      <button className='logout' onClick={() => { logOut() }}> <img src={signOutIcon} alt="signOutIcon" className="signOut" /> </button>
    </header>
  )
}

export default Header;