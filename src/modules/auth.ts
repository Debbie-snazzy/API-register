import User from "./user";



export default class Auth{
    
    users: Array<User> = []

constructor (){

    const user1 = new User("sarah", "sarah@yahoo.com", "123456")
    const user2 = new User("paul", "paul@outlook.com", "password")
    const user3 = new User("hope", "hope@gmail.com", "hope123")

    this.users = [user1, user2, user3]
}

login(email:string, pwd:string){

    const user = this.users.find((e =>{
        const isMatch = e.email && e.pwd===pwd;
        return isMatch
    }));
    if(user===undefined) throw new Error("invalid email or password")

    user.lastLogin = new Date().toDateString();

    return user.name + "welcome back !";
}

register(name:string, email:string, pwd:string){
    const user = this.users.find((e =>{
        const isMatch = e.name && e.email && e.pwd===pwd;
        return isMatch
    }));
    if(user===undefined) throw new Error("invalid registration details") 
    user.lastLogin = new Date().toDateString();

    return user.name + "Account successfully created !";
}

}
