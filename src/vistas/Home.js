import Title from "../components/home/Title"
import Login from "../components/home/Login";

function Home ({loginWithGoogle}) {
  return (
    <>
    <Title />
    <Login loginWithGoogle={loginWithGoogle} />
    </>
  )
}

export default Home;