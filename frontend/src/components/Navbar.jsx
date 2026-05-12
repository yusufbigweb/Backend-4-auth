import { Link, useNavigate } from "react-router-dom"

import { Button } from "./ui/button"

import { auth } from "../firebase"

import {
  signOut,
  onAuthStateChanged
} from "firebase/auth"

import { useEffect, useState } from "react"

import { LoaderCircle } from "lucide-react"

function Navbar() {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  const [loading, setLoading] =
    useState(true)

  const [logoutLoading, setLogoutLoading] =
    useState(false)

  // Check Auth State
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser)

          setLoading(false)

        }
      )

    return () => unsubscribe()

  }, [])

  // Logout
  const logout = async () => {

    try {

      setLogoutLoading(true)

      await signOut(auth)

      navigate("/auth/login")

    } catch (error) {

      console.log(error)

    } finally {

      setLogoutLoading(false)

    }
  }

  // Initial Loader
  if (loading) {

    return (

      <div className="flex justify-center items-center h-screen">

        <LoaderCircle
          className="animate-spin w-10 h-10"
        />

      </div>

    )
  }

  return (

    <div className="flex justify-between items-center w-[70%] m-auto py-5">

      {/* Left */}
      <div className="flex items-center gap-5">

        <div className="font-extrabold text-[20px]">

          100<span className="text-red-600">x</span>Devs

        </div>

        <div className="flex gap-5">

          <Link to="/">Home</Link>

          <Link to="/course">Courses</Link>

          <Link to="/store">Store</Link>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {
          user ? (

            <>

              <img
                src={user.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full"
              />

              <Button
                onClick={logout}
                disabled={logoutLoading}
                className="px-5 py-5"
              >

                {
                  logoutLoading
                    ? "Logging out..."
                    : "Logout"
                }

              </Button>

            </>

          ) : (

            <>

              <Link to="/auth/signup">

                <Button
                  className="bg-transparent text-black border border-black px-5 py-5"
                >
                  Sign Up
                </Button>

              </Link>

              <Link to="/auth/login">

                <Button className="px-5 py-5">
                  Login
                </Button>

              </Link>

            </>

          )
        }

      </div>

    </div>
  )
}

export default Navbar