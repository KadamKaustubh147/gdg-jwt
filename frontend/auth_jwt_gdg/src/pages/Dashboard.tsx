import { useContext } from "react"
import { AuthContext } from "../context/AuthContext-http-jwt"

const AppPage = () => {

  const { logout, user } = useContext(AuthContext);

  return (
    <>

      <h1>This should be protected</h1>

      {user && (
        <p>Welcome, {user.email} and {user.name}</p>
      )}

      <a href="secret" className="bg-red-500 rounded-3xl ">Acess the secret key</a>
      <br />
      <br />
      <br />

      <button onClick={logout}>Logout</button>
    </>
  )
}

export default AppPage
