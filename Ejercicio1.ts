export class Mobile {
    private name : string;
    private model : string;
    private trademark : string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    constructor (name:string, model:string, trademark:string,sdSize:number, color:string, is5G:boolean,cameraNumber:number,price:number){
        this.name= name;
        this.model=model;
        this.trademark=trademark;
        this.sdSize= sdSize;
        this.color= color;
        this.is5G= is5G;
        this.cameraNumber= cameraNumber;
        this.price=price;
    }

    gettheName ():string{
        return this.name
    }
    gettheModel ():string{
        return this.model
    }
    gettheTrademark ():string{
        return this.trademark
    }
    getthesdSize ():number{
        return this.sdSize
    }
    gettheColor ():string{
        return this.color
    }
    gettheIs5G ():boolean{
        return this.is5G
    }
    gettheCameraNumber ():number{
        return this.cameraNumber
    }
    getthePrice ():number{
        return this.price
    }

    setthisName (namee:string){
        this.name = namee
    }
    setthisModel(modeel:string){
        this.model = modeel
    }
    setthisTrademark (tradeemark:string){
        this.trademark = tradeemark
    }
    setthisSDSize (sd:number){
        this.sdSize = sd
    }
    setthisColor (colore:string){
        this.color = colore
    }
    setthisIs5G (Is5G:boolean){
        this.is5G = Is5G
    }
    setthisCameraNumber (numbeer:number){
        this.cameraNumber = numbeer
    }
    setthisPrice (pricee:number){
        this.price = pricee;
    }
    printObject(name:Mobile){
        console.log(`The characteristics of the mobile  ${name.gettheName()} are:`)
        console.log(`Name: ${this.gettheName()}`)
        console.log(`Model: ${this.gettheModel()}`)
        console.log(`Trademark: ${this.gettheTrademark()}`)
        console.log(`SD Size (GB): ${this.getthesdSize()}`)
        console.log(`Color: ${this.gettheColor()}`)
        console.log(`Is 5G: ${this.gettheIs5G()}`)
        console.log(`Number of Camaras: ${this.gettheCameraNumber()}`)

    }
    


}
//var Nokia3210:Mobile;
//Nokia3210 = new Mobile("Nokia3210","3210","Nokia",4,"red",false,0,100);

//Nokia3210.printObject(Nokia3210)