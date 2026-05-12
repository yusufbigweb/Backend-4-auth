import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"
import User from "../models/user.models.js"


export const Signup =  async (req, res)=>{
    const {email, password, username, profileUrl} = req.body

    try{

    }catch(error){
        res.status(500).json({
            message: ""
        })
    }
}


