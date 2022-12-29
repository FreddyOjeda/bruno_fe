export class ProductResponse{
    id!:number
    name: string | undefined;
    description!: string;
    image!: string;
    value!:number;

   constructor(id:number,name: string ,desc: string,img: string,value:number){
    this.id=id;
    this.name=name;
    this.description=desc;
    this.image=img;
    this.value = value;
   }
}