import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

function Signup() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profileUrl: ""
  })

  const handleChange = (e)=>{
    const {name, value} = e.target

    setFormData((prev)=> ({
        ...prev,
        [name]: value,
    
    }))
  }

  const formHandle = async (event) => {
    event.preventDefault();

    console.log(formData)
  };


  const googleLogin = async () => {
    try {
      // Google Login
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;

      // Firebase Token
      const token = await user.getIdToken();

      // Backend API
      await axios.get("http://localhost:8080/api/v1/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Redirect Home
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <form className="space-y-4" onSubmit={formHandle}>
            <div>
              <Label className="pb-2">Username</Label>
              <Input 
               type="text"
               name="username"
               placeholder="Enter Username"
               onChange={handleChange} />
            </div>

            <div>
              <Label className="pb-2">Email</Label>
              <Input 
              type="email" 
              name="email"
              placeholder="Enter email" 
              onChange={handleChange} />
            </div>

            <div>
              <Label className="pb-2">Password</Label>
              <Input 
               type="password"
               name="password"
               placeholder="Enter password"
               onChange={handleChange} />
            </div>

            <div>
              <Label className="pb-2">Profile URL</Label>
              <Input 
                type="file"
                name="profileUrl"
                onChange={handleChange} />
            </div>

            <Button className="w-full">Sign up</Button>
          </form>

          <hr />

          <Button
            onClick={googleLogin}
            className="w-full flex items-center gap-2"
            variant="outline"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Login With Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;
