export class User{

    username:string;
    socket_code: string;

    constructor(username: string){
        this.username = username;
        this.socket_code = null;
    }
}