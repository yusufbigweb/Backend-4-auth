import { Outlet, Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login.jsx"
import Home from "./pages/Home.jsx"
import Signup from "./pages/auth/Signup.jsx"

 function AuthLayout(){
  return <Outlet/>
}

function App() {
  return (<>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<AuthLayout/>}>
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
        </Route>
      </Routes>
      </>
  )
}

export default App