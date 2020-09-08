export class Note{
    text: string;
    title: string;
    creat_date: Date;

    constructor(title:string,text:string){
        this.title = title;
        this.text = text;
        this.creat_date = null;
    }

    clean(){
        this.title = "";
        this.text = "";
        this.creat_date = null;
    }

    save(){
        this.creat_date = new Date();
    }
}