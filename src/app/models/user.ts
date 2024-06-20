export class User {
    id?: number;
    username: string;
    password: string;
    mail: string;
    roles?:any

    constructor(username: string,password: string,mail: string,id?: number,roles?:any) 
    { 
        this.id=id;
        this.username=username;
        this.password=password;
        this.mail=mail=mail;
        this.roles=roles;
    }
}
