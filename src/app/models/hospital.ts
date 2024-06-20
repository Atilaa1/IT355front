export class Hospital{
    id:number;
    name:string;
    location:string;
    img:string;
    capacity:number

    constructor(   id:number,
        name:string,
        location:string,
        img:string,
        capacity:number){
            this.id=id;
            this.name=name;
            this.location=location;
            this.img=img;
            this.capacity=capacity
        }
}