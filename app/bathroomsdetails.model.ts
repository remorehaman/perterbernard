export class Bathroomsdetails {
    public id:number
    public title:string;
    public productquantity:number;
    public productimage:string;
    public price:number;
    public descprition:string;
    // public image:string[];
    // public category : string;
    // public symbol : string

    constructor(id, banner_name,image,quantity,price,text){
        this.id = id;
        this.title = banner_name;
        this.productimage = image;
        this.productquantity = quantity;    
        this.price = price;
        this.descprition = text
    }

}

