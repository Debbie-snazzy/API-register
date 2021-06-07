import {Request, Response} from "express";
import Auth from "../modules/auth";


class AuthController{
static register(req:Request, res:Response){
    
    const{name, email, pwd} = req.body;
    const auth = new Auth()
    const result = auth.register(name, email, pwd);
    
    res.send({massage: "Account successfully created"})
}


static login(req:Request, res:Response){

    const {email,pwd} = req.body;
    const auth = new Auth()
    const result = auth.login(email, pwd);

    res.send({ message: "welcome Back"});
}


}

export default AuthController;