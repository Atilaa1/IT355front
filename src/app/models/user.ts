export class User {
    id: number;
    username: string;
    password: string;
    mail: string;
    role: string;
    enabled: number

    constructor(id: number,username: string,password: string,mail: string,role: string,enabled:number) 
    { 
        this.id=id;
        this.username=username;
        this.password=password;
        this.mail=mail=mail;
        this.role=role;
        this.enabled=enabled
    }
}
