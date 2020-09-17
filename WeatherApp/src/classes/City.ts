export class City{
    
    constructor(private name:string, private image_path: string){}

    getName(){ return this.name; }
    getImagePath(){ return this.image_path; }

}