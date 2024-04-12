import { User } from "../models/authModels.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const Register = async(req,res)=>{
    const {username,password,email} = req.body; 
    try {
        const existingEmail = await User.findOne({email:email})
        if (existingEmail){
           return res.status(400).json({message: "este correo ya existe"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        
        const credentials = new User({
            username: username,
            password: hashPassword,
            email: email
        })
        await credentials.save() //guardar los datos del registro
        res.status(200).json({message:"Se ha creado el registro exitosamente", credentials})
    } catch (error) {
        res.status(500).json({message:"Algo has hecho mal"})
    }
}


export const Login = async(req,res) => {
    const {email, password} = req.body
    try {
        const user=await User.findOne({email:email})
        if(!user){
            return res.status(400).json({message:"credenciales invalidas"})
        }else{
            const validPassword = await bcrypt.compare(password,user.password)
            if(!validPassword){
                return res.status(400).json({message:"Contraseña invalida"})
            }
        }
        const token = jwt.sign({
            id:user.id,
            email:email,
            role: user.role,
        },process.env.JWT_SECRET)
        await res.header({
            "auth" : token
        })
        res.status(200).json({message:"Contraseña correcta", token})
    } catch (error) {
        res.status(500).json({message:"Algo has hecho mal en tu contraseña", error})
    }
}

