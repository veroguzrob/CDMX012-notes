import '../../styles/Login.css';
import logo from "../../images/g-logo.png";

const Login = ( {loginWithGoogle} ) => {
  return (

    <button className='login' onClick={() => { loginWithGoogle() } }>

      <img src={logo} alt='logo'></img>
      <p className='signIn'>Sign in with Google</p>
    
    </button>
    
  )
}
export default Login;
