import { useRouter } from "next/router"

const logout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useRouter()

  const handleLogout = async () => {
    const req = await fetch("https://ed-blog-api.herokuapp.com/api/logout")

    if (req.status !== 200) {
      return
    }
    history.push("/login")
  }

  return <button onClick={handleLogout}>Logout</button>
}

export default logout
