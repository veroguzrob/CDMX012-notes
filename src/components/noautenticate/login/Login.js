const Login = ({loginWithGoogle}) => {
  return (
    <button onClick={()=>{
      loginWithGoogle()
    }}>Login with Google</button>
  )
}

export default Login;