

export default class Registration {

    name="";
    email ="";
    pwd ="";
    private _isEmailVerified =false;
     private _lastLogin ="";

     constructor(name:string, email:string, password:string){
         this.name = name;
         this.email = email;
         this.pwd = password;
         this._isEmailVerified = false;
         this._lastLogin = new Date().toDateString()
     }

     get isEmailVerified(){
         return this._isEmailVerified
     }

     get lastLogin(){
        return this._lastLogin
    }

    set isEmailVerified(arg:boolean){
        this._isEmailVerified = arg
    }
    set lastLogin(date:string){
        this._lastLogin = date;
    }
}



